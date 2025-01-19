import { Helm } from "cdk8s";
import { Construct } from "constructs";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";

const NAMESPACE = "descheduler";

export interface DeschedulerChartProps
  extends Omit<HomelabChartProps, "namespace"> {}

export class DeschedulerChart extends HomelabChart {
  constructor(scope: Construct, name: string, props?: DeschedulerChartProps) {
    super(scope, name, {
      ...props,
      namespace: NAMESPACE,
      createNamespace: true,
    });

    new Helm(this, "helm", {
      chart: "descheduler",
      repo: "https://kubernetes-sigs.github.io/descheduler",
      version: "0.32.1",
      helmFlags: ["--namespace", NAMESPACE, "--include-crds"],
    });
  }
}
