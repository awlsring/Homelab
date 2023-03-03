import { PersistentVolumeAccessMode, ServiceType } from 'cdk8s-plus-25';
import { KubeDeployment, KubePersistentVolumeClaim, Quantity, Volume } from 'cdk8s-plus-25/lib/imports/k8s';
import { Construct } from 'constructs';
import { HomelabChart, HomelabChartProps } from '../../common/homelab-charts';
import { KubeService } from '../../imports/k8s';

export interface AudioBookshelfProps extends HomelabChartProps {
  nfsServer: string;
  mountPath: string;
  configPath?: string;
}

export class AudioBookshelfChart extends HomelabChart {
  readonly image = 'ghcr.io/advplyr/audiobookshelf:latest';
  constructor(scope: Construct, name: string, props: AudioBookshelfProps) {
    super(scope, name, props);

    const configPvc = new KubePersistentVolumeClaim(this, 'config-pvc', {
      spec: {
        accessModes: [PersistentVolumeAccessMode.READ_WRITE_MANY],
        resources: {
          requests: {
            storage: Quantity.fromString('500Mi'),
          },
        },
        storageClassName: 'longhorn',
      },
    });

    const configVolume: Volume = {
      name: 'config',
      persistentVolumeClaim: {
        claimName: configPvc.name,
      },
    };

    const nfsMediaVolume: Volume = {
      name: 'media',
      nfs: {
        server: props.nfsServer,
        path: '/mnt/WD-6D-8T/fin',
      },
    };

    const appName = 'audio-bookshelf';
    const label = { app: appName };

    new KubeDeployment(this, 'deployment', {
      spec: {
        selector: {
          matchLabels: label,
        },
        replicas: 1,
        template: {
          metadata: {
            labels: label,
          },
          spec: {
            containers: [
              {
                name: appName,
                image: this.image,
                ports: [{ containerPort: 80 }],
                volumeMounts: [
                  {
                    name: nfsMediaVolume.name,
                    mountPath: props.mountPath,
                  },
                  {
                    name: configVolume.name,
                    mountPath: props.configPath ?? '/config',
                  },
                ],
              },
            ],
            volumes: [
              nfsMediaVolume,
              configVolume,
            ],
          },
        },
      },
    });

    const port = { name: appName, port: 80 };
    new KubeService(this, 'service', {
      spec: {
        selector: label,
        type: ServiceType.LOAD_BALANCER,
        ports: [port],
      },
    });

    if (props.tls) {
      this.configureTls(props.tls.name, props.tls.certIssuer, props.tls.dnsNames, port);
    }

  }
}