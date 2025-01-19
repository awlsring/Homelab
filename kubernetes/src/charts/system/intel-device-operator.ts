import { Helm } from "cdk8s";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
import { Construct } from "constructs";

const NAMESPACE = "inteldeviceplugins-system";

export interface IntelDevicePluginsChartProps
  extends Omit<HomelabChartProps, "namespace"> {}

export class IntelDevicePluginsChart extends HomelabChart {
  constructor(
    scope: Construct,
    name: string,
    props?: IntelDevicePluginsChartProps
  ) {
    super(scope, name, {
      ...props,
      namespace: NAMESPACE,
      createNamespace: true,
    });

    new Helm(this, "operator", {
      chart: "intel-device-plugins-operator",
      repo: "https://intel.github.io/helm-charts",
      version: "0.31.1",
      helmFlags: ["--namespace", NAMESPACE, "--include-crds"],
    });

    new Helm(this, "gpu", {
      chart: "intel-device-plugins-gpu",
      repo: "https://intel.github.io/helm-charts",
      version: "0.31.1",
      helmFlags: ["--namespace", NAMESPACE, "--include-crds"],
      values: {
        nodeFeatureRule: true,
      },
    });
  }
}
