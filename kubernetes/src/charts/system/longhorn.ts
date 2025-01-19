import { Helm } from "cdk8s";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
import { ServiceType } from "cdk8s-plus-31";
import { Construct } from "constructs";

const LONGHORN_NAMESPACE = "longhorn-system";

export interface LonghornChartProps
  extends Omit<HomelabChartProps, "namespace"> {
  readonly serviceType: ServiceType;
}

export class LonghornChart extends HomelabChart {
  readonly storageClassName = "longhorn";
  constructor(scope: Construct, name: string, props?: LonghornChartProps) {
    super(scope, name, {
      ...props,
      namespace: LONGHORN_NAMESPACE,
      createNamespace: true,
    });

    new Helm(this, "helm", {
      chart: "longhorn",
      repo: "https://charts.longhorn.io",
      version: "1.7.2",
      helmFlags: ["--namespace", LONGHORN_NAMESPACE],
      values: {
        service: {
          ui: {
            type: props?.serviceType ?? ServiceType.CLUSTER_IP,
          },
        },
        defaultSettings: {
          defaultDataPath: "/mnt/longhorn",
        },
      },
    });
  }
}
