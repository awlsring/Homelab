import { Size } from "cdk8s";
import {
  GpuType,
  HomelabChart,
  HomelabChartProps,
  HomelabDeployment,
} from "cdk8s-constructs";
import {
  Cpu,
  DeploymentStrategy,
  EnvValue,
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  Volume,
  VolumeMount,
} from "cdk8s-plus-27";
import { Construct } from "constructs";

const DEFAULT_IMAGE_TAG = "latest";
const DEFAULT_TIME_ZONE = "Etc/UTC";
const PUID = 1000;
const PGID = 1000;
const FSGRP = 1000;
const DEFAULT_PORT = 8096;

export interface JellyfinChartProps extends HomelabChartProps {
  readonly timezone?: string;
  readonly imageTag?: string;
  readonly configStorage: {
    readonly size?: Size;
    readonly storageClassName: string;
  };
  readonly cacheStorage: {
    readonly size?: Size;
    readonly storageClassName: string;
  };
  readonly mediaShares: {
    readonly name: string;
    readonly server: string;
    readonly serverPath: string;
    readonly mountPath: string;
  }[];
}

export class JellyfinChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: JellyfinChartProps) {
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

    const cachePvc = new PersistentVolumeClaim(this, "cache-pvc", {
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: props.cacheStorage.size ?? Size.gibibytes(1),
      storageClassName: props.cacheStorage.storageClassName,
    });
    const cacheVol = Volume.fromPersistentVolumeClaim(
      this,
      "cache-vol",
      cachePvc,
    );

    const volumeMounts: VolumeMount[] = [
      {
        path: "/config",
        volume: configVol,
      },
      {
        path: "/cache",
        volume: cacheVol,
      },
    ];
    props.mediaShares?.forEach((share) => {
      const vol = Volume.fromNfs(this, `${share.name}-vol`, share.name, {
        server: share.server,
        path: share.serverPath,
      });
      volumeMounts.push({
        path: share.mountPath,
        volume: vol,
      });
    });

    const resource = {
      cpu: {
        request: Cpu.millis(500),
        limit: Cpu.millis(4000),
      },
      memory: {
        request: Size.gibibytes(1),
        limit: Size.gibibytes(8),
      },
      gpu: {
        requests: 1,
      },
    };

    const container = {
      name: "jellyfin",
      image: `lscr.io/linuxserver/jellyfin:${
        props?.imageTag ?? DEFAULT_IMAGE_TAG
      }`,
      ports: [{ number: DEFAULT_PORT }],
      envVariables: {
        PUID: EnvValue.fromValue(`${PUID}`),
        PGID: EnvValue.fromValue(`${PGID}`),
        TZ: EnvValue.fromValue(props.timezone ?? DEFAULT_TIME_ZONE),
      },
      volumeMounts: volumeMounts,
      resources: resource,
      securityContext: {
        ensureNonRoot: false,
        readOnlyRootFilesystem: false,
      },
    };
    const deployment = new HomelabDeployment(this, "deployment", {
      replicas: 1,
      securityContext: {
        user: PUID,
        group: PGID,
        fsGroup: FSGRP,
      },
      strategy: DeploymentStrategy.recreate(),
      containers: [container],
    });
    deployment.addGpuToContainer(GpuType.INTEL_INTEGRATED);
  }
}
