import { Helm } from "cdk8s";
import { HomelabChart, HomelabChartProps } from "cdk8s-constructs";
import { Construct } from "constructs";

const EXTERNAL_DNS_NAMESPACE = "cloudflare-external-dns";

export interface CloudflareExternalDnsChartProps
  extends Omit<HomelabChartProps, "namespace"> {
  readonly cloudflareTokenSecretRef: {
    readonly name: string;
    readonly key: string;
  };
}

export class CloudflareExternalDnsChart extends HomelabChart {
  constructor(
    scope: Construct,
    name: string,
    props: CloudflareExternalDnsChartProps,
  ) {
    super(scope, name, {
      ...props,
      namespace: EXTERNAL_DNS_NAMESPACE,
      createNamespace: true,
    });

    new Helm(this, "helm", {
      chart: "external-dns/external-dns",
      helmFlags: ["--namespace", EXTERNAL_DNS_NAMESPACE],
      values: {
        provider: "cloudflare",
        txtOwnerId: "homelab",
        env: [
          {
            name: "CF_API_TOKEN",
            valueFrom: {
              secretKeyRef: {
                name: props.cloudflareTokenSecretRef.name,
                key: props.cloudflareTokenSecretRef.key,
              },
            },
          },
        ],
        triggerLoopOnEvent: true,
        metrics: {
          enabled: true,
          serviceMonitor: {
            enabled: true,
          },
        },
      },
    });
  }
}
