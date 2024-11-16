import { Duration, Helm, Size } from "cdk8s";
import { HomelabChart, HomelabChartProps } from "cdk8s-constructs";
import { PersistentVolumeAccessMode } from "cdk8s-plus-27";
import { Construct } from "constructs";

const MONITORING_NAMESPACE = "monitoring";

// Prometheus defaults
const DEFAULT_PROMETHEUS_RETENTION = Duration.days(7);
const DEFAULT_PROMETHEUS_STORAGE_SIZE = Size.gibibytes(100);

// Alertmanager defaults
const DEFAULT_ALERTMANAGER_STORAGE_SIZE = Size.gibibytes(2);

// common defaults
const DEFAULT_STORAGE_CLASS = "default";

export interface PrometheusRelabelConfig {
  readonly sourceLabels?: string[];
  readonly targetLabel?: string;
  readonly separator?: string;
  readonly regex?: string;
  readonly replacement?: string;
  readonly action?:
    | "replace"
    | "keep"
    | "drop"
    | "hashmod"
    | "labelmap"
    | "labeldrop"
    | "labelkeep";
}

export interface PrometheusStaticConfig {
  readonly targets: string[];
  readonly labels?: { [key: string]: string };
}

export interface PrometheusScrapeTarget {
  readonly name: string;
  readonly scrapeInterval?: string;
  readonly scrapeTimeout?: string;
  readonly metricsPath?: string;
  readonly scheme?: string;
  readonly staticConfigs: PrometheusStaticConfig[];
  readonly relabelConfig?: PrometheusRelabelConfig[];
}

export interface MonitoringChartProps
  extends Omit<HomelabChartProps, "namespace"> {
  readonly prometheus?: {
    readonly storageSize?: Size;
    readonly storageClass?: string;
    readonly retention?: Duration;
    readonly scapeTargets?: PrometheusScrapeTarget[];
  };
  readonly alertmanager?: {
    readonly storageSize?: Size;
    readonly storageClass?: string;
  };
}

export class MonitoringChart extends HomelabChart {
  constructor(scope: Construct, name: string, props?: MonitoringChartProps) {
    super(scope, name, {
      ...props,
      namespace: MONITORING_NAMESPACE,
      createNamespace: true,
    });

    new Helm(this, "helm", {
      chart: "prometheus-community/kube-prometheus-stack",
      helmFlags: ["--namespace", MONITORING_NAMESPACE, "--include-crds"],
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
              ...this.makeVolumeClaimTemplate(
                props?.alertmanager?.storageSize ??
                  DEFAULT_ALERTMANAGER_STORAGE_SIZE,
                props?.alertmanager?.storageClass ?? DEFAULT_STORAGE_CLASS,
              ),
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
            additionalScrapeConfigs: this.transformPrometheusConfig(
              props?.prometheus?.scapeTargets,
            ),
            retention: this.durationToString(
              props?.prometheus?.retention ?? DEFAULT_PROMETHEUS_RETENTION,
            ),
            storageSpec: {
              ...this.makeVolumeClaimTemplate(
                props?.prometheus?.storageSize ??
                  DEFAULT_PROMETHEUS_STORAGE_SIZE,
                props?.prometheus?.storageClass ?? DEFAULT_STORAGE_CLASS,
              ),
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

  private transformRelabelConfig(
    config: PrometheusRelabelConfig,
  ): Record<string, any> {
    const relabelConfig: Record<string, any> = {};

    if (config.sourceLabels) relabelConfig.source_labels = config.sourceLabels;
    if (config.targetLabel) relabelConfig.target_label = config.targetLabel;
    if (config.separator) relabelConfig.separator = config.separator;
    if (config.regex) relabelConfig.regex = config.regex;
    if (config.replacement) relabelConfig.replacement = config.replacement;
    if (config.action) relabelConfig.action = config.action;

    return relabelConfig;
  }

  private transformScrapeConfig(target: PrometheusScrapeTarget) {
    const scrapeConfig: Record<string, any> = {
      job_name: target.name,
      static_configs: target.staticConfigs.map((staticConfig) => ({
        targets: staticConfig.targets,
        labels: staticConfig.labels,
      })),
    };

    if (target.scrapeInterval)
      scrapeConfig.scrape_interval = target.scrapeInterval;
    if (target.scrapeTimeout)
      scrapeConfig.scrape_timeout = target.scrapeTimeout;
    if (target.metricsPath) scrapeConfig.metrics_path = target.metricsPath;
    if (target.scheme) scrapeConfig.scheme = target.scheme;
    if (target.relabelConfig) {
      scrapeConfig.relabel_configs = target.relabelConfig.map((config) => {
        return this.transformRelabelConfig(config);
      });
    }

    return scrapeConfig;
  }

  private transformPrometheusConfig(targets?: PrometheusScrapeTarget[]) {
    if (!targets) {
      return undefined;
    }
    return targets.map((target) => this.transformScrapeConfig(target));
  }

  private sizeToString(size: Size): string {
    const totalKibibytes = size.toKibibytes();
    const totalMebibytes = totalKibibytes / 1024;
    const totalGibibytes = totalMebibytes / 1024;
    const totalTebibytes = totalGibibytes / 1024;

    if (totalTebibytes >= 1) {
      return `${Math.ceil(totalTebibytes)}Ti`;
    } else if (totalGibibytes >= 1) {
      return `${Math.ceil(totalGibibytes)}Gi`;
    } else if (totalMebibytes >= 1) {
      return `${Math.ceil(totalMebibytes)}Mi`;
    } else {
      return `${Math.ceil(totalKibibytes)}Ki`;
    }
  }

  private durationToString(duration: Duration): string {
    const totalHours = duration.toHours();
    const totalDays = Math.floor(totalHours / 24);
    const totalYears = Math.floor(totalDays / 365);

    if (totalYears > 0) {
      return `${totalYears}y`;
    } else if (totalDays > 0) {
      return `${totalDays}d`;
    } else {
      return `${totalHours}h`;
    }
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

  private makeVolumeClaimTemplate(size: Size, storageClass: string) {
    return {
      volumeClaimTemplate: {
        spec: {
          storageClassName: storageClass,
          accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
          resources: {
            requests: {
              storage: this.sizeToString(size),
            },
          },
        },
      },
    };
  }
}
