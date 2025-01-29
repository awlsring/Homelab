import { Helm } from "cdk8s";
import { Construct } from "constructs";
import { HomelabChart } from "./homelab-chart";

export interface HelmChartProps {
  readonly chart: string;
  readonly repo: string;
  readonly version: string;
  readonly namespace: string;
  readonly values?: Record<string, any>;
  readonly flags?: string[];
  readonly createNamespace?: boolean;
}

export class HelmChart extends HomelabChart {
  readonly _namespace: string;

  constructor(scope: Construct, name: string, props: HelmChartProps) {
    super(scope, name, {
      ...props,
      createNamespace: props.createNamespace,
      namespace: props.namespace,
    });
    this._namespace = props.namespace;

    const helmFlags = ["--namespace", this._namespace, "--include-crds"];

    if (props.flags) {
      helmFlags.push(...props.flags);
    }

    new Helm(this, "helm", {
      chart: props.chart,
      repo: props.repo,
      version: props.version,
      helmFlags: helmFlags,
      values: props.values,
    });
  }
}
