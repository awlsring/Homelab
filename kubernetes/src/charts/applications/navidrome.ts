import { Size } from "cdk8s";
import {
  Cpu,
  Deployment,
  DeploymentStrategy,
  EnvValue,
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  Service,
  ServiceType,
  Volume,
} from "cdk8s-plus-31";
import { Construct } from "constructs";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
import {
  HomelabIngress,
  HomelabIngressOptions,
} from "../../constructs/homelab/ingress";
import { PersistentVolumeClaimOptions } from "../../constructs/homelab/storage";

const NAVIDROME_PORT = 4533;
const NAVIDROME_IMAGE = "docker.io/deluan/navidrome";
const DATA_PATH = "/data";
const DEFAULT_MUSIC_PATH = "/music";
const DEFAULT_SCAN_SCHEDULE = "@every 1h";

export interface NavidromeChartProps extends HomelabChartProps {
  readonly imageTag: string;
  readonly ingress?: HomelabIngressOptions;
  readonly serviceType?: ServiceType;
  readonly scanSchedule?: string;
  readonly logLevel?: string;
  readonly configStorage: PersistentVolumeClaimOptions;
  readonly musicStorage: {
    readonly server: string;
    readonly serverPath: string;
    readonly mountPath?: string;
  };
}

export class NavidromeChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: NavidromeChartProps) {
    super(scope, name, props);

    const configPvc = new PersistentVolumeClaim(this, "config-pvc", {
      storageClassName: props.configStorage.storageClass,
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: props.configStorage.size ?? Size.gibibytes(5),
    });
    const configVolume = Volume.fromPersistentVolumeClaim(
      this,
      "config-vol",
      configPvc
    );

    const musicVolume = Volume.fromNfs(this, "music-vol", "music", {
      server: props.musicStorage.server,
      path: props.musicStorage.serverPath,
    });
    const musicMountPath = props.musicStorage.mountPath ?? DEFAULT_MUSIC_PATH;

    const deployment = new Deployment(this, "deployment", {
      replicas: 1,
      strategy: DeploymentStrategy.recreate(),
      containers: [
        {
          name: "navidrome",
          image: `${NAVIDROME_IMAGE}:${props.imageTag}`,
          ports: [{ name: "http", number: NAVIDROME_PORT }],
          securityContext: {
            ensureNonRoot: false,
            readOnlyRootFilesystem: false,
          },
          envVariables: {
            TZ: EnvValue.fromValue("America/Los_Angeles"),
            ND_DATAFOLDER: EnvValue.fromValue(DATA_PATH),
            ND_MUSICFOLDER: EnvValue.fromValue(musicMountPath),
            ND_LOGLEVEL: EnvValue.fromValue(props.logLevel ?? "info"),
            ND_SCANSCHEDULE: EnvValue.fromValue(
              props.scanSchedule ?? DEFAULT_SCAN_SCHEDULE
            ),
          },
          resources: {
            cpu: {
              request: Cpu.millis(200),
              limit: Cpu.millis(1000),
            },
            memory: {
              request: Size.mebibytes(512),
              limit: Size.gibibytes(2),
            },
          },
          volumeMounts: [
            {
              volume: configVolume,
              path: DATA_PATH,
            },
            {
              volume: musicVolume,
              path: musicMountPath,
              readOnly: true,
            },
          ],
        },
      ],
      volumes: [configVolume, musicVolume],
    });

    const service = new Service(this, "service", {
      selector: deployment,
      type: props.serviceType ?? props.ingress?.type ?? ServiceType.CLUSTER_IP,
      ports: [
        {
          port: NAVIDROME_PORT,
          name: "http",
          targetPort: NAVIDROME_PORT,
        },
      ],
    });

    if (props.ingress) {
      new HomelabIngress(this, "ingress", {
        ingressClassName: props.ingress.ingressClass,
        annotations: props.ingress.annotations,
        service: service,
        port: NAVIDROME_PORT,
        hostname: props.ingress.hostname,
        certIssuer: props.ingress.certIssuer,
      });
    }
  }
}
