import { App, Duration, Size } from "cdk8s";
import {
  CERT_ISSUER_NAME_PROD,
  CERT_ISSUER_NAME_STAGING,
  CertIssuerName,
  LetsEncryptEndpoint,
} from "cdk8s-constructs";
import { CertManagerChart } from "./charts/cert-manager";
import { DeschedulerChart } from "./charts/descheduler";
import { ExternalDnsChart } from "./charts/external-dns";
import { KuredChart } from "./charts/kured";
import { MonitoringChart } from "./charts/monitoring";
import { NginxIngressChart } from "./charts/nginx";
import { NodeFeatureDiscoveryChart } from "./charts/node-feature-discovery";
import { RookCephChart } from "./charts/rook-ceph";

const BLOCK_STORAGE_CLASS = "ceph-block";

const app = new App();

new NginxIngressChart(app, "nginx-ingress");

const certIssuerCommon = {
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
      endpoint: LetsEncryptEndpoint.STAGING,
      ...certIssuerCommon,
    },
    {
      name: CERT_ISSUER_NAME_PROD,
      endpoint: LetsEncryptEndpoint.PROD,
      ...certIssuerCommon,
    },
  ],
});

new RookCephChart(app, "rook-ceph");

// new OnePasswordConnectChart(app, "1password-connect", {
//   serviceType: ServiceType.LOAD_BALANCER,
//   tls: {
//     name: "1password-connect",
//     certIssuerName: CERT_ISSUER_NAME_PROD,
//     dnsNames: ["connect.awlsring-sea.drigs.org"],
//   },
// });

new MonitoringChart(app, "monitoring", {
  prometheus: {
    storageSize: Size.gibibytes(300),
    storageClass: BLOCK_STORAGE_CLASS,
    retention: Duration.days(5),
  },
  alertmanager: {
    storageSize: Size.gibibytes(2),
    storageClass: BLOCK_STORAGE_CLASS,
  },
});

new ExternalDnsChart(app, "external-dns", {
  imageTag: "v0.14.0",
  pihole: {
    address: "http://10.10.10.10",
    passwordSecretRef: {
      name: "pihole-password",
      key: "EXTERNAL_DNS_PIHOLE_PASSWORD",
    },
  },
  cloudflare: {
    tokenSecretRef: {
      name: "cloudflare-api-key",
      key: "TOKEN",
    },
  },
});

new KuredChart(app, "kured");

new DeschedulerChart(app, "descheduler");

new NodeFeatureDiscoveryChart(app, "node-feature-discovery");

app.synth();
