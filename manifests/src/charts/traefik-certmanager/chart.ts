import { Chart, ChartProps } from "cdk8s";
import { Construct } from "constructs";
import { ClusterIssuer } from "../../imports/certmanager-cert-manager.io";
import { Middleware } from "../../imports/traefik-traefik.containo.us";
import { CertManagerChart, CertManagerChartProps } from "./cert-manager/chart";
import { TraefikChart, TraefikChartProps } from "./traefik/chart";
import { Dashboard } from "./traefik/dashboard";

export interface TraefikCertManagerChartProps extends ChartProps {
  traefik: TraefikChartProps
  certManager: CertManagerChartProps
}

export class TraefikCertManagerChart extends Chart {
  readonly certIssuers: Map<string, ClusterIssuer>
  readonly deafaultHeaders: Middleware

  GetStagingCertIssuer(): ClusterIssuer {
    return this.certIssuers.get("staging")!
  }

  GetProdCertIssuer(): ClusterIssuer {
    return this.certIssuers.get("prod")!
  }
  
  constructor(scope: Construct, name: string, props: TraefikCertManagerChartProps) {
    super(scope, name, props)

    const certManager = new CertManagerChart(this, "cert-manager", props.certManager)
    this.certIssuers = certManager.issuers

    const traefik = new TraefikChart(this, "traefik", props.traefik)
    this.deafaultHeaders = traefik.defaultHeaders
    if (props.traefik.dashboard) {
      const issuer = certManager.issuers.get(props.traefik.dashboard.issuerName)
      if (issuer) {
        new Dashboard(traefik, "dashboard", {
          ...props.traefik.dashboard,
          namespace: props.traefik.namespace!,
          issuer: issuer
        })
      }
    }
  }
}