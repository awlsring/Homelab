import { Include } from "cdk8s";
import { join } from "path";
import { Construct } from "constructs";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";

const NAMESPACE = "tempo-operator-system";

export interface TempoOperatorChartProps
  extends Omit<HomelabChartProps, "namespace"> {}

export class TempoOperatorChart extends HomelabChart {
  constructor(scope: Construct, name: string, props?: TempoOperatorChartProps) {
    super(scope, name, {
      ...props,
      namespace: NAMESPACE,
      createNamespace: false,
    });

    new Include(this, "manifest", {
      url: "https://github.com/grafana/tempo-operator/releases/download/v0.16.0/tempo-operator.yaml",
    });

    // Keep storage resources local so upstream main cannot silently replace them.
    new Include(this, "minio", {
      url: join(__dirname, "../../../resources/tempo-minio.yaml"),
    });
  }
}
