import { JsonPatch } from "cdk8s";
import {
  IngressBackend,
  IngressProps,
  Ingress,
  Secret,
  ServiceType,
  Service,
} from "cdk8s-plus-31";
import { Construct } from "constructs";
import { Annotation } from "../annotations/annotation";

export interface HomelabIngressOptions {
  readonly ingressClass: string;
  readonly type?: ServiceType;
  readonly hostname: string;
  readonly certIssuer: string;
  readonly annotations?: Annotation[];
}

export interface HomelabIngressProps {
  readonly service: Service;
  readonly hostname: string;
  readonly port?: number;
  readonly ingressClassName?: string;
  readonly certIssuer?: string;
  readonly certSecretName?: string;
  readonly annotations?: Annotation[];
}

export class HomelabIngress extends Ingress {
  readonly certSecret: Secret;

  constructor(scope: Construct, name: string, props: HomelabIngressProps) {
    const backend = IngressBackend.fromService(props.service, {
      port: props.port,
    });
    const certSecret = new Secret(
      scope,
      props.certSecretName ?? `${props.service.name}-tls`,
    );
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
    if (props.annotations) {
      props.annotations.forEach((annotation) => {
        this.metadata.addAnnotation(annotation.key, annotation.value);
      });
    }
    this.apiObject.addJsonPatch(
      JsonPatch.add("/spec/ingressClassName", props.ingressClassName),
    );
    this.certSecret = certSecret;
  }
}
