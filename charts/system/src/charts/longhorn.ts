import { Helm } from "cdk8s";
import { HomelabChart, HomelabChartProps, ServiceType } from "cdk8s-constructs";
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
      chart: "longhorn/longhorn",
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
