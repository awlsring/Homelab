import { Secret } from "cdk8s-plus-25";
import { Construct } from "constructs";
import { ClusterIssuer } from "../../../../imports/certmanager-cert-manager.io";
import { IngressRoute, IngressRouteProps, IngressRouteSpecRoutesKind, IngressRouteSpecRoutesServicesKind, Middleware } from "../../../../imports/traefik-traefik.containo.us";
import { GenerateCertForService } from "../../../service-utils/service-utils";
import { DashboardOptions } from "./chart";

/**
 * Properties that scope creation of the dashboard
 * 
 * @params domainName - Domain name to access dashboard at (traefik.example.com)
 * @params auth- Object with username and password to access dashboard. Default is undefined
 */
export interface DashboardProps extends DashboardOptions {
  issuer: ClusterIssuer
  namespace: string
}

export class Dashboard extends Construct {
  /**
   * Construct that creates resources to access the traefik dashboard.
   * 
   * @params {@link Construct|scope} - Scope which the construct belongs.
   * @params id - ID of the resources.
   * @params {@link DashboardProps|props} - The traefik dashboard props. 
   */
  constructor(scope: Construct, id: string, props: DashboardProps) {
    super(scope, id)

    GenerateCertForService(this, {
      name: "dashboard-tls",
      namespace: props.namespace,
      issuer: props.issuer,
      commonName: "*.awlsring-sea.drigs.org",
      dnsNames: ["awlsring-sea.drigs.org"]
    })

    const ingressRouteProps: IngressRouteProps = {
      metadata: {
        annotations: {
          "kubernetes.io/ingress.class": props.ingressClass
        }
      },
      spec: {
        entryPoints: [
          "websecure"
        ],
        routes: [
          {
            kind: IngressRouteSpecRoutesKind.RULE,
            match: `Host(\`${props.domainName}\`) && (PathPrefix(\`/api\`) || PathPrefix(\`/dashboard\`))`,
            middlewares: [],
            services: [
              {
                name: "api@internal",
                kind: IngressRouteSpecRoutesServicesKind.TRAEFIK_SERVICE
              }
            ]
          }
        ],
        tls: {
          secretName: "dashboard-tls"
        }
      }
    }
    
    if (props.auth) {
      const dashboardAuth = new Secret(this, "dashboard-auth", {
        type: "kubernetes.io/basic-auth"
      })
      dashboardAuth.addStringData("username", props.auth.username)
      dashboardAuth.addStringData("password", props.auth.password)
      const authMiddleware = new Middleware(this, "dashboard-auth-middleware", {
        metadata: {},
        spec: {
          basicAuth: {
            secret: dashboardAuth.name
          }
        }
      })

      const ingressMiddleware = {
        name: authMiddleware.metadata.name!,
        namespace: authMiddleware.metadata.namespace
      }
      
      ingressRouteProps.spec.routes[0].middlewares?.push(ingressMiddleware)
    }

    new IngressRoute(this, "dashboard-ingress", ingressRouteProps)
  }
}