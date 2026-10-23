import { Construct } from "constructs";
import { HelmChart } from "../../constructs/charts/helm-chart";

const NAMESPACE = "kube-system";

export class CiliumChart extends HelmChart {
  constructor(scope: Construct, name: string) {
    super(scope, name, {
      namespace: NAMESPACE,
      createNamespace: false,
      chart: "cilium",
      repo: "https://helm.cilium.io/",
      version: "1.16.19",
      values: {
        updateStrategy: {
          type: "RollingUpdate",
          rollingUpdate: { maxUnavailable: 1 },
        },
        envoy: {
          updateStrategy: {
            type: "RollingUpdate",
            rollingUpdate: { maxUnavailable: 1 },
          },
        },
        operator: {
          replicas: 3,
        },
        routingMode: "native",
        ipv4NativeRoutingCIDR: "10.42.0.0/16",
        autoDirectNodeRoutes: true,
        ipam: {
          mode: "kubernetes",
          operator: {
            clusterPoolIPv4PodCIDRList: ["10.42.0.0/16"],
          },
        },
      },
    });
  }
}
