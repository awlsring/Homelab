import { Helm } from "cdk8s";
import {
  HomelabChart,
  HomelabChartProps,
  OnePasswordClusterSecretStore,
} from "cdk8s-constructs";
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
    super(scope, name, {
      namespace: NAMESPACE,
      ...props,
    });
    new Helm(this, "helm", {
      chart: "1password/connect",
      helmFlags: ["--namespace", NAMESPACE, "--include-crds"],
      values: {
        connect: {
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

    new OnePasswordClusterSecretStore(this, "onepassword-secret-store", {
      connectHost:
        "http://onepassword-connect.onepassword-connect.svc.cluster.local:8080",
      vaults: ["Homelab"],
      connectTokenRef: {
        name: "onepassword-token",
        key: "token",
        namespace: NAMESPACE,
      },
    });
  }
}
