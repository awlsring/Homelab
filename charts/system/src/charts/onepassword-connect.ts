import { Helm } from "cdk8s";
import { HomelabChart, HomelabChartProps } from "cdk8s-constructs";
import { Construct } from "constructs";

const NAMESPACE = "onepassword-connect";
const INGRESS_SECRET_NAME = "op-connect-tls";

export interface OnePasswordConnectChartProps
  extends Omit<HomelabChartProps, "namespace"> {
  readonly ingress: {
    readonly domain: string;
    readonly issuer: string;
  };
}

/*
 * Preconfigure with the following secrets
 * op-credentials: The contents of the 1password-credentials.json
 *
 */
export class OnePasswordConnectChart extends HomelabChart {
  constructor(
    scope: Construct,
    name: string,
    props: OnePasswordConnectChartProps,
  ) {
    super(scope, name, props);
    new Helm(this, "helm", {
      chart: "1password/connect",
      helmFlags: ["--namespace", NAMESPACE],
      values: {
        connect: {
          tls: {
            enabled: true,
            secretName: INGRESS_SECRET_NAME,
          },
          ingress: {
            enabled: true,
            annotations: {
              "cert-manager.io/cluster-issuer": props.ingress.issuer,
              "cert-manager.io/duration": "2160h",
              "cert-manager.io/renew-before": "360h",
            },
            hosts: [{ host: props.ingress.domain, paths: ["/"] }],
            tls: [
              {
                hosts: [props.ingress.domain],
                secretName: INGRESS_SECRET_NAME,
              },
            ],
            ingressClassName: "nginx",
          },
        },
      },
    });
  }
}
