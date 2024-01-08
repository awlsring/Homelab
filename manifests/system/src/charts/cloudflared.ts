import { HomelabChart, HomelabChartProps } from "cdk8s-constructs";
import {
  ConfigMap,
  Deployment,
  ImagePullPolicy,
  RestartPolicy,
  Secret,
  Volume,
} from "cdk8s-plus-27";
import { Construct } from "constructs";

const CLOUDFLARED_NAMESPACE = "cloudflared";

export interface CloudflaredIngressConfig {
  readonly hostname: string;
  readonly service: string;
}

export interface CloudflaredChartProps
  extends Omit<HomelabChartProps, "namespace"> {
  readonly version: string;
  readonly tunnelName: string;
  readonly tunnelCredentialsSecretName: string;
  readonly replicas?: number;
  readonly ingress?: CloudflaredIngressConfig[];
}

export class CloudflaredChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: CloudflaredChartProps) {
    super(scope, name, {
      ...props,
      namespace: CLOUDFLARED_NAMESPACE,
      createNamespace: true,
    });

    const secret = Secret.fromSecretName(
      this,
      "secret",
      props.tunnelCredentialsSecretName,
    );
    const secretVolume = Volume.fromSecret(this, "secret-vol", secret);

    const config = new ConfigMap(this, "config", {
      data: {
        "config.yaml": `tunnel: ${props.tunnelName}
credentials-file: /etc/cloudflared/creds/credentials.json
no-autoupdate: true
${props.ingress ? "ingress:" : ""}
${this.makeIngressLines(props.ingress ?? []).join("")}
`,
      },
    });
    const configVol = Volume.fromConfigMap(this, "config-vol", config, {
      name: "cloudflared",
      items: {
        "config.yaml": { path: "config.yaml" },
      },
    });

    new Deployment(this, "deployment", {
      replicas: props.replicas ?? 1,
      restartPolicy: RestartPolicy.ALWAYS,
      containers: [
        {
          name: "cloudflared",
          image: `cloudflare/cloudflared:${props.version}`,
          imagePullPolicy: ImagePullPolicy.ALWAYS,
          args: ["tunnerl", "--config", "/etc/cloudflared/config.yml", "run"],
          volumeMounts: [
            {
              path: "/etc/cloudflared/config",
              volume: configVol,
              readOnly: true,
            },
            {
              path: "/etc/cloudflared/creds",
              volume: configVol,
              readOnly: true,
            },
          ],
        },
      ],
      volumes: [secretVolume, configVol],
    });
  }

  private makeIngressLines(ingress: CloudflaredIngressConfig[]): string[] {
    return ingress.map((i) => {
      return `  - hostname: ${i.hostname}
    service: ${i.service}
`;
    });
  }
}
