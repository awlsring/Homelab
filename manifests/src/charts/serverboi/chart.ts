import * as path from 'path';
import { ConfigMap, Deployment, EnvValue, ServiceType, Volume } from 'cdk8s-plus-25';
import { Construct } from 'constructs';
import { ConfigureTlsProps, HomelabChart, HomelabChartProps } from '../../common/homelab-charts';
import { HomelabService } from '../../common/homelab-service';
import { Label } from '../../common/label';

export interface ServerBoiProps extends HomelabChartProps {
  discordBotTls: ConfigureTlsProps;
  apiTls: ConfigureTlsProps;
}

export class ServerBoiChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: ServerBoiProps) {
    super(scope, name, props);
    this.buildDeployment('api', 'ghcr.io/awlsring/serverboi-api:latest', 8032, props.apiTls);
    this.buildDeployment('discord-bot', 'ghcr.io/awlsring/serverboi-discord-bot:latest', 7032, props.discordBotTls);
    this.buildDeployment('embed', 'ghcr.io/awlsring/serverboi-embed-refresher:latest');
    this.buildDeployment('status', 'ghcr.io/awlsring/serverboi-status-monitor:latest');
  }

  private configureExposedService(service: HomelabService, tlsProps: ConfigureTlsProps) {
    const cert = service.createSSLCertificate({
      name: tlsProps.name,
      issuer: tlsProps.certIssuer,
      dnsNames: tlsProps.dnsNames,
    });
    service.exposeViaTraefikIngressRoute({
      dnsNames: tlsProps.dnsNames,
      certificate: cert,
    });
  }

  private configureMonitoredService(service: HomelabService) {
    service.addServiceMonitor({
      matchedLabel: new Label('service', service.name),
    });
  }

  private createMetricsService(name: string, deployment: Deployment): HomelabService {
    const service = new HomelabService(this, `${name}-metrics`, {
      type: ServiceType.CLUSTER_IP,
      selector: deployment,
      ports: [
        {
          name: 'metrics',
          port: 9090,
          targetPort: 9090,
        },
      ],
    });
    this.configureMonitoredService(service);
    return service;
  }

  private createExposedService(name: string, deployment: Deployment, port: number, tlsProps: ConfigureTlsProps) {
    const service = new HomelabService(this, `${name}-service`, {
      type: ServiceType.CLUSTER_IP,
      selector: deployment,
      ports: [
        {
          name: 'http',
          port: port,
          targetPort: port,
        },
        {
          name: 'metrics',
          port: 9090,
          targetPort: 9090,
        },
      ],
    });
    this.configureExposedService(service, tlsProps);
    this.configureMonitoredService(service);
  }

  private buildDeployment(name: string, container: string, port?: number, tlsProps?: ConfigureTlsProps): Deployment {
    const config = new ConfigMap(this, `${name}-config`);
    config.addFile(path.join(__dirname, `${name}-config.yaml`), 'config.yaml');

    const configVolume = Volume.fromConfigMap(this, `${name}-config-volume`, config);
    const deployment = new Deployment(this, `${name}-deployment`, {
      containers: [
        {
          image: container,
          port: port,
          envVariables: {
            CONFIG_PATH: EnvValue.fromValue('/config/config.yaml'),
          },
          volumeMounts: [
            {
              path: '/config',
              volume: configVolume,
            },
          ],
          securityContext: {
            allowPrivilegeEscalation: false,
            user: 1000,
          },
        },
      ],
    });

    if (tlsProps && port) {
      this.createExposedService(name, deployment, port, tlsProps);
    } else {
      this.createMetricsService(name, deployment);
    }

    return deployment;
  }
}