import { App, Size } from 'cdk8s';
import { ServiceType } from 'cdk8s-plus-25';
import * as dotenv from 'dotenv';
import { OnePasswordConnectChart } from './charts/1password-connect/chart';
import { AudioBookshelfChart } from './charts/audiobookshelf/chart';
import { ClusterExternalIngressChart } from './charts/cluster-external-ingress/chart';
import { ExternalDnsPiholeChart } from './charts/external-dns/pihole-chart';
import { ExternalIngressChart } from './charts/external-ingress/external-ingress-chart';
import { GithubActionsRunnersChart } from './charts/github-actions-runners/chart';
import { HeimdallChart } from './charts/heimdall/chart';
import { ImmichChart, LogLevel as ImmichLogLevel } from './charts/immich/chart';
import { LonghornChart } from './charts/longhorn/chart';
import { MosquittoChart } from './charts/mosquitto/chart';
import { DatabaseDriver, LogLevel, PhotoPrismChart } from './charts/photo-prism/chart';
import { PrometheusOperatorChart } from './charts/prometheus-operator/chart';
import { ServerBoiChart } from './charts/serverboi/chart';
import { TandoorChart, TandoorDatabaseEngine } from './charts/tandoor/chart';
import { TerraformBackendSurrealChart } from './charts/terraform-backend-surreal/chart';
import { CertIssuers, LetsEncryptEndpoint } from './charts/traefik-certmanager/cert-manager/chart';
import { TraefikCertManagerChart } from './charts/traefik-certmanager/chart';
import { ValheimChart } from './charts/valheim/chart';
import { YargChart } from './charts/yarg/chart';
dotenv.config({ path: __dirname+'/.env' });

const app = new App();

const traefikCertmanager = new TraefikCertManagerChart(app, 'traefik-cert-manager', {
  traefik: {
    createNamespace: true,
    namespace: 'traefik-system',
    replicas: 3,
    dashboard: {
      issuerName: 'prod',
      ingressClass: 'traefik-external',
      domainName: 'traefik.awlsring-sea.drigs.org',
      auth: {
        username: process.env.TRAEFIK_USER!,
        password: process.env.TRAEFIK_PASSWORD!,
      },
    },
  },
  certManager: {
    createNamespace: true,
    namespace: 'cert-manager',
    replicas: 3,
    nameservers: ['1.1.1.1', '9.9.9.9'],
    cloudflareToken: process.env.CLOUDFLARE_CERTMANAGER_TOKEN!,
    certIssuers: [
      {
        name: 'staging',
        endpoint: LetsEncryptEndpoint.STAGING,
        email: 'drigsnetwork@gmail.com',
        issuer: CertIssuers.CLOUDFLARE,
      },
      {
        name: 'prod',
        endpoint: LetsEncryptEndpoint.PROD,
        email: 'drigsnetwork@gmail.com',
        issuer: CertIssuers.CLOUDFLARE,
      },
    ],
    dnsZones: ['drigs.org'],
  },
});

const prodIssuer = traefikCertmanager.GetProdCertIssuer();
// const stagingIssuer = traefikCertmanager.GetStagingCertIssuer();

const longhorn = new LonghornChart(app, 'longhorn', {
  createNamespace: true,
  namespace: 'longhorn-system',
  serviceType: ServiceType.LOAD_BALANCER,
});

new MosquittoChart(app, 'mosquitto', {
  createNamespace: true,
  namespace: 'mosquitto',
  storageClass: longhorn.storageClassName,
});

new ClusterExternalIngressChart(app, 'cluster-external-ingress', {
  createNamespace: true,
  namespace: 'cluster-external',
  certIssuer: prodIssuer,
  defaultHeaders: traefikCertmanager.deafaultHeaders,
});

new OnePasswordConnectChart(app, 'onepassword-connect', {
  createNamespace: true,
  namespace: 'onepassword-connect',
  name: 'onepassword-connect',
  serviceType: ServiceType.LOAD_BALANCER,
  tls: {
    name: 'onepassword-connect',
    certIssuer: prodIssuer,
    dnsNames: ['onepassword.awlsring-sea.drigs.org'],
  },
});

new YargChart(app, 'yarg', {
  createNamespace: true,
  namespace: 'yarg',
  certIssuer: prodIssuer,
  nfsServer: '10.0.100.180',
  dnsDomain: 'awlsring-sea.drigs.org',
});

new TerraformBackendSurrealChart(app, 'terraform-backend-surreal', {
  createNamespace: true,
  namespace: 'terraform-backend-surreal',
  tls: {
    name: 'tf-backend',
    certIssuer: prodIssuer,
    dnsNames: ['tf-backend.awlsring-sea.drigs.org'],
  },
});

new GithubActionsRunnersChart(app, 'github-actions-runners', {
  createNamespace: true,
  namespace: 'github-actions-runners',
});

new ExternalIngressChart(app, 'truenas-external-ingress', {
  createNamespace: true,
  namespace: 'truenas-external',
  externalName: '10.0.10.150',
  port: 443,
  tls: {
    name: 'truenas',
    dnsNames: ['truenas.awlsring-sea.drigs.org'],
    certIssuer: prodIssuer,
  },
});

new ExternalIngressChart(app, 'frigate-external-ingress', {
  createNamespace: true,
  namespace: 'frigate-external',
  externalName: '10.0.10.9',
  port: 5000,
  tls: {
    name: 'frigate',
    dnsNames: ['frigate.awlsring-sea.drigs.org'],
    certIssuer: prodIssuer,
  },
});

