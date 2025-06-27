import { Include } from "cdk8s";
import { Construct } from "constructs";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";

const NAMESPACE = "opentelemetry-operator-system";

export interface OTELOperatorChartProps
  extends Omit<HomelabChartProps, "namespace"> {}

export class OTELOperatorChart extends HomelabChart {
  constructor(scope: Construct, name: string, props?: OTELOperatorChartProps) {
    super(scope, name, {
      ...props,
      namespace: NAMESPACE,
      createNamespace: false,
    });

    new Include(this, "manifest", {
      url: "https://github.com/open-telemetry/opentelemetry-operator/releases/latest/download/opentelemetry-operator.yaml",
    });
  }
}
