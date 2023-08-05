import { Size } from 'cdk8s';
import { Deployment, EnvValue, PersistentVolumeAccessMode, PersistentVolumeClaim, PersistentVolumeClaimProps, Service, ServiceType, Volume } from 'cdk8s-plus-25';
import { Construct } from 'constructs';
import { HomelabChart, HomelabChartProps } from '../../common/homelab-charts';

export interface HeimdallChartProps extends HomelabChartProps {
  readonly options?: HeimdallOptions;
}

export interface HeimdallOptions {
  readonly image?: string;
  readonly timezone?: string;
  readonly configVolSize?: Size;
}

export class HeimdallChart extends HomelabChart {

  constructor(scope: Construct, name: string, props: HeimdallChartProps) {
    super(scope, name, props);

    const configVolume = this.formPersistanceVolume('config', {
      storageClassName: 'longhorn',
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_MANY],
      storage: props.options?.configVolSize ?? Size.gibibytes(5),
    });

    const deployment = new Deployment(this, 'deployment', {
      replicas: 1,
      containers: [
        {
          image: `lscr.io/linuxserver/heimdall:${props.options?.image ?? 'latest'}`,
          portNumber: 80,
          envVariables: {
            PUID: EnvValue.fromValue('1000'),
            GUID: EnvValue.fromValue('1000'),
            TZ: EnvValue.fromValue(props.options?.timezone ?? 'Etc/UTC'),
          },
          volumeMounts: [
            {
              path: '/config',
              volume: configVolume,
            },
          ],
          securityContext: {
            ensureNonRoot: false,
            privileged: true,
            readOnlyRootFilesystem: false,
            allowPrivilegeEscalation: true,
          },
          resources: {},
        },
      ],
    });

    const service = new Service(this, 'service', {
      type: ServiceType.CLUSTER_IP,
      selector: deployment,
      ports: [
        {
          port: 80,
          targetPort: 80,
        },
      ],
    });

    if (props.tls) {
      this.configureTls(props.tls.name, props.tls.certIssuer, props.tls.dnsNames, service);
    }

  }

  private formPersistanceVolume(name: string, props: PersistentVolumeClaimProps): Volume {
    let pvc = new PersistentVolumeClaim(this, `${name}-pvc`, props);
    return Volume.fromPersistentVolumeClaim(this, `${name}-volume`, pvc);
  }

}