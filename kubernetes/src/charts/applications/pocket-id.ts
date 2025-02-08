import { Construct } from "constructs";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
import {
  HomelabIngress,
  HomelabIngressOptions,
} from "../../constructs/homelab/ingress";
import {
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  Volume,
} from "cdk8s-plus-31";
import { Size } from "cdk8s";
import { PocketId } from "../../constructs/applications/pocket-id";
import { Cluster } from "../../constructs/cnpg/cluster";
import { ClusterSpecBackupBarmanObjectStoreWalCompression } from "../../imports/clusters-postgresql.cnpg.io";
import {
  SecretStore,
  SecretStoreType,
} from "../../constructs/external-secrets/secret-store";
import { OnepasswordSecretPassword } from "../../constructs/external-secrets/onepassword-secret-password";
import { CronSchedule } from "../../constructs/cnpg/scheduled-backup";

export interface PocketIdChartProps extends HomelabChartProps {
  readonly imageTag: string;
  readonly secretStore: string;
  readonly storageClassName: string;
  readonly ingress: HomelabIngressOptions;
}

export class PocketIdChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: PocketIdChartProps) {
    super(scope, name, props);

    const secretStore = SecretStore.fromName(
      this,
      props.secretStore,
      SecretStoreType.CLUSTER_SECRET_STORE
    );

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

    const dbSecret = new OnepasswordSecretPassword(this, "database-secret", {
      store: secretStore,
      secretKey: "pocket-id-database-password",
    });

    const dbCluster = new Cluster(this, "db", {
      storage: {
        storageClass: "local-path",
        size: Size.gibibytes(1),
      },
      backup: {
        destinationPath: "s3://awlsring-homelab-cnpg-db-backups/pocket-id",
        endpoint: "https://s3.us-east-005.backblazeb2.com",
        walCompression: ClusterSpecBackupBarmanObjectStoreWalCompression.GZIP,
        credentials: {
          accessKeyId: backupStoreAccessKey.asSecretReference(),
          secretAccessKey: backupStoreSecretKey.asSecretReference(),
        },
      },
      database: {
        database: "pocket-id",
        username: "pocket-id",
        password: {
          name: dbSecret.name,
        },
      },
    });
    dbCluster.createScheduledBackup(
      "db-backup",
      new CronSchedule({ second: 0, minute: 0, hour: 1 })
    );

    const pvc = new PersistentVolumeClaim(this, "pvc", {
      storageClassName: props.storageClassName,
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: Size.gibibytes(10),
    });
    const volume = Volume.fromPersistentVolumeClaim(this, "volume", pvc);

    const pocketId = new PocketId(this, "app", {
      imageTag: props.imageTag,
      appUrl: `https://${props.ingress.hostname}`,
      dataVolume: volume,
      database: {
        hostname: dbCluster.readWriteService(),
        database: "pocket-id",
        user: "pocket-id",
        passwordSecret: dbSecret.asSecretValue(),
      },
    });

    new HomelabIngress(this, "ingress", {
      ingressClassName: props.ingress.ingressClass,
      service: pocketId.service,
      hostname: props.ingress.hostname,
      certIssuer: props.ingress.certIssuer,
    });
  }
}
