import { JsonPatch } from "cdk8s";
import {
  Ingress,
  IngressBackend,
  IngressProps,
  Secret,
  Service,
  ServiceType,
} from "cdk8s-plus-27";
import { Construct } from "constructs";
import { Endpoints } from "../kube/endpoints";

export interface ExternalIngressProps {
  readonly address: string;
  readonly port: number;
  readonly hostname: string;
  readonly ingressClassName: string;
  readonly certIssuer: string;
  readonly certSecretName?: string;
}

export class ExternalIngress extends Ingress {
  constructor(scope: Construct, name: string, props: ExternalIngressProps) {
    const service = new Service(scope, `${name}-svc`, {
      ports: [
        {
          port: 80,
          targetPort: props.port,
        },
      ],
      clusterIP: "None",
      type: ServiceType.CLUSTER_IP,
    });

    new Endpoints(scope, "endpoint", {
      service: service,
      address: props.address,
    });

    const certSecret = new Secret(
      scope,
      props.certSecretName ?? `${service.name}-tls`,
    );
    const backend = IngressBackend.fromService(service, {
      port: 80,
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
        props.certIssuer,
      );
      this.metadata.addAnnotation("cert-manager.io/duration", "2160h");
      this.metadata.addAnnotation("cert-manager.io/renew-before", "360h");
    }
    this.apiObject.addJsonPatch(
      JsonPatch.add("/spec/ingressClassName", props.ingressClassName),
    );
  }
}
