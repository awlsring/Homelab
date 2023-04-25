import { ApiObjectMetadata } from 'cdk8s';
import { Service } from 'cdk8s-plus-25';
import { Construct } from 'constructs';
import { ServiceMonitor, ServiceMonitorProps, ServiceMonitorSpecEndpoints, ServiceMonitorSpecEndpointsTargetPort } from '../imports/prometheus-operator-monitoring.coreos.com';

export interface PrometheusServiceMonitorProps {
  readonly service?: Service;
  readonly matchLabel: Record<string, string>;
  readonly port?: string;
  readonly targetPort?: number;
  readonly metadata?: ApiObjectMetadata;
}

export class PrometheusServiceMonitor extends ServiceMonitor {
  private static determineEndpoint(props: PrometheusServiceMonitorProps): ServiceMonitorSpecEndpoints {
    if (props.port) {
      return {
        port: props.port,
      };
    }
    if (props.targetPort) {
      return {
        targetPort: ServiceMonitorSpecEndpointsTargetPort.fromNumber(props.targetPort),
      };
    }

    if (props.service) {
      for (const port of props.service.ports) {
        if (port.name === 'metrics') {
          return {
            port: port.name,
          };
        }
        if (port.port == 9090) {
          if (port.name) {
            return {
              port: port.name,
            };
          }
          return {
            targetPort: ServiceMonitorSpecEndpointsTargetPort.fromNumber(port.port),
          };
        }
      }
    }

    throw new Error('Unable to determine endpoint for service monitor');
  }

  constructor(scope: Construct, name: string, props: PrometheusServiceMonitorProps) {

    const serviceMonitorProps: ServiceMonitorProps = {
      spec: {
        selector: {
          matchLabels: {
            ...props.matchLabel,
          },
        },
        endpoints: [
          PrometheusServiceMonitor.determineEndpoint(props),
        ],
      },
    };

    super(scope, name, serviceMonitorProps);
  }
}