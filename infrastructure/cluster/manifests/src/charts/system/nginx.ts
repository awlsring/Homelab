import { Helm } from "cdk8s";
import { HomelabChart, HomelabChartProps } from "cdk8s-constructs";
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
      chart: "ingress-nginx/ingress-nginx",
      helmFlags: ["--namespace", NAMESPACE],
      values: {
        controller: {
          allowSnippetAnnotations: true,
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
