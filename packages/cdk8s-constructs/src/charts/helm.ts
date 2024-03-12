import { Helm } from "cdk8s";
import { Construct } from "constructs";
import { HomelabChart } from "./homelab";

export interface HelmChartProps {
  readonly repository: string;
  readonly chart: string;
  readonly namespace: string;
  readonly flags: string[];
}

export class HelmChart extends HomelabChart {
  readonly ns: string;
  readonly repository: string;
  readonly chart: string;

  constructor(scope: Construct, name: string, props: HelmChartProps) {
    super(scope, name, {
      ...props,
      createNamespace: true,
      namespace: props.namespace,
    });
    this.ns = props.namespace;
    this.repository = props.repository; // TODO - use these fields to build a list of repositories to be added for CI.
    this.chart = props.chart;

    new Helm(this, "helm", {
      chart: `${props.repository}/${props.chart}`,
      helmFlags: ["--namespace", this.ns, "--include-crds"],
    });
  }
}
