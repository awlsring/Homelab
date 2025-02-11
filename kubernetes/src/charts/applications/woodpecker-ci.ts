import { Construct } from "constructs";
import { HomelabChart } from "../../constructs/charts/homelab-chart";
import { WoodpeckerCIServer } from "../../constructs/applications/woodpecker-ci-server";
import { CronSchedule } from "../../constructs/cnpg/scheduled-backup";
import { ClusterSpecBackupBarmanObjectStoreWalCompression } from "../../imports/clusters-postgresql.cnpg.io";
import { Size } from "cdk8s";
import { Cluster } from "../../constructs/cnpg/cluster";
import { OnepasswordSecretPassword } from "../../constructs/external-secrets/onepassword-secret-password";
import {
  SecretStore,
  SecretStoreType,
} from "../../constructs/external-secrets/secret-store";
import {
  HomelabIngress,
  HomelabIngressOptions,
} from "../../constructs/homelab/ingress";
import { WoodpeckerCIAgent } from "../../constructs/applications/woodpecker-ci-agent";
import { EnvValue } from "cdk8s-plus-31";

export interface WoodpeckerCIChartProps {
  readonly namespace: string;
  readonly imageTag: string;
  readonly secretStore: string;
  readonly storageClass: string;
  readonly allowedUsers: string[];
  readonly ingress: HomelabIngressOptions;
}

export class WoodpeckerCIChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: WoodpeckerCIChartProps) {
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
      secretKey: "woodpecker-database-password",
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
        database: "woodpecker",
        username: "woodpecker",
        password: {
          name: dbSecret.name,
        },
      },
    });
    dbCluster.createScheduledBackup(
      "db-backup",
      new CronSchedule({ second: 0, minute: 0, hour: 1 })
    );

    const woodpeckerSecret = new OnepasswordSecretPassword(
      this,
      "woodpecker-secret",
      {
        store: secretStore,
        secretKey: "woodpecker-secret",
      }
    );
    const woodpecerkSecretValue = woodpeckerSecret.asSecretValue();

    const forgejoWoodpeckerSecret = new OnepasswordSecretPassword(
      this,
      "forgejo-woodpecker-client-secret",
      {
        store: secretStore,
        secretKey: "forgejo-woodpecker-client-secret",
      }
    );

    const server = new WoodpeckerCIServer(this, "server", {
      imageTag: props.imageTag,
      storageClass: props.storageClass,
      address: `https://${props.ingress.hostname}`,
      secret: woodpecerkSecretValue,
      allowedUsers: props.allowedUsers,
      database: {
        hostname: dbCluster.readWriteService(),
        user: "woodpecker",
        database: "woodpecker",
        passwordSecret: dbSecret.asSecretValue(),
      },
      forgeSecrets: {
        WOODPECKER_FORGEJO: EnvValue.fromValue("true"),
        WOODPECKER_FORGEJO_URL: EnvValue.fromValue(
          "https://code.us-drig-1.drigs.org"
        ),
        WOODPECKER_FORGEJO_CLIENT: EnvValue.fromValue(
          "a6f526b9-80bf-43aa-b7d7-f94355d5ccfd"
        ),
        WOODPECKER_FORGEJO_SECRET: EnvValue.fromSecretValue(
          forgejoWoodpeckerSecret.asSecretValue()
        ),
      },
    });

    new WoodpeckerCIAgent(this, "agent", {
      namespace: props.namespace,
      imageTag: props.imageTag,
      storageClass: props.storageClass,
      serverAddress: server.service.name,
      secret: woodpecerkSecretValue,
    });

    new HomelabIngress(this, "ingress", {
      ingressClassName: props.ingress.ingressClass,
      service: server.service,
      hostname: props.ingress.hostname,
      port: 80,
      certIssuer: props.ingress.certIssuer,
    });
  }
}
