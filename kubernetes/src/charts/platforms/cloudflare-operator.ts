import { Construct } from "constructs";
import { HomelabChart, HomelabChartProps } from "../../constructs/charts/homelab-chart";
import { Kustomize } from "../../constructs/kustomize/kustomize";

export interface CloudflareOperatorChartProps
  extends Omit<HomelabChartProps, "namespace"> {}

export class CloudflareOperatorChart extends HomelabChart {
  constructor(
    scope: Construct,
    name: string,
    props?: CloudflareOperatorChartProps,
  ) {
    super(scope, name, {
      ...props,
      createNamespace: false,
    });

    new Kustomize(this, "kustomize", {
      url: "https://github.com/adyanth/cloudflare-operator/config/default",
    });
  }
}
