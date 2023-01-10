import { Size } from "cdk8s";
import { PersistentVolumeAccessMode } from "cdk8s-plus-25";
import { KubePersistentVolumeClaim, KubeDeployment, ContainerPort, EnvVar, ResourceRequirements, Volume, KubeService, IntOrString, Quantity } from "cdk8s-plus-25/lib/imports/k8s";
import { Construct } from "constructs";
import { ClusterIssuer } from "../../../imports/certmanager-cert-manager.io";
import { HomelabChart, HomelabChartProps } from "../../common/charts";
import { GenerateCertificateAndIngress } from "../../service-utils/service-utils";

export interface AppPorts {
  name: string
  port: number
}

export interface YargChartProps extends HomelabChartProps {
  certIssuer: ClusterIssuer
  nfsServer: string
  configSize?: Size
  dnsDomain: string
}

export interface AppProps {
  name: string
  image: string
  port: number
  media?: {
    mountPath?: string
  },
  extraPorts?: AppPorts[]
  serviceType?: string
  extraEnvs?: EnvVar[]
  resources?: ResourceRequirements
}

export interface AppDeploymentProps {
  name: string
  image: string
  env: EnvVar[],
  ports: AppPorts[]
  mediaVolume: Volume
  configVolume: Volume
  mountPath?: string
  resources?: ResourceRequirements
}
export interface AppServiceProps {
  name: string
  type?: string
  ports?: AppPorts[]
}

export class YargChart extends HomelabChart {
  private BuildAppService(props: AppServiceProps) {
    const label = { app: props.name };
    return new KubeService(this, `${props.name}-service`, {
      spec: {
        selector: label,
        type: props.type,
        ports: props.ports,
      }
    })
  }

  private BuildAppDeployment(props: AppDeploymentProps) {
    const label = { app: props.name };

    const ports = props.ports.map(port => {
      return {
        name: port.name,
        containerPort: port.port,
      } as ContainerPort
    })

    return new KubeDeployment(this, `${props.name}-deployment`, {
      spec: {
        selector: {
          matchLabels: label
        },
        replicas: 1,
        template: {
          metadata: {
            labels: label
          },
          spec: {
            containers: [
              {
                name: props.name,
                image: props.image,
                ports: ports,
                resources: props.resources,
                volumeMounts: [
                  {
                    name: props.mediaVolume.name,
                    mountPath: props.mountPath ?? "/fin",
                  },
                  {
                    name: props.configVolume.name,
                    mountPath: "/config",
                  },
                ],
              }
            ],
            volumes: [
              props.mediaVolume,
              props.configVolume,
            ],
          },
        },
      }
    })
  }

  constructor(scope: Construct, name: string, props: YargChartProps) {
    super(scope, name, props)

    const nfsMediaVolume: Volume = {
      name: "media",
      nfs: {
        server: props.nfsServer,
        path: "/mnt/WD-6D-8T/fin",
      },
    }

    const apps: AppProps[] = [
      {
        name: "lidarr",
        image: "lscr.io/linuxserver/lidarr:latest",
        port: 8686,
      },
      {
        name: "radarr",
        image: "lscr.io/linuxserver/radarr:latest",
        port: 7878,
      },
      {
        name: "sonarr",
        image: "lscr.io/linuxserver/sonarr:latest",
        port: 8989,
      },
      {
        name: "prowlarr",
        image: "lscr.io/linuxserver/prowlarr:latest",
        port: 9696,
      },
      {
        name: "requestrr",
        image: "darkalfx/requestrr:latest",
        port: 4545,
      },
      {
        name: "syncthing",
        image: "lscr.io/linuxserver/syncthing:latest",
        port: 8384,
        extraPorts: [
          {
            port: 22000,
            name: "syncthing-ex1",
          },
          {
            port: 21027,
            name: "syncthing-ex2",
          },
        ],
        serviceType: "LoadBalancer",
      },
      {
        name: "resillio",
        image: "lscr.io/linuxserver/resilio-sync:latest",
        port: 8888,
        media: {
          mountPath: "/sync",
        },
        extraPorts: [
          {
            port: 55555,
            name: "resillio-sync",
          },
        ],
        serviceType: "LoadBalancer",
      },
    ]
    
    apps.forEach(app =>{
      const configPvc = new KubePersistentVolumeClaim(this, `${app.name}-config-pvc`, {
        spec: {
          accessModes: [PersistentVolumeAccessMode.READ_WRITE_MANY],
          resources: {
            requests: {
              storage: Quantity.fromString("500Mi")
            }
          },
          storageClassName: "longhorn"
        }
      })

      const configVolume: Volume = {
        name: "config",
        persistentVolumeClaim: {
          claimName: configPvc.name,
        }
      }

      const linuxioEnv: EnvVar[] = [
        {
          name: "PUID",
          value: "1000"
        },
        {
          name: "GUID",
          value: "1000"
        }
      ]
      const env = app.extraEnvs ? linuxioEnv.concat(...app.extraEnvs) : linuxioEnv
      
      const extraPorts = app.extraPorts ? app.extraPorts : []
      const ports: AppPorts[] = [
        {
          port: app.port,
          name: "http",
        },
        ...extraPorts,
      ]

      this.BuildAppDeployment({
        name: app.name,
        image: app.image,
        env: env,
        ports: ports,
        mediaVolume: nfsMediaVolume,
        configVolume: configVolume,
        mountPath: app.media?.mountPath,
      })


      const extraServicePorts = app.extraPorts ? app.extraPorts : []
      const servicePorts: AppPorts[] = [
        {
          name: app.name,
          port: app.port,
        },
        ...extraServicePorts,
      ]

      const service = this.BuildAppService({
        name: app.name,
        type: app.serviceType ?? "ClusterIP",
        ports: servicePorts,
      })

      GenerateCertificateAndIngress(this, {
        namespace: props.namespace,
        certIssuer: props.certIssuer,
        service: {
          name: service.name,
          port: app.port,
        },
        dnsName: `${app.name}.${props.dnsDomain}`
      })
    })
  }
}