import { Helm } from "cdk8s";
import { HomelabChart, HomelabChartProps } from "cdk8s-constructs";
import { Construct } from "constructs";

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
      chart: "cnpg/cloudnative-pg",
      helmFlags: ["--namespace", NAMESPACE, "--include-crds"],
    });
  }
}
