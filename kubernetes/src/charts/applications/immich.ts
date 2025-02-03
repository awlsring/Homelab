import { Size } from "cdk8s";
import { Cpu, Deployment, Service, Volume } from "cdk8s-plus-31";
import { Construct } from "constructs";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
import { HomelabIngressOptions } from "../../constructs/homelab/ingress";
import {
  Immich,
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

const REDIS_PORT = 6379;
const REDIS_IMAGE = "redis:6.2-alpine3.19";

export interface ImmichChartProps extends HomelabChartProps {
  readonly ingress: HomelabIngressOptions;
  readonly secretStore: string;
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
        secretKey: "cnpg-backup-access-key-id",
      }
    );

    const backupStoreSecretKey = new OnepasswordSecretPassword(
      this,
      "backup-store-secret-key",
      {
        store: secretStore,
        secretKey: "cnpg-backup-secret-access-key",
      }
    );

    const dbCluster = new Cluster(this, "immich-db", {
      storage: {
        storageClass: props.database.storageClass,
        size: Size.gibibytes(10),
      },
      backup: {
        destinationPath: "s3://awlsring-homelab-cnpg-db-backups/immich",
        endpoint: "https://s3.us-east-005.backblazeb2.com",
        walCompression: ClusterSpecBackupBarmanObjectStoreWalCompression.GZIP,
        credentials: {
          accessKeyId: backupStoreAccessKey.asSecretReference(),
          secretAccessKey: backupStoreSecretKey.asSecretReference(),
        },
      },
      image: "ghcr.io/tensorchord/cloudnative-pgvecto.rs:16-v0.2.1",
      sharedPreloadLibraries: ["vectors.so"],
      database: {
        database: "immich",
        username: "immich",
        password: {
          name: dbKubeSecret.name,
        },
        postInitApplicationSql: [
          'ALTER SYSTEM SET search_path TO "immich", public, vectors;',
          'CREATE EXTENSION IF NOT EXISTS "vectors";',
          "CREATE EXTENSION IF NOT EXISTS cube WITH SCHEMA pg_catalog;",
          "CREATE EXTENSION IF NOT EXISTS earthdistance WITH SCHEMA pg_catalog;",
          "ALTER SCHEMA vectors OWNER TO immich;",
        ],
      },
    });
    dbCluster.createScheduledBackup(
      "immich-db-backup",
      new CronSchedule({ hour: 1 })
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

    new Immich(this, "app", {
      uploadShare: nfsPhotos,
      photoCollectionShares: externalCollections,
      monitoring: true,
      serverOptions: {
        ingress: props.ingress,
      },
      machineLearningOptions: {
        cache: {
          storageClass: props.machineLearning.cache.storageClass,
          size: props.machineLearning.cache.size,
        },
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
  }
}
