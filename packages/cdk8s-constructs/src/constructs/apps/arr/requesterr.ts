import { Duration, Size } from "cdk8s";
import {
  Cpu,
  DeploymentStrategy,
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  Probe,
  Protocol,
  Service,
  ServiceType,
  Volume,
} from "cdk8s-plus-minus";
import { Construct } from "constructs";
import { HomelabDeployment } from "../../homelab/deployment";
import { HomelabIngress, HomelabIngressOptions } from "../../homelab/ingress";
import { PersistentVolumeClaimOptions } from "../../homelab/storage";

const REQUESTERR = "requesterr";
const REQUESTERR_IMAGE = "thomst08/requestrr";
const PORT = 4545;
const DEFAULT_IMAGE_TAG = "latest";

export interface RequesterrProps {
  readonly imageTag?: string;
  readonly ingress: HomelabIngressOptions;
  readonly config: PersistentVolumeClaimOptions;
}

export class Requesterr extends Construct {
  readonly deployment: HomelabDeployment;
  readonly service: Service;
  readonly ingress: HomelabIngress;

  constructor(scope: Construct, name: string, props: RequesterrProps) {
    super(scope, name);

    const image = `${REQUESTERR_IMAGE}:${props.imageTag ?? DEFAULT_IMAGE_TAG}`;

    const configPvc = new PersistentVolumeClaim(this, "config-pvc", {
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: props.config.size ?? Size.gibibytes(1),
      storageClassName: props.config.storageClass ?? "default",
    });
    const configVol = Volume.fromPersistentVolumeClaim(
      this,
      "config-vol",
      configPvc,
    );

    this.deployment = new HomelabDeployment(this, "deployment", {
      replicas: 1,
      strategy: DeploymentStrategy.recreate(),
      securityContext: {
        ensureNonRoot: false,
      },
      containers: [
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
              limit: Cpu.millis(500),
            },
            memory: {
              request: Size.mebibytes(64),
              limit: Size.mebibytes(256),
            },
          },
          name: REQUESTERR,
          image: image,
          ports: [{ number: PORT }],
          volumeMounts: [
            {
              volume: configVol,
              path: "/root/config",
            },
          ],
          readiness: Probe.fromTcpSocket({
            port: PORT,
            initialDelaySeconds: Duration.seconds(0),
            failureThreshold: 3,
            timeoutSeconds: Duration.seconds(1),
            periodSeconds: Duration.seconds(10),
          }),
          startup: Probe.fromTcpSocket({
            port: PORT,
            initialDelaySeconds: Duration.seconds(0),
            failureThreshold: 30,
            timeoutSeconds: Duration.seconds(1),
            periodSeconds: Duration.seconds(5),
          }),
        },
      ],
    });

    this.service = new Service(this, "service", {
      type: props.ingress.type ?? ServiceType.CLUSTER_IP,
      selector: this.deployment,
      ports: [
        {
          port: PORT,
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
}
