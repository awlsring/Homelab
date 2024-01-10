import { Helm } from "cdk8s";
import { HomelabChart, HomelabChartProps } from "cdk8s-constructs";
import { Construct } from "constructs";

const NAMESPACE = "inteldeviceplugins-system";

export interface IntelDevicePluginsChartProps
  extends Omit<HomelabChartProps, "namespace"> {}

export class IntelDevicePluginsChart extends HomelabChart {
  constructor(
    scope: Construct,
    name: string,
    props?: IntelDevicePluginsChartProps,
  ) {
    super(scope, name, {
      ...props,
      namespace: NAMESPACE,
      createNamespace: true,
    });

    new Helm(this, "operator", {
      chart: "intel/intel-device-plugins-operator",
      helmFlags: ["--namespace", NAMESPACE, "--include-crds"],
    });

    new Helm(this, "gpu", {
      chart: "intel/intel-device-plugins-gpu",
      helmFlags: ["--namespace", NAMESPACE, "--include-crds"],
      values: {
        nodeFeatureRule: true,
      },
    });
  }
}
