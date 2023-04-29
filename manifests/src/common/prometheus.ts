import { IServiceAccount } from 'cdk8s-plus-25';
import { Construct } from 'constructs';
import { Label } from './label';
import { Prometheus as PrometheusL1, PrometheusProps as PrometheusL1Props } from '../imports/prometheus-operator-monitoring.coreos.com';

export interface PrometheusProps {
  readonly namespace: string;
  readonly serviceAccount: IServiceAccount;
  readonly labels: Label[];
}

export class Prometheus extends PrometheusL1 {
  constructor(scope: Construct, name: string, props: PrometheusProps) {
    const labels: Record<string, string> = {};
    props.labels.forEach(label => {
      labels[label.key] = label.value;
    });

    const l1Props: PrometheusL1Props = {
      metadata: {
        namespace: props.namespace,
      },
      spec: {
        serviceAccountName: props.serviceAccount.name,
        serviceMonitorSelector: {
          matchLabels: labels,
        },
      },
    };

    super(scope, name, l1Props);
  }
}