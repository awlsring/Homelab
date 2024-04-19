import { Helm } from "cdk8s";
import { HomelabChart, HomelabChartProps } from "cdk8s-constructs";
import { Construct } from "constructs";

const NAMESPACE = "kube-system";

export interface MultusK3SChartProps
  extends Omit<HomelabChartProps, "namespace"> {}

export class MultusK3SChart extends HomelabChart {
  constructor(scope: Construct, name: string, props?: MultusK3SChartProps) {
    super(scope, name, {
      ...props,
      namespace: NAMESPACE,
      createNamespace: true,
    });

    new Helm(this, "helm", {
      chart: "rke2-charts/rke2-multus",
      helmFlags: ["--namespace", NAMESPACE, "--include-crds"],
      values: {
        config: {
          confDir: "/var/lib/rancher/k3s/agent/etc/cni/net.d",
          binDir: "/var/lib/rancher/k3s/data/current/bin/",
          kubeconfig:
            "/var/lib/rancher/k3s/agent/etc/cni/net.d/multus.d/multus.kubeconfig",
        },
        "rke2-whereabouts": {
          fullnameOverride: "whereabouts",
          enabled: true,
          cniConf: {
            confDir: "/var/lib/rancher/k3s/agent/etc/cni/net.d",
            binDir: "/var/lib/rancher/k3s/data/current/bin/",
          },
        },
      },
    });
  }
}
