import { Duration, Size } from "cdk8s";
import {
  Cpu,
  Deployment,
  DeploymentStrategy,
  EnvValue,
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  Probe,
  Protocol,
  Service,
  ServiceType,
  Volume,
} from "cdk8s-plus-31";
import { Construct } from "constructs";
import { HomelabIngressOptions } from "../homelab/ingress";
import { PersistentVolumeClaimOptions } from "../homelab/storage";

const IMAGE = "docker.io/ciuse99/suggestarr";
const PORT = 5000;
const LOG_LEVEL = "info";
const CONFIG_PATH = "/app/config/config_files";
const DEFAULT_TIMEZONE = "America/Los_Angeles";

export interface SuggestArrProps {
  readonly config: PersistentVolumeClaimOptions;
  readonly ingress: HomelabIngressOptions;
  readonly imageTag: string;
  readonly timezone?: string;
}

export class SuggestArr extends Construct {
  readonly deployment: Deployment;
  readonly service: Service;

  constructor(scope: Construct, name: string, props: SuggestArrProps) {
    super(scope, name);

    const configPvc = new PersistentVolumeClaim(this, "config-pvc", {
      storageClassName: props.config.storageClass,
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: props.config.size ?? Size.gibibytes(5),
    });
    const configVolume = Volume.fromPersistentVolumeClaim(
      this,
      "config-vol",
      configPvc
    );

    this.deployment = new Deployment(this, "deployment", {
      replicas: 1,
      strategy: DeploymentStrategy.recreate(),
      containers: [
        {
          name: "suggestarr",
          image: `${IMAGE}:${props.imageTag}`,
          ports: [
            {
              number: PORT,
              name: "http",
              protocol: Protocol.TCP,
            },
          ],
          envVariables: {
            LOG_LEVEL: EnvValue.fromValue(LOG_LEVEL),
            SUGGESTARR_PORT: EnvValue.fromValue(`${PORT}`),
            TZ: EnvValue.fromValue(props.timezone ?? DEFAULT_TIMEZONE),
          },
          securityContext: {
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
              limit: Size.gibibytes(1),
            },
          },
          volumeMounts: [
            {
              volume: configVolume,
              path: CONFIG_PATH,
            },
          ],
          liveness: Probe.fromHttpGet("/api/health/live", {
            port: PORT,
            initialDelaySeconds: Duration.seconds(10),
            periodSeconds: Duration.seconds(10),
            timeoutSeconds: Duration.seconds(1),
            failureThreshold: 3,
          }),
          readiness: Probe.fromHttpGet("/api/health/live", {
            port: PORT,
            initialDelaySeconds: Duration.seconds(10),
            periodSeconds: Duration.seconds(10),
            timeoutSeconds: Duration.seconds(1),
            failureThreshold: 3,
          }),
          startup: Probe.fromHttpGet("/api/health/live", {
            port: PORT,
            initialDelaySeconds: Duration.seconds(10),
            periodSeconds: Duration.seconds(10),
            timeoutSeconds: Duration.seconds(1),
            failureThreshold: 30,
          }),
        },
      ],
      volumes: [configVolume],
    });

    this.service = new Service(this, "service", {
      type: props.ingress.type ?? ServiceType.CLUSTER_IP,
      selector: this.deployment,
      ports: [
        {
          name: "http",
          port: PORT,
          targetPort: PORT,
        },
      ],
    });
  }
}
