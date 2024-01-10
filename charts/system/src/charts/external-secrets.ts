import { Helm } from "cdk8s";
import { HomelabChart, HomelabChartProps } from "cdk8s-constructs";
import { Construct } from "constructs";

const KURED_NAMESPACE = "external-secrets";

export interface ExternalSecretsChartProps
  extends Omit<HomelabChartProps, "namespace"> {}

export class ExternalSecretsChart extends HomelabChart {
  constructor(
    scope: Construct,
    name: string,
    props?: ExternalSecretsChartProps,
  ) {
    super(scope, name, {
      ...props,
      namespace: KURED_NAMESPACE,
      createNamespace: true,
    });

    new Helm(this, "helm", {
      chart: "external-secrets/external-secrets",
      helmFlags: ["--namespace", KURED_NAMESPACE, "--include-crds"],
    });
  }
}
