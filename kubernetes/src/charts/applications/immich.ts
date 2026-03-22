import { Duration, Size } from "cdk8s";
import {
  Cpu,
  Deployment,
  EnvValue,
  Probe,
  Protocol,
  Service,
  ServiceType,
  Volume,
} from "cdk8s-plus-31";
import { Construct } from "constructs";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
import { HomelabIngressOptions } from "../../constructs/homelab/ingress";
import {
  Immich,
  ImmichGeneralOptions,
  ImmichGeocodingOptions,
  ImmichMachineLearningOptions,
  ImmichPhotoVolumeOptions,
} from "../../constructs/applications/immich";
import { OnepasswordSecretPassword } from "../../constructs/external-secrets/onepassword-secret-password";
import {
  SecretStore,
  SecretStoreType,
} from "../../constructs/external-secrets/secret-store";
import { Cluster } from "../../constructs/cnpg/cluster";
import { ClusterSpecBackupBarmanObjectStoreWalCompression } from "../../imports/clusters-postgresql.cnpg.io";
import { CronSchedule } from "../../constructs/cnpg/scheduled-backup";
import { CloudflareClusterTunnel } from "../../constructs/cloudflare/tunnel/cluster-tunnel";

const REDIS_PORT = 6379;
const REDIS_IMAGE = "redis:6.2-alpine3.19";
const DB_IMAGE = "ghcr.io/tensorchord/cloudnative-vectorchord:16-0.4.3";
const IMMICH_PUBLIC_PROXY_IMAGE = "alangrainger/immich-public-proxy";
const IMMICH_PUBLIC_PROXY_PORT = 3000;

export interface ImmichChartProps extends HomelabChartProps {
  readonly imageTag: string;
  readonly ingress: HomelabIngressOptions;
  readonly secretStore: string;
  readonly generalOptions?: ImmichGeneralOptions;
  readonly geocoding?: ImmichGeocodingOptions;
  readonly database: {
    readonly username: string;
    readonly database: string;
    readonly passwordSecret: string;
    readonly storageClass: string;
  };
  readonly uploadStorage: {
    readonly server: string;
    readonly serverPath: string;
  };
  readonly externalCollections: {
    readonly server: string;
    readonly serverPath: string;
    readonly name: string;
  }[];
  readonly machineLearning: {
    readonly cache: {
      readonly storageClass: string;
      readonly size?: Size;
    };
    readonly imageTag?: string;
    readonly options?: Omit<ImmichMachineLearningOptions, "cache" | "imageTag">;
  };
  readonly publicProxy?: {
    readonly imageTag: string;
    readonly publicBaseUrl: string;
    readonly tunnel: {
      readonly email: string;
      readonly domain: string;
      readonly cloudflareSecret: string;
      readonly accountId: string;
      readonly fqdn: string;
    };
  };
}

export class ImmichChart extends HomelabChart {

  constructor(scope: Construct, name: string, props: ImmichChartProps) {
    super(scope, name, props);

    const nfsPhotos = Volume.fromNfs(this, "nfs-vol", "media", {
      server: props.uploadStorage.server,
      path: props.uploadStorage.serverPath,
    });

    const externalCollections: ImmichPhotoVolumeOptions[] =
      props.externalCollections.map((collection) => {
        const vol = Volume.fromNfs(this, collection.server, collection.name, {
          server: collection.server,
          path: collection.serverPath,
        });
        return {
          name: collection.name,
          volume: vol,
        };
      });

    const secretStore = SecretStore.fromName(
      this,
      props.secretStore,
      SecretStoreType.CLUSTER_SECRET_STORE
    );

    const dbSecret = new OnepasswordSecretPassword(this, "database-secret", {
      store: secretStore,
      secretKey: "immich-database-password",
    });
    const dbKubeSecret = dbSecret.asSecret();

    const backupStoreAccessKey = new OnepasswordSecretPassword(
      this,
      "backup-store-access-key",
      {
        store: secretStore,
        secretKey: "cnpg-access-key",
      }
    );

    const backupStoreSecretKey = new OnepasswordSecretPassword(
      this,
      "backup-store-secret-key",
      {
        store: secretStore,
        secretKey: "cnpg-secret-key",
      }
    );

    const dbCluster = new Cluster(this, "db", {
      storage: {
        storageClass: props.database.storageClass,
        size: Size.gibibytes(10),
      },
      backup: {
        destinationPath: "s3://awlsring-homelab-cnpg-db-backups/immich-db",
        endpoint: "https://s3.us-east-005.backblazeb2.com",
        walCompression: ClusterSpecBackupBarmanObjectStoreWalCompression.GZIP,
        credentials: {
          accessKeyId: backupStoreAccessKey.asSecretReference(),
          secretAccessKey: backupStoreSecretKey.asSecretReference(),
        },
      },
      sharedPreloadLibraries: ["vchord.so"],
      image: DB_IMAGE,
      database: {
        database: "immich",
        username: "immich",
        password: {
          name: dbKubeSecret.name,
        },
      },
    });
    dbCluster.createScheduledBackup(
      "db-backup",
      new CronSchedule({ second: 0, minute: 0, hour: 1 })
    );

    const redis = new Deployment(this, "redis-deployment", {
      replicas: 1,
      containers: [
        {
          name: "redis",
          image: REDIS_IMAGE,
          ports: [{ name: "redis", number: REDIS_PORT }],
          resources: {
            cpu: {
              request: Cpu.millis(200),
              limit: Cpu.millis(2000),
            },
            memory: {
              request: Size.mebibytes(256),
              limit: Size.gibibytes(4),
            },
          },
          securityContext: {
            ensureNonRoot: false,
            privileged: true,
            readOnlyRootFilesystem: false,
            allowPrivilegeEscalation: true,
          },
        },
      ],
    });

    const redisService = new Service(this, "redis-service", {
      ports: [
        {
          name: "http",
          port: REDIS_PORT,
          targetPort: REDIS_PORT,
        },
      ],
      selector: redis,
    });

    const immich = new Immich(this, "app", {
      uploadShare: nfsPhotos,
      photoCollectionShares: externalCollections,
      monitoring: true,
      generalOptions: props.generalOptions,
      geocoding: props.geocoding,
      serverOptions: {
        ingress: props.ingress,
        imageTag: props.imageTag,
        externalDomain: props.publicProxy?.publicBaseUrl,
      },
      machineLearningOptions: {
        ...props.machineLearning.options,
        cache: {
          storageClass: props.machineLearning.cache.storageClass,
          size: props.machineLearning.cache.size,
        },
        imageTag: props.machineLearning.imageTag ?? props.imageTag,
      },
      postgresOptions: {
        hostname: dbCluster.readWriteService(),
        database: props.database.database,
        user: props.database.username,
        passwordSecret: dbKubeSecret,
      },
      redisOptions: {
        hostname: redisService.name,
      },
    });

    if (props.publicProxy) {
      this.createPublicProxy(immich.serverService, props.publicProxy);
    }
  }

