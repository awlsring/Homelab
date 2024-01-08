import { App } from "cdk8s";
import {
  CERT_ISSUER_NAME_PROD,
  CERT_ISSUER_NAME_STAGING,
  CertIssuerName,
  LetsEncryptEndpoint,
  ServiceType,
} from "cdk8s-constructs";
import { OnePasswordConnectChart } from "./charts/1password-connect";
import { CertManagerChart } from "./charts/cert-manager";
import { CloudflareExternalDnsChart } from "./charts/external-dns";
import { KuredChart } from "./charts/kured";
import { LonghornChart } from "./charts/longhorn";
import { MonitoringChart } from "./charts/monitoring-chart";
import { TraefikV2Chart } from "./charts/traefik2";

const app = new App();

new LonghornChart(app, "longhorn");

const certIssuerCommon = {
  endpoint: LetsEncryptEndpoint.STAGING,
  email: "drigsnetwork@gmail.com",
  issuer: CertIssuerName.CLOUDFLARE,
  dnsZones: ["drigs.org"],
  issuerSecretReference: {
    name: "cloudflare-api-key",
    key: "TOKEN",
  },
};
new CertManagerChart(app, "cert-manager", {
  replicas: 3,
  certIssuers: [
    {
      name: CERT_ISSUER_NAME_STAGING,
      ...certIssuerCommon,
    },
    {
      name: CERT_ISSUER_NAME_PROD,
      ...certIssuerCommon,
    },
  ],
});

new TraefikV2Chart(app, "traefik", {
  replicas: 3,
});

// new OnePasswordConnectChart(app, "1password-connect", {
//   serviceType: ServiceType.LOAD_BALANCER,
//   tls: {
//     name: "1password-connect",
//     certIssuerName: CERT_ISSUER_NAME_PROD,
//     dnsNames: ["connect.awlsring-sea.drigs.org"],
//   },
// });

new MonitoringChart(app, "monitoring");

new CloudflareExternalDnsChart(app, "external-dns", {
  cloudflareTokenSecretRef: {
    name: "cloudflare-api-key",
    key: "TOKEN",
  },
});

new KuredChart(app, "kured");

app.synth();
