import { Helm, Include } from "cdk8s";
import { HomelabChart, HomelabChartProps } from "cdk8s-constructs";
import { Construct } from "constructs";

const NAMESPACE = "node-feature-discovery";

export interface NodeFeatureDiscoveryChartProps
  extends Omit<HomelabChartProps, "namespace"> {}

export class NodeFeatureDiscoveryChart extends HomelabChart {
  constructor(
    scope: Construct,
    name: string,
    props?: NodeFeatureDiscoveryChartProps,
  ) {
    super(scope, name, {
      ...props,
      namespace: NAMESPACE,
      createNamespace: true,
    });

    new Include(this, "crds", {
      url: "https://raw.githubusercontent.com/kubernetes-sigs/node-feature-discovery/master/deployment/base/nfd-crds/nfd-api-crds.yaml",
    });

    new Helm(this, "helm", {
      chart: "nfd/node-feature-discovery",
      helmFlags: ["--namespace", NAMESPACE],
    });
  }
}
