import { Construct } from "constructs";
import { HelmChart } from "../../constructs/charts/helm-chart";

const NAMESPACE = "kube-system";

export interface KubeVipChartProps {
  readonly interface?: string;
}

export class KubeVipChart extends HelmChart {
  constructor(scope: Construct, name: string, props?: KubeVipChartProps) {
    super(scope, name, {
      namespace: NAMESPACE,
      createNamespace: false,
      chart: "kube-vip",
      repo: "https://kube-vip.github.io/helm-charts",
      version: "0.6.5",
      values: {
        config: {
          address: "10.0.10.60",
        },
        env: {
          vip_interface: props?.interface,
          vip_leaderelection: "true",
          cp_enable: "true",
          svc_enable: "false",
        },
      },
    });
  }
}
