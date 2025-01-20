import { Helm } from "cdk8s";
import { Construct } from "constructs";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";

const NAMESPACE = "cnpg-system";

export interface CloudnativePgChartProps
  extends Omit<HomelabChartProps, "namespace"> {}

export class CloudnativePgChart extends HomelabChart {
  constructor(scope: Construct, name: string, props?: CloudnativePgChartProps) {
    super(scope, name, {
      ...props,
      namespace: NAMESPACE,
      createNamespace: true,
    });

    new Helm(this, "helm", {
      chart: "cloudnative-pg",
      repo: "https://cloudnative-pg.github.io/charts",
      version: "0.23.0",
      helmFlags: ["--namespace", NAMESPACE, "--include-crds"],
    });
  }
}
