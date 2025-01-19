import { Chart, ChartProps } from "cdk8s";
import { Construct } from "constructs";
import { Namespace } from "../kube/namespace";

export interface ConfigureTlsProps {
  readonly name: string;
  readonly certIssuerName: string;
  readonly dnsNames: string[];
}

export interface HomelabChartProps extends ChartProps {
  readonly createNamespace?: boolean;
  readonly tls?: ConfigureTlsProps;
}

export class HomelabChart extends Chart {
  constructor(scope: Construct, name: string, props: HomelabChartProps) {
    super(scope, name, {
      ...props,
      namespace: props.namespace,
    });
    if (props.createNamespace && props.namespace) {
      new Namespace(this, "namespace", {
        name: this.namespace ?? "default",
      });
    }
  }
}