  private createPublicProxy(
    immichService: Service,
    proxy: NonNullable<ImmichChartProps["publicProxy"]>
  ) {
    const deployment = new Deployment(this, "public-proxy-deployment", {
      replicas: 1,
      containers: [
        {
          name: "immich-public-proxy",
          image: `${IMMICH_PUBLIC_PROXY_IMAGE}:${proxy.imageTag}`,
          envVariables: {
            IMMICH_URL: EnvValue.fromValue(
              `http://${immichService.name}:${immichService.port}`
            ),
            PUBLIC_BASE_URL: EnvValue.fromValue(proxy.publicBaseUrl),
          },
          ports: [
            {
              name: "http",
              number: IMMICH_PUBLIC_PROXY_PORT,
              protocol: Protocol.TCP,
            },
          ],
          resources: {
            cpu: {
              request: Cpu.millis(100),
              limit: Cpu.millis(1000),
            },
            memory: {
              request: Size.mebibytes(128),
              limit: Size.gibibytes(1),
            },
          },
          liveness: Probe.fromHttpGet("/share/healthcheck", {
            port: IMMICH_PUBLIC_PROXY_PORT,
            initialDelaySeconds: Duration.seconds(10),
            periodSeconds: Duration.seconds(10),
            timeoutSeconds: Duration.seconds(5),
          }),
          readiness: Probe.fromHttpGet("/share/healthcheck", {
            port: IMMICH_PUBLIC_PROXY_PORT,
            initialDelaySeconds: Duration.seconds(5),
            periodSeconds: Duration.seconds(10),
            timeoutSeconds: Duration.seconds(5),
          }),
          startup: Probe.fromHttpGet("/share/healthcheck", {
            port: IMMICH_PUBLIC_PROXY_PORT,
            failureThreshold: 12,
            initialDelaySeconds: Duration.seconds(5),
            periodSeconds: Duration.seconds(5),
            timeoutSeconds: Duration.seconds(5),
          }),
          securityContext: {
            ensureNonRoot: false,
            privileged: true,
            readOnlyRootFilesystem: false,
            allowPrivilegeEscalation: true,
          },
        },
      ],
    });

    const service = new Service(this, "public-proxy-service", {
      type: ServiceType.CLUSTER_IP,
      selector: deployment,
      ports: [
        {
          name: "http",
          port: IMMICH_PUBLIC_PROXY_PORT,
          targetPort: IMMICH_PUBLIC_PROXY_PORT,
          protocol: Protocol.TCP,
        },
      ],
    });

    const tunnel = new CloudflareClusterTunnel(this, "public-proxy-tunnel", {
      tunnelName: "immich-public-proxy",
      email: proxy.tunnel.email,
      domain: proxy.tunnel.domain,
      cloudflareSecret: proxy.tunnel.cloudflareSecret,
      accountId: proxy.tunnel.accountId,
    });

    tunnel.bindToService(service, {
      domainName: proxy.tunnel.fqdn,
    });
  }
}
