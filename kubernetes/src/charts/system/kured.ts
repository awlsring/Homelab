import { Helm } from "cdk8s";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
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
      chart: "kured",
      repo: "https://kubereboot.github.io/charts",
      version: "5.6.0",
      helmFlags: ["--namespace", KURED_NAMESPACE, "--include-crds"],
      values: {
        configuration: {
          annotateNodes: true,
          timeZone: "America/Los_Angeles",
          logFormat: "json",
        },
      },
    });
  }
}
