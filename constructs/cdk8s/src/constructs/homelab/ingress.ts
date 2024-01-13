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

export interface HomelabIngressOptions {
  readonly ingressClass: string;
  readonly type?: ServiceType;
  readonly hostname: string;
  readonly certIssuer: string;
}

export interface HomelabIngressProps {
  readonly service: Service;
  readonly hostname: string;
  readonly ingressClassName?: string;
  readonly certIssuer?: string;
  readonly certSecretName?: string;
}

export class HomelabIngress extends Ingress {
  constructor(scope: Construct, name: string, props: HomelabIngressProps) {
    const certSecret = new Secret(
      scope,
      props.certSecretName ?? `${props.service.name}-tls`,
    );
    const ingressProps: IngressProps = {
      rules: [
        {
          host: props.hostname,
          backend: IngressBackend.fromService(props.service),
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
