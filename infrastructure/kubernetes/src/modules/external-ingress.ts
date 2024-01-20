import { App } from "cdk8s";
import {
  Annotation,
  CERT_ISSUER_NAME_PROD,
  KubeIngressAnnotations,
  NginxIngressAnnotations,
} from "cdk8s-constructs";
import {
  ExternalIngressChart,
  ExternalIngressTarget,
} from "../charts/external-ingress";

export function assignExternalIngressCharts(app: App) {
  const proxmoxAnnotations: Annotation[] = [
    KubeIngressAnnotations.configurationSnippet(
      "proxy_set_header Host $http_host;\nproxy_set_header X-Real-IP $remote_addr;\nproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;      \nproxy_http_version 1.1;\nproxy_set_header Upgrade $http_upgrade;\nproxy_set_header Connection $connection_upgrade;      ",
    ),
    NginxIngressAnnotations.backendProtocolHTTPS(),
    NginxIngressAnnotations.corsAllowHeaders(["Authorization"]),
    NginxIngressAnnotations.corsAllowMethods([
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS",
    ]),
    NginxIngressAnnotations.corsAllowOrigin("*"),
    NginxIngressAnnotations.corsEnabled(),
    NginxIngressAnnotations.proxyBodySize("0"),
    NginxIngressAnnotations.serverSnippets([
      "client_max_body_size 100G;",
      "server_tokens off;",
      "proxy_hide_header X-Powered-By;",
    ]),
  ];

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
    {
      name: "dominaria",
      address: "10.0.10.11",
      hostname: "dominaria.us-drig-1.drigs.org",
      port: 8006,
      servicePort: 8006,
      ingressAnnotations: proxmoxAnnotations,
    },
    {
      name: "ravnica",
      address: "10.0.10.11",
      hostname: "ravnica.us-drig-1.drigs.org",
      port: 8006,
      servicePort: 8006,
      ingressAnnotations: proxmoxAnnotations,
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
