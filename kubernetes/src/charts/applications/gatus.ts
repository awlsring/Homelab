import { Size } from "cdk8s";

import { Construct } from "constructs";
import {
  Gatus,
  GatusDatabaseEngine,
  GatusEndpoint,
} from "../../constructs/applications/gatus";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
import { HomelabIngressOptions } from "../../constructs/homelab/ingress";
import {
  SecretStore,
  SecretStoreType,
} from "../../constructs/external-secrets/secret-store";
import { OnepasswordSecretPassword } from "../../constructs/external-secrets/onepassword-secret-password";
import { Cluster } from "../../constructs/cnpg/cluster";

export interface GatusChartProps extends HomelabChartProps {
  readonly endpoints: GatusEndpoint[];
  readonly secretStore: string;
  readonly timezone?: string;
  readonly imageTag?: string;
  readonly ingress?: HomelabIngressOptions;
}

export class GatusChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: GatusChartProps) {
    super(scope, name, props);

    const secretStore = SecretStore.fromName(
      this,
      props.secretStore,
      SecretStoreType.CLUSTER_SECRET_STORE
    );

    const webhookSecret = new OnepasswordSecretPassword(
      this,
      "webhook-secret",
      {
        store: secretStore,
        secretKey: "gatus-discord-webhook",
      }
    );

    const dbSecret = new OnepasswordSecretPassword(this, "database-secret", {
      store: secretStore,
      secretKey: "gatus-database-pass",
    });
    const dbKubeSecret = dbSecret.asSecret();

    const cluster = new Cluster(this, "cluster", {
      instances: 2,
      storage: {
        storageClass: "ceph-block",
        size: Size.gibibytes(5),
      },
      database: {
        database: "gatus",
        username: "gatus",
        password: {
          name: dbKubeSecret.name,
        },
      },
    });

    new Gatus(this, "app", {
      database: {
        engine: GatusDatabaseEngine.POSTGRES,
        host: cluster.readWriteService(),
        user: "gatus",
        password: dbKubeSecret,
        database: "gatus",
      },
      ingress: props.ingress,
      endpoints: props.endpoints,
      alerting: {
        discord: {
          webhookSecret: {
            secret: webhookSecret.asSecret(),
            key: "credential",
          },
        },
      },
    });
  }
}