new AudioBookshelfChart(app, 'audiobookshelf', {
  createNamespace: true,
  namespace: 'audiobookshelf',
  nfsServer: '10.0.100.180',
  mountPath: '/media',
  tls: {
    name: 'audiobookshelf',
    dnsNames: ['audiobookshelf.awlsring-sea.drigs.org'],
    certIssuer: prodIssuer,
  },
});

new ValheimChart(app, 'valheim', {
  createNamespace: true,
  namespace: 'valheim',
  chart: {
    server: {
      name: 'Drig Town USA',
      worldName: 'Drig Town USA',
      password: {
        secret: 'server-password',
      },
    },
    persistence: {
      server: {
        storageClass: longhorn.storageClassName,
      },
      config: {
        storageClass: longhorn.storageClassName,
        storage: Size.gibibytes(10),
      },
    },
    supervisorHttp: {
      enabled: true,
      password: {
        secret: 'supervisor-password',
      },
    },
    statusHttp: {
      enabled: true,
    },
  },
});

new ServerBoiChart(app, 'serverboi', {
  createNamespace: true,
  namespace: 'serverboi',
  apiTls: {
    name: 'api',
    certIssuer: prodIssuer,
    dnsNames: ['serverboi-api.awlsring-sea.drigs.org'],
  },
  discordBotTls: {
    name: 'discord-bot',
    certIssuer: prodIssuer,
    dnsNames: ['serverboi.drigs.org'],
  },
});

new PrometheusOperatorChart(app, 'prometheus', {
  namespace: 'monitoring',
  createNamespace: true,
  prometheusTls: {
    name: 'prometheus',
    certIssuer: prodIssuer,
    dnsNames: ['prometheus.awlsring-sea.drigs.org'],
  },
  grafanaTls: {
    name: 'grafana',
    certIssuer: prodIssuer,
    dnsNames: ['grafana.awlsring-sea.drigs.org'],
  },
  alertmanagerTls: {
    name: 'alerts',
    certIssuer: prodIssuer,
    dnsNames: ['alerts.awlsring-sea.drigs.org'],
  },
});

new ExternalDnsPiholeChart(app, 'external-dns-pihole', {
  namespace: 'external-dns-pihole',
  createNamespace: true,
  address: 'https://dns.awlsring-sea.drigs.org',
  passwordSecretName: 'pihole',
});

new PhotoPrismChart(app, 'matt-photoprism', {
  namespace: 'matt-photoprism',
  createNamespace: true,
  passwordSecret: 'photoprism-matt-secret',
  logLevel: LogLevel.DEBUG,
  database: {
    driver: DatabaseDriver.MYSQL,
    name: 'photoprismmatt',
    server: '10.0.100.184:3306',
    user: 'photoprism',
  },
  site: {
    siteUrl: 'https://matt-photos.awlsring-sea.drigs.org',
  },
  photosNfsOptions: {
    name: 'photos',
    server: '10.0.100.180',
    path: '/mnt/WD-6D-8T/photos',
  },
  tls: {
    name: 'matt-photoprism',
    certIssuer: prodIssuer,
    dnsNames: ['matt-photos.awlsring-sea.drigs.org'],
  },
});

new ImmichChart(app, 'immich', {
  createNamespace: true,
  namespace: 'immich',
  options: {
    dnsName: 'immich.awlsring-sea.drigs.org',
    generalOptions: {
      logLevel: ImmichLogLevel.DEBUG,
    },
    uploadShare: {
      name: 'immich-uploads',
      server: '10.0.100.180',
      path: '/mnt/WD-6D-8T/immich-uploads',
    },
    photoCollectionShares: [
      {
        name: 'photos',
        server: '10.0.100.180',
        path: '/mnt/WD-6D-8T/photos',
      },
    ],
    databaseOptions: {
      hostname: '10.0.100.98',
      user: 'immich',
      passwordSecret: 'immich-database-password',
      database: 'immich',
    },
  },
  tls: {
    name: 'immich',
    certIssuer: prodIssuer,
    dnsNames: ['immich.awlsring-sea.drigs.org'],
  },
});

new ExternalIngressChart(app, 'home-assistant-external-ingress', {
  createNamespace: true,
  namespace: 'home-assistant-external',
  externalName: '10.0.10.9',
  port: 8123,
  tls: {
    name: 'home-assistant',
    dnsNames: ['home.awlsring-sea.drigs.org'],
    certIssuer: prodIssuer,
  },
});

new HeimdallChart(app, 'heimdall', {
  createNamespace: true,
  namespace: 'heimdall',
  options: {
    timezone: 'America/Los_Angeles',
  },
  tls: {
    name: 'heimdall',
    dnsNames: ['apps.awlsring-sea.drigs.org'],
    certIssuer: prodIssuer,
  },
});

new TandoorChart(app, 'tandoor', {
  createNamespace: true,
  namespace: 'tandoor',
  options: {
    secretKeySecretName: 'tandoor-secret-key',
    timezone: 'America/Los_Angeles',
    enableSignUp: true,
  },
  databaseOptions: {
    engine: TandoorDatabaseEngine.POSTGRES,
    host: '10.0.100.98',
    user: 'tandoor',
    passwordSecretName: 'tandoor-database-password',
    database: 'tandoor',
  },
  tls: {
    name: 'tandoor',
    dnsNames: ['tandoor.awlsring-sea.drigs.org'],
    certIssuer: prodIssuer,
  },
});

app.synth();
