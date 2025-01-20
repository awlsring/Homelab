import { App, Duration, Size } from "cdk8s";
import { Module } from "./modules";
import { CERT_ISSUER_NAME_PROD } from "../constructs/cert-manager/issuers";
import { MonitoringChart } from "../charts/platforms/monitoring";
import { ExternalDnsChart } from "../charts/platforms/external-dns";
import { OnePasswordConnectChart } from "../charts/platforms/onepassword-connect";
import { Configuration } from "../config/configuration";
import { CloudnativePgChart } from "../charts/platforms/cloudnative-pg-operator";

const BLOCK_STORAGE_CLASS = "ceph-block";

export class PlatformModule extends Module {
  constructor(app: App, config: Configuration) {
    super(app, config);

    new MonitoringChart(app, "monitoring", {
      prometheus: {
        storageSize: Size.gibibytes(300),
        storageClass: BLOCK_STORAGE_CLASS,
        retention: Duration.days(5),
        scapeTargets: [
          {
            name: "node-exporter",
            staticConfigs: [
              { targets: ["10.0.10.125:9090", "10.0.10.9:9100"] },
            ],
          },
          {
            name: "comin",
            staticConfigs: [{ targets: ["10.0.10.125:4243"] }],
          },
          {
            name: "tplink-plug-exporter",
            staticConfigs: [{ targets: ["10.0.30.169", "10.0.30.9"] }],
            metricsPath: "/scrape",
            relabelConfig: [
              {
                sourceLabels: ["__address__"],
                targetLabel: "__param_target",
              },
              {
                sourceLabels: ["__param_target"],
                targetLabel: "instance",
              },
              // TODO: make this via service monitor somehow
              {
                targetLabel: "__address__",
                replacement:
                  "tplink-plug-exporter-service-c893c08b.tplink-plug-exporter.svc.cluster.local:9233",
              },
            ],
          },
        ],
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

    new OnePasswordConnectChart(app, "1password-connect", {
      ingress: {
        domain: "connect.us-drig-1.drigs.org",
        issuer: CERT_ISSUER_NAME_PROD,
      },
    });

    // TODO: allow traffic from nginx to these https://cloudnative-pg.io/documentation/1.15/expose_pg_services/
    new CloudnativePgChart(app, "cloudnative-pg");
  }
}
