import { Helm } from 'cdk8s';
import { ServiceType } from 'cdk8s-plus-25';
import { Construct } from 'constructs';
import { HomelabChart, HomelabChartProps } from '../../common/homelab-charts';

export interface OnePasswordConnectChartProps extends HomelabChartProps {
  readonly name: string;
  readonly serviceType: ServiceType;
}

/*
* Preconfigured with the following secrets
* op-credentials: The contents of the 1password-credentials.json
* onepassword-token: The 1password token issued from secrets automation on 1password website
*
* Onepassword Item CRD must be installed. Located in crd/onepassword-item.yaml
*/
export class OnePasswordConnectChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: OnePasswordConnectChartProps) {
    super(scope, name, props);
    new Helm(this, 'helm', {
      chart: '1password/connect',
      helmFlags: [
        '--namespace', this.namespace,
      ],
      values: {
        connect: {
          applicationName: props.name,
          serviceType: props.serviceType,
        },
        operator: {
          create: true,
        },
      },
    });

    if (props.tls) {
      this.configureTls(props.name, props.tls.certIssuer, props.tls.dnsNames, {
        name: props.name,
        port: 8080,
      });
    }
  }
}