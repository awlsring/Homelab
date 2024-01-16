import { App, Duration, Size } from "cdk8s";
import {
  CERT_ISSUER_NAME_PROD,
  CERT_ISSUER_NAME_STAGING,
  CertIssuerName,
  LetsEncryptEndpoint,
} from "cdk8s-constructs";
import { CertManagerChart } from "../charts/system/cert-manager";
import { DeschedulerChart } from "../charts/system/descheduler";
import { ExternalDnsChart } from "../charts/system/external-dns";
import { ExternalSecretsChart } from "../charts/system/external-secrets";
import { IntelDevicePluginsChart } from "../charts/system/intel-device-operator";
import { KuredChart } from "../charts/system/kured";
import { MonitoringChart } from "../charts/system/monitoring";
import { NginxIngressChart } from "../charts/system/nginx";
import { NodeFeatureDiscoveryChart } from "../charts/system/node-feature-discovery";
import { OnePasswordConnectChart } from "../charts/system/onepassword-connect";
import { RookCephChart } from "../charts/system/rook-ceph";

const BLOCK_STORAGE_CLASS = "ceph-block";

export function assignSystemCharts(app: App) {
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

  new ExternalSecretsChart(app, "external-secrets");

  new OnePasswordConnectChart(app, "1password-connect", {
    ingress: {
      domain: "connect.us-drig-1.drigs.org",
      issuer: CERT_ISSUER_NAME_PROD,
    },
  });

  new KuredChart(app, "kured");

  new DeschedulerChart(app, "descheduler");

  new NodeFeatureDiscoveryChart(app, "node-feature-discovery");

  new IntelDevicePluginsChart(app, "intel-device-plugins");
}
