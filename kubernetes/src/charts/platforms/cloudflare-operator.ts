import { Construct } from "constructs";
import { HomelabChart, HomelabChartProps } from "../../constructs/charts/homelab-chart";
import { Kustomize } from "../../constructs/kustomize/kustomize";

const CLOUDFLARE_OPERATOR_REF = "v0.12.0";

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
      // Pin the upstream base so generated manifests stay reproducible.
      url: `https://github.com/adyanth/cloudflare-operator/config/default?ref=${CLOUDFLARE_OPERATOR_REF}`,
    });
  }
}
