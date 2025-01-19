import { App } from "cdk8s";
import { Module } from "./modules";
import { NginxIngressChart } from "../charts/system/nginx";
import {
  CertIssuerName,
  LetsEncryptEndpoint,
} from "../constructs/cert-manager/cert-issuer";
import { CertManagerChart } from "../charts/system/cert-manager";
import {
  CERT_ISSUER_NAME_PROD,
  CERT_ISSUER_NAME_STAGING,
} from "../constructs/cert-manager/issuers";
import { RookCephChart } from "../charts/system/rook-ceph";
import { ExternalSecretsChart } from "../charts/system/external-secrets";
import { KuredChart } from "../charts/system/kured";
import { DeschedulerChart } from "../charts/system/descheduler";
import { NodeFeatureDiscoveryChart } from "../charts/system/node-feature-discovery";
import { IntelDevicePluginsChart } from "../charts/system/intel-device-operator";
import { Configuration } from "../config/configuration";

export class SystemModule extends Module {
  constructor(app: App, config: Configuration) {
    super(app, config);

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

    new ExternalSecretsChart(app, "external-secrets");

    new KuredChart(app, "kured");

    new DeschedulerChart(app, "descheduler");

    new NodeFeatureDiscoveryChart(app, "node-feature-discovery");

    new IntelDevicePluginsChart(app, "intel-device-plugins");
  }
}
