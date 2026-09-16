import { Helm } from "cdk8s";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
import { Construct } from "constructs";

const NAMESPACE = "ingress-nginx";

export interface NginxIngressChartProps
  extends Omit<HomelabChartProps, "namespace"> {}

export class NginxIngressChart extends HomelabChart {
  constructor(scope: Construct, name: string, props?: NginxIngressChartProps) {
    super(scope, name, {
      ...props,
      namespace: NAMESPACE,
      createNamespace: true,
    });

    new Helm(this, "helm", {
      chart: "ingress-nginx",
      repo: "https://kubernetes.github.io/ingress-nginx",
      version: "4.12.0",
      helmFlags: ["--namespace", NAMESPACE, "--include-crds"],
      values: {
        controller: {
          allowSnippetAnnotations: true,
          config: {
            // BookLore's Kobo sync uses larger-than-default request headers.
            // ingress-nginx configures this directive at controller scope.
            "large-client-header-buffers": "8 32k",
          },
          admissionWebhooks: {
            timeoutSeconds: 30,
          },
          metrics: {
            enabled: true,
            serviceMonitor: {
              enabled: true,
            },
          },
        },
      },
    });
  }
}
