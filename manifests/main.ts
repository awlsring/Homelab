import { App } from 'cdk8s';
import { TraefikCertManagerChart } from './lib/charts/traefik-certmanager/chart';
import { CertIssuers, LetsEncryptEndpoint } from './lib/charts/traefik-certmanager/cert-manager/chart';
import * as dotenv from "dotenv";
import { ClusterExternalIngressChart } from './lib/charts/cluster-external-ingress/chart';
import { OnePasswordConnectChart } from './lib/charts/1password-connect/chart';
import { ServiceType } from 'cdk8s-plus-25';
import { LonghornChart } from './lib/charts/longhorn/chart';
import { YargChart } from './lib/charts/yarg/chart';
import { MosquittoChart } from './lib/charts/mosquitto/chart';
import { TerraformBackendSurrealChart } from './lib/charts/terraform-backend-surreal/chart';
import { GithubActionsRunnersChart } from './lib/charts/github-actions-runners/chart';
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

const longhorn = new LonghornChart(app, "longhorn", {
  createNamespace: true,
  namespace: "longhorn-system",
  serviceType: ServiceType.LOAD_BALANCER,
})

new MosquittoChart(app, "mosquitto", {
  createNamespace: true,
  namespace: "mosquitto",
  storageClass: longhorn.storageClassName,
})

new ClusterExternalIngressChart(app, "cluster-external-ingress", {
  createNamespace: true,
  namespace: "cluster-external",
  certIssuer: prodIssuer,
  defaultHeaders: traefikCertmanager.deafaultHeaders,
})

new OnePasswordConnectChart(app, "onepassword-connect", {
  createNamespace: true,
  namespace: "onepassword-connect",
  name: "onepassword-connect",
  serviceType: ServiceType.LOAD_BALANCER,
  tls: {
    name: "onepassword-connect",
    certIssuer: prodIssuer,
    dnsName: "onepassword.awlsring-sea.drigs.org",
  }
})

new YargChart(app, "yarg", {
  createNamespace: true,
  namespace: "yarg",
  certIssuer: prodIssuer,
  nfsServer: "10.0.100.180",
  dnsDomain: "awlsring-sea.drigs.org",
})

new TerraformBackendSurrealChart(app, "terraform-backend-surreal", {
  createNamespace: true,
  namespace: "terraform-backend-surreal",
  tls: {
    name: "tf-backend",
    certIssuer: prodIssuer,
    dnsName: "tf-backend.awlsring-sea.drigs.org",
  }
})

new GithubActionsRunnersChart(app, "github-actions-runners", {
  createNamespace: true,
  namespace: "github-actions-runners",
})

app.synth();
