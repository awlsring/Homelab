import { Duration, Size } from "cdk8s";
import {
  ConfigMap,
  Cpu,
  Deployment,
  EnvValue,
  Probe,
  Protocol,
  SecretValue,
  Service,
  ServiceAccount,
  ServiceType,
  Volume,
} from "cdk8s-plus-31";
import { Construct } from "constructs";

const SEARXNG_IMAGE = "searxng/searxng";

export interface SearXNGProps {
  readonly secret: SecretValue;
  readonly imageTag: string;
  readonly hostname: string;
  readonly valkeyHostname: string;
}

export class SearXNG extends Construct {
  readonly deployment: Deployment;
  readonly service: Service;
  readonly serviceAccount: ServiceAccount;

  constructor(scope: Construct, id: string, props: SearXNGProps) {
    super(scope, id);

    // https://docs.searxng.org/admin/installation-searxng.html
    const settingsConfigMap = new ConfigMap(this, "settings", {
      data: {
        "settings.yml": `use_default_settings: true

server:
    limiter: false
    image_proxy: true
    port: 8080
    bind_address: "0.0.0.0"

ui:
    static_use_hash: true

search:
    safe_search: 0
    autocomplete: ""
    default_lang: ""
    formats:
    - html
    - json
`,
      },
    });
    const settingsVolume = Volume.fromConfigMap(
      this,
      "settings-vol",
      settingsConfigMap
    );

    const limiterConfigMap = new ConfigMap(this, "limiter", {
      data: {
        "limiter.toml": `[botdetection.ip_limit]
# activate link_token method in the ip_limit method
link_token = true
`,
      },
    });
    const limiterVolume = Volume.fromConfigMap(
      this,
      "limiter-vol",
      limiterConfigMap
    );

    const image = `${SEARXNG_IMAGE}:${props.imageTag}`;

    this.serviceAccount = new ServiceAccount(this, "service-account", {
      automountToken: true,
    });

    this.deployment = new Deployment(this, "deployment", {
      replicas: 1,
      serviceAccount: this.serviceAccount,
      automountServiceAccountToken: true,
      containers: [
        {
          name: "searxng",
          image: image,
          ports: [{ number: 8080, protocol: Protocol.TCP }],
          envVariables: {
            // ConfigMap mounts are read-only; the Granian entrypoint must not chown them.
            FORCE_OWNERSHIP: EnvValue.fromValue("false"),
            GRANIAN_HOST: EnvValue.fromValue("0.0.0.0"),
            GRANIAN_PORT: EnvValue.fromValue("8080"),
            SEARXNG_VALKEY_URL: EnvValue.fromValue(
              `redis://${props.valkeyHostname}:6379/0`
            ),
            SEARXNG_BASE_URL: EnvValue.fromValue(`https://${props.hostname}`),
            SEARXNG_SECRET: EnvValue.fromSecretValue(props.secret),
          },
          resources: {
            cpu: {
              request: Cpu.millis(200),
              limit: Cpu.millis(2000),
            },
            memory: {
              request: Size.mebibytes(256),
              limit: Size.gibibytes(4),
            },
          },
          liveness: Probe.fromHttpGet("/", {
            port: 8080,
            failureThreshold: 3,
            initialDelaySeconds: Duration.seconds(30),
            periodSeconds: Duration.seconds(10),
            timeoutSeconds: Duration.seconds(5),
          }),
          readiness: Probe.fromHttpGet("/", {
            port: 8080,
            failureThreshold: 3,
            initialDelaySeconds: Duration.seconds(30),
            periodSeconds: Duration.seconds(10),
            timeoutSeconds: Duration.seconds(5),
          }),
          securityContext: {
            ensureNonRoot: false,
            privileged: true,
            readOnlyRootFilesystem: false,
            allowPrivilegeEscalation: true,
          },
          volumeMounts: [
            {
              volume: settingsVolume,
              path: "/etc/searxng/settings.yml",
              readOnly: true,
              subPath: "settings.yml",
            },
            {
              volume: limiterVolume,
              path: "/etc/searxng/limiter.toml",
              readOnly: true,
              subPath: "limiter.toml",
            },
          ],
        },
      ],
    });

    this.service = new Service(this, "service", {
      type: ServiceType.CLUSTER_IP,
      ports: [
        {
          name: "http",
          port: 8080,
          protocol: Protocol.TCP,
        },
      ],
      selector: this.deployment,
    });
  }
}
