import { Helm, JsonPatch } from "cdk8s";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
import { ServiceType } from "cdk8s-plus-31";
import { Construct } from "constructs";
import { KubeConfigMap } from "../../imports/k8s";

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

    new KubeConfigMap(this, "longhorn-nixos-path", {
      metadata: {
        name: "longhorn-nixos-path",
        namespace: LONGHORN_NAMESPACE,
      },
      data: {
        PATH: "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/run/wrappers/bin:/nix/var/nix/profiles/default/bin:/run/current-system/sw/bin",
      },
    });

    const helm = new Helm(this, "helm", {
      chart: "longhorn",
      repo: "https://charts.longhorn.io",
      version: "1.8.0",
      helmFlags: ["--namespace", LONGHORN_NAMESPACE, "--include-crds"],
      values: {
        service: {
          ui: {
            type: props?.serviceType ?? ServiceType.CLUSTER_IP,
          },
        },
      },
    });

    // // https://github.com/longhorn/longhorn/issues/2166
    helm.apiObjects.forEach((apiObject) => {
      if (
        apiObject.kind === "DaemonSet" &&
        apiObject.metadata.name === "longhorn-manager"
      ) {
        apiObject.addJsonPatch(
          JsonPatch.add("/spec/template/spec/containers/0/envFrom", [
            {
              configMapRef: { name: "longhorn-nixos-path" },
            },
          ])
        );
      }
      if (
        apiObject.kind === "Deployment" &&
        apiObject.metadata.name === "longhorn-driver-deployer"
      ) {
        apiObject.addJsonPatch(
          JsonPatch.add("/spec/template/spec/containers/0/envFrom", [
            {
              configMapRef: { name: "longhorn-nixos-path" },
            },
          ])
        );
      }
      if (apiObject.kind === "Job") {
        apiObject.addJsonPatch(
          JsonPatch.add("/spec/template/spec/containers/0/envFrom", [
            {
              configMapRef: { name: "longhorn-nixos-path" },
            },
          ])
        );
      }
    });
  }
}
