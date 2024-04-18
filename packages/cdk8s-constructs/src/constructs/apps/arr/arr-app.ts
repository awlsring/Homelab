import { Duration, Size } from "cdk8s";
import {
  ConnectionScheme,
  ContainerProps,
  Cpu,
  DeploymentStrategy,
  EnvValue,
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  Probe,
  Protocol,
  Service,
  ServiceType,
  Volume,
  VolumeMount,
} from "cdk8s-plus-minus";
import { Construct } from "constructs";
import { HomelabDeployment } from "../../homelab/deployment";
import { HomelabIngress, HomelabIngressOptions } from "../../homelab/ingress";
import { PrometheusRule } from "../../prometheus/prometheus-rule";
import { ServiceMonitor } from "../../prometheus/service-monitor";

const DEFAULT_TIME_ZONE = "Etc/UTC";
const DEFAULT_IMAGE_TAG = "latest";
const PUID = 1000;
const PGID = 1000;

const EXPORTARR_NAME = "exportarr";
const EXPORTARR_IMAGE = "ghcr.io/onedr0p/exportarr";
const EXPORTARR_PORT = 9707;

export interface MetricOptions {
  readonly application: string;
  readonly imageTag?: string;
  readonly prometheusRule?: boolean;
  readonly enableAdditionalMetrics?: boolean;
  readonly enableUnknownQueueMetrics?: boolean;
}

export interface ConfigVolumeOptions {
  readonly storageClass?: string;
  readonly size?: Size;
  readonly configVolume?: Volume;
}

export interface DeploymentOptions {
  readonly replicas?: number;
}

export interface ArrAppOptions {
  readonly deployment?: DeploymentOptions;
  readonly ingress: HomelabIngressOptions;
  readonly config: ConfigVolumeOptions;
  readonly metrics?: MetricOptions;
  readonly volumeMounts?: VolumeMount[];
  readonly probe?: ProbeOptions;
  readonly webPort?: number;
  readonly timezone?: string;
  readonly imageTag?: string;
}

export interface ArrAppApplicationOption {
  readonly name: string;
  readonly port: number;
}

export interface ProbeOptions {
  readonly liveness?: Probe;
}

export interface ArrAppProps {
  readonly app: ArrAppApplicationOption;
  readonly deployment?: DeploymentOptions;
  readonly ingress: HomelabIngressOptions;
  readonly metrics?: MetricOptions;
  readonly config: ConfigVolumeOptions;
  readonly volumeMounts?: VolumeMount[];
  readonly probe?: ProbeOptions;
  readonly image: string;
  readonly webPort?: number;
  readonly timezone?: string;
  readonly imageTag?: string;
}

export class ArrApp extends Construct {
  readonly deployment: HomelabDeployment;
  readonly service: Service;
  readonly ingress: HomelabIngress;

