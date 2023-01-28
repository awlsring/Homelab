import { Construct } from "constructs";
import { IngressRoute, IngressRouteProps, IngressRouteSpecRoutes } from "../imports/traefik-traefik.containo.us";
import { HomelabCertificate } from "./homelab-certificate";

export enum ClusterIngressClass {
  TRAEFIC_EXTERNAL = "traefik-external"
}

export interface HomelabTraefikIngressRouteProps {
  routes: IngressRouteSpecRoutes[]
  certificate: HomelabCertificate
  ingressClass?: ClusterIngressClass
}

export class HomelabTraefikIngressRoute extends IngressRoute {
  constructor(scope: Construct, name: string, props: HomelabTraefikIngressRouteProps) {
    const ingressProps: IngressRouteProps = {
      metadata: {
        annotations: {
          "kubernetes.io/ingress.class": props.ingressClass ?? ClusterIngressClass.TRAEFIC_EXTERNAL
        }
      },
      spec: {
        entryPoints: [
          "websecure"
        ],
        routes: props.routes,
        tls: {
          secretName: props.certificate.secretName
        }
      }
    }

    super(scope, name, ingressProps)
  }
}