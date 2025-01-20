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

    const cluster = new Cluster(this, "cluster", {
      storage: props.storage,
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
  }
}
