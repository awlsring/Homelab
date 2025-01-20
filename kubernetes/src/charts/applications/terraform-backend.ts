import { ServiceType } from "cdk8s-plus-31";
import { Construct } from "constructs";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
import { PersistentVolumeClaimOptions } from "../../constructs/homelab/storage";
import { Cluster } from "../../constructs/cnpg/cluster";

export interface TerraformBackendChartProps extends HomelabChartProps {
  readonly storage: PersistentVolumeClaimOptions;
}

export class TerraformBackendChart extends HomelabChart {
  constructor(
    scope: Construct,
    name: string,
    props: TerraformBackendChartProps
  ) {
    super(scope, name, props);

    const cluster = new Cluster(this, "cluster", {
      storage: props.storage,
      database: {
        database: "terraform",
        username: "terraform",
      },
    });
    cluster.exposeWithPrimaryService({
      serviceType: ServiceType.LOAD_BALANCER,
    });
  }
}
