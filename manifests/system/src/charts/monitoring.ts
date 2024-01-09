import { Helm } from "cdk8s";
import { HomelabChart, HomelabChartProps } from "cdk8s-constructs";
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

    new Helm(this, "helm", {
      chart: "prometheus-community/kube-prometheus-stack",
      helmFlags: ["--namespace", MONITORING_NAMESPACE],
      values: {
        alertmanager: {
          enabled: true,
          ...this.makeIngress(
            "prod",
            "alerts.us-drig-1.drigs.org",
            "alertmanager-tls",
          ),
          alertmanagerSpec: {
            storage: {
              ...this.makeVolumeClaimTemplate("2Gi"),
            },
          },
        },
        grafana: {
          enabled: true,
          ...this.makeIngress(
            "prod",
            "grafana.us-drig-1.drigs.org",
            "grafana-tls",
          ),
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
          ...this.makeIngress(
            "prod",
            "prometheus.us-drig-1.drigs.org",
            "prometheus-tls",
          ),
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

  private makeIngress(issuer: string, domain: string, secretName: string) {
    return {
      ingress: {
        enabled: true,
        annotations: {
          "cert-manager.io/cluster-issuer": issuer,
          "cert-manager.io/duration": "2160h",
          "cert-manager.io/renew-before": "360h",
        },
        hosts: [domain],
        paths: ["/"],
        tls: [
          {
            hosts: [domain],
            secretName: secretName,
          },
        ],
        ingressClassName: "nginx",
      },
    };
  }

  private makeVolumeClaimTemplate(size: string) {
    return {
      volumeClaimTemplate: {
        spec: {
          storageClassName: "ceph-block",
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
