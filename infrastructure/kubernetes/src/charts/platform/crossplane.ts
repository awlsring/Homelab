import { HelmChart, Provider } from "cdk8s-constructs";
import { Construct } from "constructs";

const NAMESPACE = "crossplane-system";

export interface CrossplaneChartProps {}

export class CrossplaneChart extends HelmChart {
  constructor(scope: Construct, name: string, props?: CrossplaneChartProps) {
    super(scope, name, {
      ...props,
      namespace: NAMESPACE,
      repository: "crossplane-stable",
      chart: "crossplane",
      flags: ["--namespace", NAMESPACE, "--include-crds"],
    });

    new Provider(this, "s3", {
      name: "provider-aws-s3",
      package: "xpkg.upbound.io/upbound/provider-aws-s3:v1.1.0",
    });
  }
}
