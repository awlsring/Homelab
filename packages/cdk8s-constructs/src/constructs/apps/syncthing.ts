import { Duration, Size } from "cdk8s";
import {
  Cpu,
  DeploymentStrategy,
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  Probe,
  Service,
  ServiceType,
  Volume,
} from "cdk8s-plus-minus";
import { Construct } from "constructs";
import { HomelabDeployment } from "../homelab/deployment";
import { HomelabIngress, HomelabIngressOptions } from "../homelab/ingress";
import { PersistentVolumeClaimOptions } from "../homelab/storage";

const SYNCTHING = "syncthing";
const IMAGE = "lscr.io/linuxserver/syncthing";
const WEB_PORT = 8384;
const SYNC_PORT_1 = 22000;
const SYNC_PORT_2 = 21027;
const DEFAULT_IMAGE_TAG = "latest";

export interface SyncthingStorageProps {
  readonly config: PersistentVolumeClaimOptions;
  readonly sync: Volume;
}

export interface SyncthingProps {
  readonly imageTag?: string;
  readonly ingress: HomelabIngressOptions;
  readonly storage: SyncthingStorageProps;
}

export class Syncthing extends Construct {
  readonly deployment: HomelabDeployment;
  readonly service: Service;
  readonly ingress: HomelabIngress;

  constructor(scope: Construct, name: string, props: SyncthingProps) {
    super(scope, name);

    const image = `${IMAGE}:${props.imageTag ?? DEFAULT_IMAGE_TAG}`;

    const configPvc = new PersistentVolumeClaim(this, "config-pvc", {
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: props.storage.config.size ?? Size.gibibytes(1),
      storageClassName: props.storage.config.storageClass ?? "default",
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
              limit: Cpu.millis(100),
            },
            memory: {
              request: Size.mebibytes(256),
              limit: Size.gibibytes(1),
            },
          },
          name: SYNCTHING,
          image: image,
          ports: [
            { name: "http", number: WEB_PORT },
            { name: "sync-ex1", number: SYNC_PORT_1 },
            { name: "sync-ex2", number: SYNC_PORT_2 },
          ],
          volumeMounts: [
            {
              volume: props.storage.sync,
              path: "/sync",
            },
            {
              volume: configVol,
              path: "/config",
            },
          ],
          readiness: Probe.fromTcpSocket({
            port: WEB_PORT,
            initialDelaySeconds: Duration.seconds(0),
            failureThreshold: 3,
            timeoutSeconds: Duration.seconds(1),
            periodSeconds: Duration.seconds(10),
          }),
          startup: Probe.fromTcpSocket({
            port: WEB_PORT,
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
          port: WEB_PORT,
          name: "http",
        },
        {
          port: SYNC_PORT_1,
          name: "sync-ex1",
        },
        {
          port: SYNC_PORT_2,
          name: "sync-ex2",
        },
      ],
    });

    this.ingress = new HomelabIngress(this, "ingress", {
      ingressClassName: props.ingress.ingressClass,
      service: this.service,
      port: WEB_PORT,
      hostname: props.ingress.hostname,
      certIssuer: props.ingress.certIssuer,
    });
  }
}
