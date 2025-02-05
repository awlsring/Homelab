import { Size } from "cdk8s";
import {
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
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
import { Cluster } from "../../constructs/cnpg/cluster";
import { ClusterSpecBackupBarmanObjectStoreWalCompression } from "../../imports/clusters-postgresql.cnpg.io";
import { CronSchedule } from "../../constructs/cnpg/scheduled-backup";
import {
  Mealie,
  MealieDatabaseEngine,
} from "../../constructs/applications/mealie";
import { PersistentVolumeClaimOptions } from "../../constructs/homelab/storage";

export interface MealieChartProps extends HomelabChartProps {
  readonly imageTag: string;
  readonly ingress: HomelabIngressOptions;
  readonly storage: PersistentVolumeClaimOptions;
  readonly secretStore: string;
}

export class MealieChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: MealieChartProps) {
    super(scope, name, props);

    const secretStore = SecretStore.fromName(
      this,
      props.secretStore,
      SecretStoreType.CLUSTER_SECRET_STORE
    );

    const openAiKey = new OnepasswordSecretPassword(this, "openai-key", {
      store: secretStore,
      secretKey: "mealie-openai-key",
    });

    const dbSecret = new OnepasswordSecretPassword(this, "database-secret", {
      store: secretStore,
      secretKey: "mealie-database-password",
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

    const dbCluster = new Cluster(this, "mealie-db", {
      storage: {
        storageClass: "local-path",
        size: Size.gibibytes(10),
      },
      backup: {
        destinationPath: "s3://awlsring-homelab-cnpg-db-backups/mealie",
        endpoint: "https://s3.us-east-005.backblazeb2.com",
        walCompression: ClusterSpecBackupBarmanObjectStoreWalCompression.GZIP,
        credentials: {
          accessKeyId: backupStoreAccessKey.asSecretReference(),
          secretAccessKey: backupStoreSecretKey.asSecretReference(),
        },
      },
      database: {
        database: "mealie",
        username: "mealie",
        password: {
          name: dbKubeSecret.name,
        },
      },
    });
    dbCluster.createScheduledBackup(
      "mealie-db-backup",
      new CronSchedule({ hour: 1 })
    );

    const dataVolumeClaim = new PersistentVolumeClaim(this, "media", {
      storageClassName: props.storage.storageClass,
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: props.storage.size ?? Size.gibibytes(10),
    });
    const dataVolume = Volume.fromPersistentVolumeClaim(
      this,
      "data-vol",
      dataVolumeClaim
    );

    const app = new Mealie(this, "app", {
      imageTag: props.imageTag,
      dataVolume: dataVolume,
      hostname: props.ingress.hostname,
      timezone: "America/Los_Angeles",
      database: {
        engine: MealieDatabaseEngine.POSTGRES,
        host: dbCluster.readWriteService(),
        database: "mealie",
        user: "mealie",
        password: dbKubeSecret,
      },
      ai: {
        apiKey: openAiKey.asSecretValue(),
      },
    });

    new HomelabIngress(this, "ingress", {
      ingressClassName: props.ingress.ingressClass,
      service: app.service,
      hostname: props.ingress.hostname,
      certIssuer: props.ingress.certIssuer,
    });
  }
}