  constructor(scope: Construct, name: string, props: ArrAppProps) {
    super(scope, name);

    const image = `${props.image}:${props.imageTag ?? DEFAULT_IMAGE_TAG}`;

    const configVol = this.determineConfigVolume(props.config);

    const volumeMounts: VolumeMount[] = props.volumeMounts ?? [];
    volumeMounts.push({
      volume: configVol,
      path: "/config",
    });

    const startupProbe = Probe.fromTcpSocket({
      port: props.app.port,
      initialDelaySeconds: Duration.seconds(0),
      failureThreshold: 30,
      timeoutSeconds: Duration.seconds(1),
      periodSeconds: Duration.seconds(5),
    });

    const readinessProbe = Probe.fromTcpSocket({
      port: props.app.port,
      initialDelaySeconds: Duration.seconds(0),
      failureThreshold: 3,
      timeoutSeconds: Duration.seconds(1),
      periodSeconds: Duration.seconds(10),
    });

    const containers: ContainerProps[] = [
      {
        securityContext: {
          privileged: true,
          allowPrivilegeEscalation: true,
          ensureNonRoot: false,
          readOnlyRootFilesystem: false,
        },
        resources: {
          cpu: {
            request: Cpu.millis(100),
            limit: Cpu.millis(1000),
          },
          memory: {
            request: Size.mebibytes(256),
            limit: Size.mebibytes(2048),
          },
        },
        name: props.app.name,
        image: image,
        ports: [{ number: props.app.port }],
        envVariables: {
          PUID: EnvValue.fromValue(`${PUID}`),
          PGID: EnvValue.fromValue(`${PGID}`),
          TZ: EnvValue.fromValue(props.timezone ?? DEFAULT_TIME_ZONE),
        },
        volumeMounts: volumeMounts,
        readiness: readinessProbe,
        startup: startupProbe,
        liveness: props.probe?.liveness,
      },
    ];
    if (props.metrics) {
      containers.push(this.createExportarrSidecar(props.metrics, configVol));
    }

    this.deployment = new HomelabDeployment(this, "deployment", {
      replicas: 1,
      strategy: DeploymentStrategy.recreate(),
      securityContext: {
        ensureNonRoot: false,
      },
      containers: containers,
    });

    if (props.metrics) {
      const labels: Record<string, string> = {
        "app.kubernetes.io/name": props.app.name,
      };
      new Service(this, "prom-service", {
        metadata: {
          labels: labels,
        },
        type: props.ingress.type ?? ServiceType.CLUSTER_IP,
        selector: this.deployment,
        ports: [
          {
            name: "metrics",
            protocol: Protocol.TCP,
            port: EXPORTARR_PORT,
            targetPort: EXPORTARR_PORT,
          },
        ],
      });

      new ServiceMonitor(this, "service-monitor", {
        matchLabels: labels,
        endpoints: [
          {
            port: "metrics",
            interval: Duration.minutes(3),
            scrapeTimeout: Duration.seconds(30),
            path: "/metric",
          },
        ],
      });

      if (props.metrics.prometheusRule) {
        new PrometheusRule(this, "prometheus-rule", {
          groups: [
            {
              name: "exportarr",
              rules: [
                {
                  alert: "exportarrAbsent",
                  annotations: {
                    description: `${props.app.name} exportarr has disappeared from Prometheus service discovery.`,
                    summary: "Exportarr is down",
                  },
                  expression: `absent(up{job=~".*home-assistant-radarr.*"} == 1)`,
                  for: Duration.minutes(5),
                  labels: {
                    severity: "critical",
                  },
                },
                {
                  alert: `${props.app.name}Absent`,
                  annotations: {
                    description: `${props.app.name} service is down`,
                    summary: `${props.app.name} is down`,
                  },
                  expression: `radarr_system_status{job=~".*home-assistant-radarr.*"} == 0`,
                  for: Duration.minutes(5),
                  labels: {
                    severity: "critical",
                  },
                },
              ],
            },
          ],
        });
      }
    }

    this.service = new Service(this, "service", {
      type: props.ingress.type ?? ServiceType.CLUSTER_IP,
      selector: this.deployment,
      ports: [
        {
          port: props.app.port,
          protocol: Protocol.TCP,
          name: "http",
        },
      ],
    });

    this.ingress = new HomelabIngress(this, "ingress", {
      ingressClassName: props.ingress.ingressClass,
      service: this.service,
      hostname: props.ingress.hostname,
      certIssuer: props.ingress.certIssuer,
    });
  }

  private createExportarrSidecar(
    options: MetricOptions,
    configVol: Volume,
  ): ContainerProps {
    const image = `${EXPORTARR_IMAGE}:${options.imageTag ?? DEFAULT_IMAGE_TAG}`;
    const env: Record<string, EnvValue> = {
      URL: EnvValue.fromValue("http://localhost"),
      CONFIG: EnvValue.fromValue("/config/config.xml"),
      PORT: EnvValue.fromValue(`${EXPORTARR_PORT}`),
      ENABLE_ADDITIONAL_METRICS: EnvValue.fromValue(
        `${options.enableAdditionalMetrics ?? false}`,
      ),
      ENABLE_UNKNOWN_QUEUE_ITEMS: EnvValue.fromValue(
        `${options.enableAdditionalMetrics ?? false}`,
      ),
    };
    if (options.enableAdditionalMetrics) {
      env.ENABLE_ADDITIONAL_METRICS = EnvValue.fromValue("true");
    }

    const readiness = Probe.fromHttpGet("/healthz", {
      port: EXPORTARR_PORT,
      scheme: ConnectionScheme.HTTP,
      failureThreshold: 5,
      periodSeconds: Duration.seconds(10),
    });

    const liveness = Probe.fromHttpGet("/healthz", {
      port: EXPORTARR_PORT,
      scheme: ConnectionScheme.HTTP,
      failureThreshold: 5,
      periodSeconds: Duration.seconds(10),
    });

    return {
      securityContext: {
        ensureNonRoot: false,
        readOnlyRootFilesystem: false,
      },
      args: [options.application],
      resources: {
        cpu: {
          limit: Cpu.millis(500),
          request: Cpu.millis(100),
        },
        memory: {
          limit: Size.mebibytes(256),
          request: Size.mebibytes(64),
        },
      },
      volumeMounts: [
        {
          volume: configVol,
          path: "/config",
        },
      ],
      name: EXPORTARR_NAME,
      image: image,
      ports: [{ name: "metrics", number: EXPORTARR_PORT }],
      envVariables: env,
      liveness: liveness,
      readiness: readiness,
    };
  }

  private determineConfigVolume(config: ConfigVolumeOptions): Volume {
    if (config.configVolume) {
      return config.configVolume;
    }

    const configPvc = new PersistentVolumeClaim(this, "config-pvc", {
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: config.size ?? Size.gibibytes(5),
      storageClassName: config.storageClass ?? "default",
    });
    return Volume.fromPersistentVolumeClaim(this, "config-vol", configPvc);
  }
}
