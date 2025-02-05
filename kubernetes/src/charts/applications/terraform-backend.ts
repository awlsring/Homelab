import { ServiceType } from "cdk8s-plus-31";
import { Construct } from "constructs";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
import { PersistentVolumeClaimOptions } from "../../constructs/homelab/storage";
import { Cluster } from "../../constructs/cnpg/cluster";
import { OnepasswordSecretPassword } from "../../constructs/external-secrets/onepassword-secret-password";
import {
  SecretStore,
  SecretStoreType,
} from "../../constructs/external-secrets/secret-store";
import { ClusterSpecBackupBarmanObjectStoreWalCompression } from "../../imports/clusters-postgresql.cnpg.io";
import { CronSchedule } from "../../constructs/cnpg/scheduled-backup";

export interface TerraformBackendChartProps extends HomelabChartProps {
  readonly storage: PersistentVolumeClaimOptions;
  readonly secretStore: string;
}

export class TerraformBackendChart extends HomelabChart {
  constructor(
    scope: Construct,
    name: string,
    props: TerraformBackendChartProps
  ) {
    super(scope, name, props);

    const secretStore = SecretStore.fromName(
      this,
      props.secretStore,
      SecretStoreType.CLUSTER_SECRET_STORE
    );

    const dbSecret = new OnepasswordSecretPassword(this, "database-secret", {
      store: secretStore,
      secretKey: "terraform-database-pass",
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

    const cluster = new Cluster(this, "cluster", {
      storage: props.storage,
      backup: {
        destinationPath:
          "s3://awlsring-homelab-cnpg-db-backups/terraform-backend",
        endpoint: "https://s3.us-east-005.backblazeb2.com",
        walCompression: ClusterSpecBackupBarmanObjectStoreWalCompression.GZIP,
        credentials: {
          accessKeyId: backupStoreAccessKey.asSecretReference(),
          secretAccessKey: backupStoreSecretKey.asSecretReference(),
        },
      },
      database: {
        database: "terraform",
        username: "terraform",
        password: {
          name: dbKubeSecret.name,
        },
      },
    });
    cluster.exposeWithPrimaryService({
      serviceType: ServiceType.LOAD_BALANCER,
    });
    cluster.createScheduledBackup(
      "terraform-db-backup",
      new CronSchedule({ minute: 0, hour: 1 })
    );
  }
}
