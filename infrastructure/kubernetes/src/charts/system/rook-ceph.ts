import * as path from "path";
import { Helm } from "cdk8s";
import {
  GrafanaDashboard,
  HomelabChart,
  HomelabChartProps,
  ServiceType,
} from "cdk8s-constructs";
import { Construct } from "constructs";

const NAMESPACE = "rook-ceph";

export interface RookCephChartProps
  extends Omit<HomelabChartProps, "namespace"> {
  readonly serviceType: ServiceType;
}

export class RookCephChart extends HomelabChart {
  readonly storageClassName = "longhorn";
  constructor(scope: Construct, name: string, props?: RookCephChartProps) {
    super(scope, name, {
      ...props,
      namespace: NAMESPACE,
      createNamespace: true,
    });

    new Helm(this, "operator", {
      chart: "rook-release/rook-ceph",
      helmFlags: ["--namespace", NAMESPACE, "--include-crds"],
      values: {
        serviceMonitor: {
          enabled: true,
        },
        monitoring: {
          enabled: true,
        },
      },
    });

    new Helm(this, "cluster", {
      chart: "rook-release/rook-ceph-cluster",
      helmFlags: [
        "--namespace",
        NAMESPACE,
        "--set",
        `operatorNamespace=${NAMESPACE}`,
      ],
      values: {
        monitoring: {
          enabled: true,
          createPrometheusRules: true,
        },
        toolbox: {
          enabled: true,
        },
        ingress: {
          dashboard: {
            annotations: {
              "cert-manager.io/cluster-issuer": "prod",
              "cert-manager.io/duration": "2160h",
              "cert-manager.io/renew-before": "360h",
              "nginx.ingress.kubernetes.io/backend-protocol": "HTTPS",
              "nginx.ingress.kubernetes.io/server-snippet": `
        proxy_ssl_verify off;`,
            },
            host: {
              name: "ceph.us-drig-1.drigs.org",
              path: "/",
            },
            tls: [
              {
                hosts: ["ceph.us-drig-1.drigs.org"],
                secretName: "ceph-dashboard-tls",
              },
            ],
            ingressClassName: "nginx",
          },
        },
      },
    });

    GrafanaDashboard.fromFile(
      this,
      "ceph-dashboard",
      path.join(__dirname, "..", "..", "..", "dashboards", "Ceph_Cluster.json"),
    );
  }
}
