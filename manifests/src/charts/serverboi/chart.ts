import * as path from 'path';
import { ConfigMap, Deployment, EnvValue, Service, ServiceType, Volume } from 'cdk8s-plus-25';
import { Construct } from 'constructs';
import { ConfigureTlsProps, HomelabChart, HomelabChartProps } from '../../common/homelab-charts';

export interface ServerBoiProps extends HomelabChartProps {
  discordBotTls: ConfigureTlsProps;
  apiTls: ConfigureTlsProps;
}

export class ServerBoiChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: ServerBoiProps) {
    super(scope, name, props);
    const apiConfig = new ConfigMap(this, 'api-config');
    apiConfig.addFile(path.join(__dirname, 'api-config.yaml'), 'config.yaml');

    const discordConfig = new ConfigMap(this, 'discord-config');
    discordConfig.addFile(path.join(__dirname, 'discord-config.yaml'), 'config.yaml');

    const embedConfig = new ConfigMap(this, 'embed-config');
    embedConfig.addFile(path.join(__dirname, 'embed-config.yaml'), 'config.yaml');

    const statusconfig = new ConfigMap(this, 'status-config');
    statusconfig.addFile(path.join(__dirname, 'status-config.yaml'), 'config.yaml');

    const apiConfigVolume = Volume.fromConfigMap(this, 'api-config-volume', apiConfig);
    const discordConfigVolume = Volume.fromConfigMap(this, 'discord-config-volume', discordConfig);
    const embedConfigVolume = Volume.fromConfigMap(this, 'embed-config-volume', embedConfig);
    const statusConfigVolume = Volume.fromConfigMap(this, 'status-config-volume', statusconfig);

    const apiDeployment = new Deployment(this, 'api-deployment', {
      containers: [
        {
          image: 'ghcr.io/awlsring/serverboi-api:latest',
          port: 8032,
          envVariables: {
            CONFIG_PATH: EnvValue.fromValue('/config/config.yaml'),
          },
          volumeMounts: [
            {
              path: '/config',
              volume: apiConfigVolume,
            },
          ],
          securityContext: {
            allowPrivilegeEscalation: false,
            user: 1000,
          },
        },
      ],
    });

    const discordBotDeployment = new Deployment(this, 'discord-bot-deployment', {
      containers: [
        {
          image: 'ghcr.io/awlsring/serverboi-discord-bot:latest',
          port: 7032,
          envVariables: {
            CONFIG_PATH: EnvValue.fromValue('/config/config.yaml'),
          },
          volumeMounts: [
            {
              path: '/config',
              volume: discordConfigVolume,
            },
          ],
          securityContext: {
            allowPrivilegeEscalation: false,
            user: 1000,
          },
        },
      ],
    });

    new Deployment(this, 'embed-deployment', {
      replicas: 1,
      containers: [
        {
          image: 'ghcr.io/awlsring/serverboi-embed-refresher:latest',
          envVariables: {
            CONFIG_PATH: EnvValue.fromValue('/config/config.yaml'),
          },
          volumeMounts: [
            {
              path: '/config',
              volume: embedConfigVolume,
            },
          ],
          securityContext: {
            allowPrivilegeEscalation: false,
            user: 1000,
          },
        },
      ],
    });

    new Deployment(this, 'status-deployment', {
      replicas: 1,
      containers: [
        {
          image: 'ghcr.io/awlsring/serverboi-status-monitor:latest',
          envVariables: {
            CONFIG_PATH: EnvValue.fromValue('/config/config.yaml'),
          },
          volumeMounts: [
            {
              path: '/config',
              volume: statusConfigVolume,
            },
          ],
          securityContext: {
            allowPrivilegeEscalation: false,
            user: 1000,
          },
        },
      ],
    });

    const apiService = new Service(this, 'api-service', {
      type: ServiceType.CLUSTER_IP,
      selector: apiDeployment,
      ports: [
        {
          port: 8032,
          targetPort: 8032,
        },
      ],
    });

    const discordService = new Service(this, 'discord-bot-service', {
      type: ServiceType.CLUSTER_IP,
      selector: discordBotDeployment,
      ports: [
        {
          port: 7032,
          targetPort: 7032,
        },
      ],
    });

    this.configureTls(props.apiTls.name, props.apiTls.certIssuer, props.apiTls.dnsNames, apiService);

    this.configureTls(props.discordBotTls.name, props.discordBotTls.certIssuer, props.discordBotTls.dnsNames, discordService);

  }
}