import { App } from "cdk8s";
import {
  ExternalIngressChart,
  ExternalIngressTarget,
} from "../charts/external-ingress";
import { NginxIngressAnnotations } from "../constructs/annotations/nginx-ingress-annotations";
import { CERT_ISSUER_NAME_PROD } from "../constructs/cert-manager/issuers";
import { Configuration } from "../config/configuration";
import { Module } from "./modules";

export class ExternalIngressModule extends Module {
  constructor(app: App, config: Configuration) {
    super(app, config);

    const targets: ExternalIngressTarget[] = [
      {
        name: "frigate",
        address: "10.0.10.9",
        hostname: "frigate.us-drig-1.drigs.org",
        port: 5000,
      },
      {
        name: "home",
        address: "10.0.10.9",
        hostname: "home.us-drig-1.drigs.org",
        port: 8123,
      },
      {
        name: "z2m",
        address: "10.0.30.46",
        hostname: "z2m.us-drig-1.drigs.org",
        port: 8080,
      },
      {
        name: "dns",
        address: "10.10.10.10",
        hostname: "dns.us-drig-1.drigs.org",
        port: 80,
        ingressAnnotations: [NginxIngressAnnotations.appRoot("/admin")],
      },
      {
        name: "truenas",
        address: "10.0.10.180",
        hostname: "truenas.us-drig-1.drigs.org",
        port: 80,
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
}
