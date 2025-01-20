import { JsonPatch } from "cdk8s";
import {
  Ingress,
  IngressBackend,
  IngressProps,
  Secret,
  Service,
  ServiceType,
} from "cdk8s-plus-31";
import { Construct } from "constructs";
import { Endpoints } from "../kube/endpoints";
import { Annotation } from "../annotations/annotation";

const DEFAULT_SERVICE_PORT = 80;

export interface ExternalIngressProps {
  readonly address: string;
  readonly port: number;
  readonly hostname: string;
  readonly ingressClassName: string;
  readonly certIssuer: string;
  readonly certSecretName?: string;
  readonly servicePort?: number;
  readonly ingressAnnotations?: Annotation[];
}

export class ExternalIngress extends Ingress {
  constructor(scope: Construct, name: string, props: ExternalIngressProps) {
    const servicePort = props.servicePort ?? DEFAULT_SERVICE_PORT;

    const service = new Service(scope, `${name}-svc`, {
      ports: [
        {
          port: servicePort,
          targetPort: props.port,
        },
      ],
      clusterIP: "None",
      type: ServiceType.CLUSTER_IP,
    });

    new Endpoints(scope, `${name}-endpoint`, {
      service: service,
      address: props.address,
    });

    const certSecret = new Secret(
      scope,
      props.certSecretName ?? `${service.name}-tls`
    );
    const backend = IngressBackend.fromService(service, {
      port: servicePort,
    });
    const ingressProps: IngressProps = {
      rules: [
        {
          host: props.hostname,
          backend: backend,
        },
      ],
      tls: [
        {
          hosts: [props.hostname],
          secret: certSecret,
        },
      ],
    };

    super(scope, name, ingressProps);
    if (props.certIssuer) {
      this.metadata.addAnnotation(
        "cert-manager.io/cluster-issuer",
        props.certIssuer
      );
      this.metadata.addAnnotation("cert-manager.io/duration", "2160h");
      this.metadata.addAnnotation("cert-manager.io/renew-before", "360h");
    }
    if (props.ingressAnnotations) {
      props.ingressAnnotations.forEach((annotation) => {
        this.metadata.addAnnotation(annotation.key, annotation.value);
      });
    }
    this.apiObject.addJsonPatch(
      JsonPatch.add("/spec/ingressClassName", props.ingressClassName)
    );
  }
}
