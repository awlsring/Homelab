import { Helm } from "cdk8s";
import { Construct } from "constructs";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";

const NAMESPACE = "loki";

export interface LokiChartProps extends Omit<HomelabChartProps, "namespace"> {}

export class LokiChart extends HomelabChart {
  constructor(scope: Construct, name: string, props?: LokiChartProps) {
    super(scope, name, {
      ...props,
      namespace: NAMESPACE,
      createNamespace: true,
    });

    new Helm(this, "helm", {
      chart: "loki",
      repo: "https://grafana.github.io/helm-charts",
      version: "6.6.2",
      helmFlags: ["--namespace", NAMESPACE, "--include-crds"],
      values: {
        loki: {
          commonConfig: {
            replication_factor: 1,
          },
          schemaConfig: {
            configs: [
              {
                from: "2024-04-01",
                store: "tsdb",
                object_store: "s3",
                schema: "v13",
                index: {
                  prefix: "loki_index_",
                  period: "24h",
                },
              },
            ],
          },
          pattern_ingester: {
            enabled: true,
          },
          limits_config: {
            allow_structured_metadata: true,
            volume_enabled: true,
          },
          ruler: {
            enable_api: true,
          },
        },
        minio: {
          enabled: true,
        },
        deploymentMode: "SingleBinary",
        singleBinary: {
          replicas: 1,
        },
        backend: {
          replicas: 0,
        },
        read: {
          replicas: 0,
        },
        write: {
          replicas: 0,
        },
        ingester: {
          replicas: 0,
        },
        querier: {
          replicas: 0,
        },
        queryFrontend: {
          replicas: 0,
        },
        queryScheduler: {
          replicas: 0,
        },
        distributor: {
          replicas: 0,
        },
        compactor: {
          replicas: 0,
        },
        indexGateway: {
          replicas: 0,
        },
        bloomCompactor: {
          replicas: 0,
        },
        bloomGateway: {
          replicas: 0,
        },
      },
    });
  }
}
