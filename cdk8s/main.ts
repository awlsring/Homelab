import { App } from 'cdk8s';
import { TraefikCertManagerChart } from './lib/charts/traefik-certmanager/chart';
import { CertIssuers, LetsEncryptEndpoint } from './lib/charts/traefik-certmanager/cert-manager/chart';
import * as dotenv from "dotenv";
import { ClusterExternalIngressChart } from './lib/charts/cluster-external-ingress/chart';
import { OnePasswordConnectChart } from './lib/charts/1password-connect/chart';
import { ServiceType } from 'cdk8s-plus-25';
import { LonghornChart } from './lib/charts/longhorn/chart';
import { YargChart } from './lib/charts/yarg/chart';
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

const prodIssuer = traefikCertmanager.GetProdCertIssuer()
const stagingIssuer = traefikCertmanager.GetStagingCertIssuer()

new ClusterExternalIngressChart(app, "cluster-external-ingress", {
  createNamespace: true,
  namespace: "cluster-external",
  certIssuer: prodIssuer,
  defaultHeaders: traefikCertmanager.deafaultHeaders,
})

const credentialsJson = process.env.ONEPASSWORD_JSON;
if (!credentialsJson) {
  throw new Error("ONEPASSWORD_JSON environment variable is not set");
}
new OnePasswordConnectChart(app, "onepassword-connect", {
  createNamespace: true,
  namespace: "onepassword-connect",
  name: "onepassword-connect",
  credentialsJson: credentialsJson,
  serviceType: ServiceType.LOAD_BALANCER,
  tls: {
    name: "onepassword-connect",
    certIssuer: prodIssuer,
    dnsName: "onepassword.awlsring-sea.drigs.org",
    service: {
      name: "onepassword-connect",
      port: 8080,
    }
  }
})

new LonghornChart(app, "longhorn", {
  createNamespace: true,
  namespace: "longhorn-system",
  serviceType: ServiceType.LOAD_BALANCER,
})

new YargChart(app, "yarg", {
  createNamespace: true,
  namespace: "yarg",
  certIssuer: prodIssuer,
  nfsServer: "10.0.100.180",
  dnsDomain: "awlsring-sea.drigs.org",
})

app.synth();
