import { App } from "cdk8s";
import { CERT_ISSUER_NAME_PROD } from "cdk8s-constructs";
import {
  ExternalIngressChart,
  ExternalIngressTarget,
} from "../charts/external-ingress";

export function assignExternalIngressCharts(app: App) {
  const targets: ExternalIngressTarget[] = [
    {
      name: "frigate",
      address: "10.0.10.9",
      hostname: "frigate.us-drig-1.drigs.org",
      port: 5000,
    },
  ];

  new ExternalIngressChart(app, "external-ingress", {
    createNamespace: true,
    namespace: "external-ingress",
    certIssuer: CERT_ISSUER_NAME_PROD,
    ingressClass: "nginx",
    targets: targets,
  });
}
