import { Size } from "cdk8s";
import {
  Cluster,
  Gatus,
  GatusDatabaseEngine,
  GatusEndpoint,
  HomelabChart,
  HomelabChartProps,
  HomelabIngressOptions,
  OnepasswordSecretPassword,
  SecretStore,
  SecretStoreType,
} from "cdk8s-constructs";

import { Construct } from "constructs";

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
      SecretStoreType.CLUSTER,
    );

    const webhookSecret = new OnepasswordSecretPassword(
      this,
      "webhook-secret",
      {
        store: secretStore,
        secretKey: "gatus-discord-webhook",
      },
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
