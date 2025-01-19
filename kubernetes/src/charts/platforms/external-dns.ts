import { Helm } from "cdk8s";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
import { Construct } from "constructs";
import { KubeDeployment } from "../../imports/k8s";

const EXTERNAL_DNS_NAMESPACE = "external-dns";

export interface ExternalDnsChartProps
  extends Omit<HomelabChartProps, "namespace"> {
  readonly imageTag: string;
  readonly pihole: {
    readonly address: string;
    readonly passwordSecretRef: {
      readonly name: string;
      readonly key: string;
    };
  };
  readonly cloudflare: {
    readonly tokenSecretRef: {
      readonly name: string;
      readonly key: string;
    };
  };
}

export class ExternalDnsChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: ExternalDnsChartProps) {
    super(scope, name, {
      ...props,
      namespace: EXTERNAL_DNS_NAMESPACE,
      createNamespace: true,
    });

    new Helm(this, "helm", {
      chart: "external-dns",
      repo: "https://kubernetes-sigs.github.io/external-dns",
      version: "1.15.0",
      helmFlags: ["--namespace", EXTERNAL_DNS_NAMESPACE, "--include-crds"],
      values: {
        serviceAccount: {
          name: "external-dns",
        },
        image: {
          tag: props.imageTag,
        },
        provider: "cloudflare",
        env: [
          {
            name: "CF_API_TOKEN",
            valueFrom: {
              secretKeyRef: {
                name: props.cloudflare.tokenSecretRef.name,
                key: props.cloudflare.tokenSecretRef.key,
              },
            },
          },
        ],
        extraArgs: ["--regex-domain-filter=^[^.]*.drigs.org$"],
        triggerLoopOnEvent: true,
        metrics: {
          enabled: true,
          serviceMonitor: {
            enabled: true,
          },
        },
      },
    });

    new KubeDeployment(this, "pihole", {
      metadata: {
        name: "external-dns",
      },
      spec: {
        strategy: {
          type: "Recreate",
        },
        selector: {
          matchLabels: {
            app: "external-dns",
          },
        },
        template: {
          metadata: {
            labels: {
              app: "external-dns",
            },
          },
          spec: {
            serviceAccountName: "external-dns",
            securityContext: {
              fsGroup: 65534,
            },
            containers: [
              {
                name: "external-dns",
                image: `registry.k8s.io/external-dns/external-dns:${props.imageTag}`,
                envFrom: [
                  {
                    secretRef: {
                      name: props.pihole.passwordSecretRef.name,
                    },
                  },
                ],
                args: [
                  "--source=service",
                  "--source=ingress",
                  "--registry=noop",
                  "--policy=upsert-only",
                  "--provider=pihole",
                  "--pihole-tls-skip-verify",
                  `--pihole-server=${props.pihole.address}`,
                  "--domain-filter=us-drig-1.drigs.org",
                ],
              },
            ],
          },
        },
      },
    });
  }
}
