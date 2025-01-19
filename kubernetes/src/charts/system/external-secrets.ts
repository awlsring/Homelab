import { Helm } from "cdk8s";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
import { Construct } from "constructs";

const NAMESPACE = "external-secrets";

export interface ExternalSecretsChartProps
  extends Omit<HomelabChartProps, "namespace"> {}

export class ExternalSecretsChart extends HomelabChart {
  constructor(
    scope: Construct,
    name: string,
    props?: ExternalSecretsChartProps
  ) {
    super(scope, name, {
      ...props,
      namespace: NAMESPACE,
      createNamespace: true,
    });

    new Helm(this, "helm", {
      chart: "external-secrets",
      repo: "https://charts.external-secrets.io",
      version: "0.12.1",
      helmFlags: ["--namespace", NAMESPACE, "--include-crds"],
    });
  }
}
