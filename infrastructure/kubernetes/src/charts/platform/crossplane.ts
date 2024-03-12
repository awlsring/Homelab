import { HelmChart } from "cdk8s-constructs";
import { Construct } from "constructs";

const NAMESPACE = "crossplan-system";

export interface CrossplaneChartProps {}

export class CrossplaneChart extends HelmChart {
  constructor(scope: Construct, name: string, props?: CrossplaneChartProps) {
    super(scope, name, {
      ...props,
      namespace: NAMESPACE,
      repository: "crossplane-stable",
      chart: "crossplane",
      flags: ["--namespace", NAMESPACE, "--include-crds"],
    });
  }
}
