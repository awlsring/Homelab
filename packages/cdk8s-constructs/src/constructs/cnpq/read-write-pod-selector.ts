import { IPodSelector, LabelSelector, PodSelectorConfig } from "cdk8s-plus-27";
import { Construct } from "constructs";

export class ClusterPrimaryPodSelector
  extends Construct
  implements IPodSelector
{
  constructor(
    scope: Construct,
    name: string,
    readonly clusterName: string,
  ) {
    super(scope, name);
  }

  toPodSelectorConfig(): PodSelectorConfig {
    const labelSelector = LabelSelector.of({
      labels: {
        "cnpg.io/cluster": this.clusterName,
        "cnpg.io/instanceRole": "primary",
        role: "primary",
      },
    });
    return {
      labelSelector,
    };
  }
}
