import { Size } from "cdk8s";
import {
  Capability,
  Cpu,
  Deployment,
  DeploymentStrategy,
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  Service,
  Volume,
} from "cdk8s-plus-31";
import { Construct } from "constructs";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
import {
  HomelabIngress,
  HomelabIngressOptions,
} from "../../constructs/homelab/ingress";
import { OnepasswordSecretPassword } from "../../constructs/external-secrets/onepassword-secret-password";
import {
  SecretStore,
  SecretStoreType,
} from "../../constructs/external-secrets/secret-store";
import { Dawarich } from "../../constructs/applications/dawarich";
// import { Photon } from "../../constructs/applications/photon";
import { Cluster } from "../../constructs/cnpg/cluster";
import { ClusterSpecBackupBarmanObjectStoreWalCompression } from "../../imports/clusters-postgresql.cnpg.io";
import { PersistentVolumeClaimOptions } from "../../constructs/homelab/storage";
import { CronSchedule } from "../../constructs/cnpg/scheduled-backup";

const VALKEY_PORT = 6379;
const VALKEY_IMAGE = "docker.io/valkey/valkey:8-alpine";

export interface DawarichChartProps extends HomelabChartProps {
  readonly imageTag: string;
  readonly ingress: HomelabIngressOptions;
  readonly storage: PersistentVolumeClaimOptions;
  readonly secretStore: string;
}

export class DawarichChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: DawarichChartProps) {
    super(scope, name, props);

    const secretStore = SecretStore.fromName(
      this,
      props.secretStore,
      SecretStoreType.CLUSTER_SECRET_STORE
    );

    const dbSecret = new OnepasswordSecretPassword(this, "database-secret", {
      store: secretStore,
      secretKey: "dawarich-database-password",
    });

    const secretKey = new OnepasswordSecretPassword(this, "secret-key", {
      store: secretStore,
      secretKey: "dawarich-secret-key-base",
    });

    const geoapifyKey = new OnepasswordSecretPassword(this, "geoapify-key", {
      store: secretStore,
      secretKey: "dawarich-geoapify-api-key",
    });

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

    const dbCluster = new Cluster(this, "database", {
      storage: {
        storageClass: "local-path",
        size: Size.gibibytes(10),
      },

      backup: {
        destinationPath: "s3://awlsring-homelab-cnpg-db-backups/dawarich",
        endpoint: "https://s3.us-east-005.backblazeb2.com",
        walCompression: ClusterSpecBackupBarmanObjectStoreWalCompression.GZIP,
        credentials: {
          accessKeyId: backupStoreAccessKey.asSecretReference(),
          secretAccessKey: backupStoreSecretKey.asSecretReference(),
        },
      },
      image: "ghcr.io/cloudnative-pg/postgis:17-3.5",
      database: {
        database: "dawarich",
        username: "dawarich",
        password: {
          name: dbSecret.name,
        },
        postInitTemplateSql: [
          "CREATE EXTENSION IF NOT EXISTS postgis;",
          "CREATE EXTENSION IF NOT EXISTS postgis_topology;",
          "CREATE EXTENSION IF NOT EXISTS fuzzystrmatch;",
          "CREATE EXTENSION IF NOT EXISTS postgis_tiger_geocoder;",
        ],
      },
    });
    dbCluster.createScheduledBackup(
      "dawarich-db-backup",
      new CronSchedule({ second: 0, minute: 0, hour: 1 })
    );

    const valkey = this.createValkeyInstance(props);

    const dawarich = new Dawarich(this, "app", {
      imageTag: "latest",
      secretKeyBase: secretKey.asSecretValue(),
      postgres: {
        hostname: dbCluster.readWriteService(),
        database: "dawarich",
        user: "dawarich",
        passwordSecret: dbSecret.asSecretValue(),
      },
      valkey: {
        hostname: valkey.service.name,
      },
      reverseGeocoding: {
        geoapifyApiKey: geoapifyKey.asSecretValue(),
      },
      monitoringEnabled: false,
      hostname: props.ingress.hostname,
    });

    new HomelabIngress(this, "ingress", {
      ingressClassName: props.ingress.ingressClass,
      service: dawarich.service,
      hostname: props.ingress.hostname,
      certIssuer: props.ingress.certIssuer,
    });
  }

  private createValkeyInstance(props: DawarichChartProps) {
    const pvc = new PersistentVolumeClaim(this, "valkey-pvc", {
      storageClassName: props.storage.storageClass,
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: Size.gibibytes(10),
    });
    const volume = Volume.fromPersistentVolumeClaim(this, "valkey-volume", pvc);
    const deployment = new Deployment(this, "valkey-deployment", {
      replicas: 1,
      strategy: DeploymentStrategy.recreate(),
      containers: [
        {
          name: "valkey",
          image: VALKEY_IMAGE,
          command: [
            "valkey-server",
            "--save",
            "30",
            "1",
            "--loglevel",
            "warning",
          ],
          ports: [{ name: "valkey", number: VALKEY_PORT }],
          resources: {
            cpu: {
              request: Cpu.millis(100),
              limit: Cpu.millis(2000),
            },
            memory: {
              request: Size.mebibytes(128),
              limit: Size.gibibytes(4),
            },
          },
          volumeMounts: [
            {
              volume: volume,
              path: "/data",
            },
          ],
          securityContext: {
            ensureNonRoot: false,
            privileged: true,
            readOnlyRootFilesystem: false,
            allowPrivilegeEscalation: true,
            capabilities: {
              drop: [Capability.ALL],
              add: [
                Capability.SETGID,
                Capability.SETUID,
                Capability.DAC_OVERRIDE,
              ],
            },
          },
        },
      ],
    });

    const service = new Service(this, "valkey-service", {
      ports: [
        {
          name: "http",
          port: VALKEY_PORT,
          targetPort: VALKEY_PORT,
        },
      ],
      selector: deployment,
    });

    return {
      deployment: deployment,
      service: service,
    };
  }
}
