import { Helm } from "cdk8s";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
import { Construct } from "constructs";

const NAMESPACE = "node-feature-discovery";

export interface NodeFeatureDiscoveryChartProps
  extends Omit<HomelabChartProps, "namespace"> {}

export class NodeFeatureDiscoveryChart extends HomelabChart {
  constructor(
    scope: Construct,
    name: string,
    props?: NodeFeatureDiscoveryChartProps
  ) {
    super(scope, name, {
      ...props,
      namespace: NAMESPACE,
      createNamespace: true,
    });

    new Helm(this, "helm", {
      chart: "node-feature-discovery",
      repo: "https://kubernetes-sigs.github.io/node-feature-discovery/charts",
      version: "0.17.1",
      helmFlags: ["--namespace", NAMESPACE, "--include-crds"],
    });
  }
}
