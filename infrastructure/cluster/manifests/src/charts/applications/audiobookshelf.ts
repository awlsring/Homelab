import { Size } from "cdk8s";
import {
  HomelabChart,
  HomelabChartProps,
  HomelabIngress,
} from "cdk8s-constructs";
import {
  Cpu,
  Deployment,
  DeploymentStrategy,
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  Service,
  ServiceType,
  Volume,
} from "cdk8s-plus-27";
import { Construct } from "constructs";

const AUDIOBOOKSHELF_PORT = 13378;
const WEB_PORT = 80;

export interface AudioBookshelfProps extends HomelabChartProps {
  readonly imageTag: string;
  readonly configStorage: {
    readonly size?: Size;
    readonly storageClassName: string;
  };
  readonly metadataStorage: {
    readonly size?: Size;
    readonly storageClassName: string;
  };
  readonly mediaStorage: {
    readonly server: string;
    readonly serverPath: string;
    readonly mountPath: string;
  };
  readonly ingress: {
    readonly ingressClass: string;
    readonly type: ServiceType;
    readonly hostname: string;
    readonly certIssuer: string;
  };
}

export class AudioBookshelfChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: AudioBookshelfProps) {
    super(scope, name, props);

    const configPvc = new PersistentVolumeClaim(this, "config-pvc", {
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: props.configStorage.size ?? Size.gibibytes(1),
      storageClassName: props.configStorage.storageClassName,
    });
    const configVol = Volume.fromPersistentVolumeClaim(
      this,
      "config-vol",
      configPvc,
    );

    const metadataPvc = new PersistentVolumeClaim(this, "metadata-pvc", {
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: props.metadataStorage.size ?? Size.gibibytes(5),
      storageClassName: props.configStorage.storageClassName,
    });
    const metadataVol = Volume.fromPersistentVolumeClaim(
      this,
      "metadata-vol",
      metadataPvc,
    );

    const nfsVol = Volume.fromNfs(this, "nfs-vol", "media", {
      server: props.mediaStorage.server,
      path: props.mediaStorage.serverPath,
    });

    const deployment = new Deployment(this, "deployment", {
      replicas: 1,
      strategy: DeploymentStrategy.recreate(),
      securityContext: {
        ensureNonRoot: false,
      },
      containers: [
        {
          securityContext: {
            ensureNonRoot: false,
            readOnlyRootFilesystem: false,
          },
          resources: {
            cpu: {
              request: Cpu.millis(200),
              limit: Cpu.millis(1000),
            },
            memory: {
              request: Size.mebibytes(512),
              limit: Size.mebibytes(2048),
            },
          },
          name: "audiobookshelf",
          image: `ghcr.io/ghcr.io/advplyr/audiobookshelf:${props.imageTag}`,
          ports: [{ number: AUDIOBOOKSHELF_PORT }],
          volumeMounts: [
            {
              volume: nfsVol,
              path: props.mediaStorage.mountPath,
            },
            {
              volume: configVol,
              path: "/config",
            },
            {
              volume: metadataVol,
              path: "/metadata",
            },
          ],
        },
      ],
    });

    const service = new Service(this, "service", {
      type: props.ingress.type ?? ServiceType.CLUSTER_IP,
      selector: deployment,
      ports: [{ port: AUDIOBOOKSHELF_PORT, targetPort: WEB_PORT }],
    });

    new HomelabIngress(this, "ingress", {
      ingressClassName: props.ingress.ingressClass,
      service: service,
      hostname: props.ingress.hostname,
      certIssuer: props.ingress.certIssuer,
    });
  }
}
