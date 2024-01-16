import { Helm } from "cdk8s";
import { HomelabChart, HomelabChartProps } from "cdk8s-constructs";
import { Construct } from "constructs";

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
      chart: "descheduler/descheduler",
      helmFlags: ["--namespace", NAMESPACE],
    });
  }
}
