import { Helm } from "cdk8s";
import { HomelabChart, HomelabChartProps } from "cdk8s-constructs";
import { Construct } from "constructs";

const KURED_NAMESPACE = "kured";

export interface KuredChartProps extends Omit<HomelabChartProps, "namespace"> {}

export class KuredChart extends HomelabChart {
  constructor(scope: Construct, name: string, props?: KuredChartProps) {
    super(scope, name, {
      ...props,
      namespace: KURED_NAMESPACE,
      createNamespace: true,
    });

    new Helm(this, "helm", {
      chart: "kubereboot/kured",
      helmFlags: ["--namespace", KURED_NAMESPACE],
      values: {
        configuration: {
          annotateNodes: true,
          timeZone: "America/Los_Angeles",
        },
      },
    });
  }
}
