import { Service, ServiceType } from 'cdk8s-plus-25';
import { Construct } from 'constructs';
import { ConfigureTlsProps, HomelabChart, HomelabChartProps } from '../../common/homelab-charts';

export interface ExternalIngressChartProps extends HomelabChartProps {
  externalName: string;
  port: number;
  tls: ConfigureTlsProps;
}

export class ExternalIngressChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: ExternalIngressChartProps) {
    super(scope, name, props);

    const service = new Service(this, 'service', {
      type: ServiceType.EXTERNAL_NAME,
      externalName: props.externalName,
      ports: [
        {
          port: props.port,
          targetPort: props.port,
        },
      ],
    });

    this.configureTls(props.tls.name, props.tls.certIssuer, props.tls.dnsNames, service, props.tls.middlewares);
  }
}