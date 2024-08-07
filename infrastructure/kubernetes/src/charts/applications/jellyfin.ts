import { Size } from "cdk8s";
import {
  CloudflareClusterTunnel,
  HomelabChart,
  HomelabChartProps,
  HomelabDeployment,
  HomelabIngress,
  HomelabIngressOptions,
} from "cdk8s-constructs";
import {
  Cpu,
  DeploymentStrategy,
  EnvValue,
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  Service,
  ServiceType,
  Volume,
  VolumeMount,
} from "cdk8s-plus-minus";
import { Construct } from "constructs";

const DEFAULT_IMAGE_TAG = "latest";
const DEFAULT_TIME_ZONE = "Etc/UTC";
const PUID = 1000;
const PGID = 1000;
const DEFAULT_PORT = 8096;

export interface JellyfinChartProps extends HomelabChartProps {
  readonly timezone?: string;
  readonly imageTag?: string;
  readonly ingress: HomelabIngressOptions;
  readonly storage: {
    readonly size?: Size;
    readonly storageClassName: string;
  };
  readonly tunnel: {
    readonly email: string;
    readonly domain: string;
    readonly cloudflareSecret: string;
    readonly accountId: string;
    readonly fqdn?: string;
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
      storage: props.storage.size ?? Size.gibibytes(10),
      storageClassName: props.storage.storageClassName,
    });
    const configVol = Volume.fromPersistentVolumeClaim(
      this,
      "config-vol",
      configPvc,
    );

    const volumeMounts: VolumeMount[] = [
      {
        path: "/config",
        volume: configVol,
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

    const deployment = new HomelabDeployment(this, "deployment", {
      replicas: 1,
      securityContext: {
        ensureNonRoot: false,
      },
      strategy: DeploymentStrategy.recreate(),
      containers: [
        {
          name: "jellyfin",
          image: `lscr.io/linuxserver/jellyfin:${
            props?.imageTag ?? DEFAULT_IMAGE_TAG
          }`,
          ports: [{ name: "http", number: DEFAULT_PORT }],
          envVariables: {
            PUID: EnvValue.fromValue(`${PUID}`),
            PGID: EnvValue.fromValue(`${PGID}`),
            TZ: EnvValue.fromValue(props.timezone ?? DEFAULT_TIME_ZONE),
          },
          volumeMounts: volumeMounts,
          resources: {
            cpu: {
              request: Cpu.millis(500),
              limit: Cpu.millis(4000),
            },
            memory: {
              request: Size.gibibytes(1),
              limit: Size.gibibytes(8),
            },
            custom: [
              {
                key: "gpu.intel.com/i915",
                limit: "1",
                request: "1",
              },
            ],
          },
          securityContext: {
            privileged: true,
            allowPrivilegeEscalation: true,
            ensureNonRoot: false,
            readOnlyRootFilesystem: false,
          },
        },
      ],
    });
    // deployment.addGpuToContainer(GpuType.INTEL_INTEGRATED);

    const service = new Service(this, "service", {
      type: props.ingress.type ?? ServiceType.CLUSTER_IP,
      selector: deployment,
      ports: [{ name: "http", port: DEFAULT_PORT, targetPort: DEFAULT_PORT }],
    });

    new HomelabIngress(this, "ingress", {
      ingressClassName: props.ingress.ingressClass,
      service: service,
      hostname: props.ingress.hostname,
      certIssuer: props.ingress.certIssuer,
    });

    const tunnel = new CloudflareClusterTunnel(this, "tunnel", {
      email: props.tunnel.email,
      domain: props.tunnel.domain,
      cloudflareSecret: props.tunnel.cloudflareSecret,
      accountId: props.tunnel.accountId,
    });
    tunnel.bindToService(service, {
      domainName: props.tunnel.fqdn,
    });
  }
}
