import {
  Cluster,
  HomelabChart,
  HomelabChartProps,
  PersistentVolumeClaimOptions,
} from "cdk8s-constructs";
import { ServiceType } from "cdk8s-plus-27";
import { Construct } from "constructs";

export interface TerraformBackendChartProps extends HomelabChartProps {
  readonly instances?: number;
  readonly storage: PersistentVolumeClaimOptions;
}

export class TerraformBackendChart extends HomelabChart {
  constructor(
    scope: Construct,
    name: string,
    props: TerraformBackendChartProps,
  ) {
    super(scope, name, props);

    const cluster = new Cluster(this, "cluster", {
      instances: props.instances ?? 1,
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
