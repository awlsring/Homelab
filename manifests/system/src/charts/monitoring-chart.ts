import { Helm } from "cdk8s";
import { HomelabChart, HomelabChartProps, ServiceType } from "cdk8s-constructs";
import { PersistentVolumeAccessMode } from "cdk8s-plus-27";
import { Construct } from "constructs";

const MONITORING_NAMESPACE = "monitoring";

export interface MonitoringChartProps
  extends Omit<HomelabChartProps, "namespace"> {}

export class MonitoringChart extends HomelabChart {
  constructor(scope: Construct, name: string, props?: MonitoringChartProps) {
    super(scope, name, {
      ...props,
      namespace: MONITORING_NAMESPACE,
      createNamespace: true,
    });

    const serviceLoadBalancer = {
      service: {
        type: ServiceType.LOAD_BALANCER,
      },
    };

    const longhornStorage = {
      volumeClaimTemplate: {
        spec: {
          storageClassName: "longhorn",
          accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
          resources: {
            requests: {
              storage: "40Gi",
            },
          },
        },
      },
    };

    new Helm(this, "helm", {
      chart: "prometheus-community/kube-prometheus-stack",
      helmFlags: ["--namespace", MONITORING_NAMESPACE],
      values: {
        alertmanager: {
          enabled: true,
          ...serviceLoadBalancer,
          alertmanagerSpec: {
            storage: {
              ...this.makeVolumeClaimTemplate("2Gi"),
            },
          },
        },
        grafana: {
          enabled: true,
          ...serviceLoadBalancer,
          forceDeployDatasources: true,
          forceDeployDashboards: true,
          additionalDataSources: [
            {
              name: "Loki",
              type: "loki",
              url: "http://loki.loki:3100",
            },
          ],
        },
        prometheus: {
          enabled: true,
          ...serviceLoadBalancer,
          ...longhornStorage,
          prometheusSpec: {
            storageSpec: {
              ...this.makeVolumeClaimTemplate("40Gi"),
            },
            ruleSelectorNilUsesHelmValues: false,
            serviceMonitorSelectorNilUsesHelmValues: false,
            podMonitorSelectorNilUsesHelmValues: false,
            probeSelectorNilUsesHelmValues: false,
          },
        },
      },
    });
  }

  private makeVolumeClaimTemplate(size: string) {
    return {
      volumeClaimTemplate: {
        spec: {
          storageClassName: "longhorn",
          accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
          resources: {
            requests: {
              storage: size,
            },
          },
        },
      },
    };
  }
}
