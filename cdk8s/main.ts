import { App } from 'cdk8s';
import { TraefikCertManagerChart } from './lib/charts/traefik-certmanager/chart';
import { CertIssuers, LetsEncryptEndpoint } from './lib/charts/traefik-certmanager/cert-manager/chart';
import * as dotenv from "dotenv";
import { ClusterExternalIngressChart } from './lib/charts/cluster-external-ingress/chart';
dotenv.config({ path: __dirname+'/.env' });

const app = new App();

const traefikCertmanager = new TraefikCertManagerChart(app, "traefik-cert-manager", {
  traefik: {
    createNamespace: true,
    namespace: "traefik-system",
    replicas: 3,
    dashboard: {
      issuerName: "prod",
      ingressClass: "traefik-external",
      domainName: "traefik.awlsring-sea.drigs.org",
      auth: {
        username: process.env.TRAEFIK_USER!,
        password: process.env.TRAEFIK_PASSWORD!
      }
    }
  },
  certManager: {
    createNamespace: true,
    namespace: "cert-manager",
    replicas: 3,
    nameservers: ["1.1.1.1", "9.9.9.9"],
    cloudflareToken: process.env.CLOUDFLARE_CERTMANAGER_TOKEN!,
    certIssuers: [
      {
        name: "staging",
        endpoint: LetsEncryptEndpoint.STAGING,
        email: "drigsnetwork@gmail.com",
        issuer: CertIssuers.CLOUDFLARE,
      },
      {
        name: "prod",
        endpoint: LetsEncryptEndpoint.PROD,
        email: "drigsnetwork@gmail.com",
        issuer: CertIssuers.CLOUDFLARE,
      }
    ],
    dnsZones: ["drigs.org"]
  }
})

const prodIssuer = traefikCertmanager.certIssuers.get("prod")
// const stagingIssuer = traefikCertmanager.certIssuers.get("staging")
if (prodIssuer) {
  new ClusterExternalIngressChart(app, "cluster-external-ingress", {
    createNamespace: true,
    namespace: "cluster-external",
    certIssuer: prodIssuer,
    defaultHeaders: traefikCertmanager.deafaultHeaders,
  })
}
app.synth();
