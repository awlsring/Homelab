import { Construct } from "constructs";
import {
  IngressRoute,
  IngressRouteSpecRoutes,
} from "../../imports/traefik.containo.us";
import { HomelabCertificate } from "../cert-manager/homelab-certificate";

export enum ClusterIngressClass {
  TRAEFIC_EXTERNAL = "traefik-external",
}

export interface HomelabTraefikIngressRouteProps {
  readonly routes: IngressRouteSpecRoutes[];
  readonly certificate?: HomelabCertificate;
  readonly ingressClass?: ClusterIngressClass;
}

export class HomelabTraefikIngressRoute extends Construct {
  constructor(
    scope: Construct,
    name: string,
    props: HomelabTraefikIngressRouteProps,
  ) {
    super(scope, name);
    new IngressRoute(this, "ingress-route", {
      metadata: {
        annotations: {
          "kubernetes.io/ingress.class":
            props.ingressClass ?? ClusterIngressClass.TRAEFIC_EXTERNAL,
        },
      },
      spec: {
        entryPoints: ["websecure"],
        routes: props.routes,
        tls: props.certificate
          ? {
              secretName: props.certificate.secretName,
            }
          : undefined,
      },
    });
  }
}
