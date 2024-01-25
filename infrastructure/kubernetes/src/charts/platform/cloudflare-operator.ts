import { HomelabChart, HomelabChartProps, Kustomize } from "cdk8s-constructs";
import { Construct } from "constructs";

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

    console.log("CALLING KUSTOMIZE");

    new Kustomize(this, "kustomize", {
      url: "https://github.com/adyanth/cloudflare-operator/config/default",
    });
  }
}
