import { Construct } from "constructs";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
import { Forgejo } from "../../constructs/applications/forgejo";
import {
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  Volume,
} from "cdk8s-plus-31";
import { Size } from "cdk8s";
import { CronSchedule } from "../../constructs/cnpg/scheduled-backup";
import { ClusterSpecBackupBarmanObjectStoreWalCompression } from "../../imports/clusters-postgresql.cnpg.io";
import { OnepasswordSecretPassword } from "../../constructs/external-secrets/onepassword-secret-password";
import {
  SecretStore,
  SecretStoreType,
} from "../../constructs/external-secrets/secret-store";
import { Cluster } from "../../constructs/cnpg/cluster";
import {
  HomelabIngress,
  HomelabIngressOptions,
} from "../../constructs/homelab/ingress";

const IMAGE_TAG = "10.0.0-rootless";

export interface ForgejoChartProps extends HomelabChartProps {
  readonly imageTag: string;
  readonly secretStore: string;
  readonly storageClassName: string;
  readonly ingress: HomelabIngressOptions;
}

export class ForgejoChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: ForgejoChartProps) {
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

    const dbSecret = new OnepasswordSecretPassword(this, "db-secret", {
      store: secretStore,
      secretKey: "forgejo-database-password",
    });

    const dbCluster = new Cluster(this, "db", {
      storage: {
        storageClass: "local-path",
        size: Size.gibibytes(1),
      },
      backup: {
        destinationPath: "s3://awlsring-homelab-cnpg-db-backups/forgejo",
        endpoint: "https://s3.us-east-005.backblazeb2.com",
        walCompression: ClusterSpecBackupBarmanObjectStoreWalCompression.GZIP,
        credentials: {
          accessKeyId: backupStoreAccessKey.asSecretReference(),
          secretAccessKey: backupStoreSecretKey.asSecretReference(),
        },
      },
      database: {
        database: "forgejo",
        username: "forgejo",
        password: {
          name: dbSecret.name,
        },
      },
    });
    dbCluster.createScheduledBackup(
      "db-backup",
      new CronSchedule({ second: 0, minute: 0, hour: 1 })
    );

    const pvc = new PersistentVolumeClaim(this, "data-pvc", {
      storageClassName: props.storageClassName,
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: Size.gibibytes(50),
    });
    const volume = Volume.fromPersistentVolumeClaim(this, "volume", pvc);

    const forgejo = new Forgejo(this, "app", {
      imageTag: IMAGE_TAG,
      volume: volume,
      hostname: props.ingress.hostname,
      database: {
        hostname: dbCluster.readWriteService(),
        database: "forgejo",
        user: "forgejo",
        passwordSecret: dbSecret.asSecretValue(),
      },
    });

    new HomelabIngress(this, "ingress", {
      ingressClassName: props.ingress.ingressClass,
      service: forgejo.service,
      hostname: props.ingress.hostname,
      port: 3000,
      certIssuer: props.ingress.certIssuer,
      annotations: [
        {
          // https://github.com/immich-app/immich/issues/8738
          key: "nginx.ingress.kubernetes.io/proxy-body-size",
          value: "500000M",
        },
        {
          key: "nginx.ingress.kubernetes.io/proxy-send-timeout",
          value: "600s",
        },
        {
          key: "nginx.ingress.kubernetes.io/proxy-read-timeout",
          value: "600s",
        },
      ],
    });
  }
}
