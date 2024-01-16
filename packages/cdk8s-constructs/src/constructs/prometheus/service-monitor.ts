import { ApiObject, Duration } from "cdk8s";
import { Construct } from "constructs";
import { ServiceMonitor as RawServiceMonitor } from "../../imports/monitoring.coreos.com";
import { DurationToString } from "../kube/conversion";

export interface ServiceMonitorEndpoint {
  readonly port: string;
  readonly path: string;
  readonly interval?: Duration;
  readonly scrapeTimeout?: Duration;
}

export interface ServiceMonitorProps {
  readonly matchLabels: Record<string, string>;
  readonly endpoints: ServiceMonitorEndpoint[];
}

function endpointToRaw(endpoint: ServiceMonitorEndpoint) {
  return {
    port: endpoint.port,
    path: endpoint.path,
    interval: endpoint.interval
      ? DurationToString(endpoint.interval)
      : undefined,
    scrapeTimeout: endpoint.scrapeTimeout
      ? DurationToString(endpoint.scrapeTimeout)
      : undefined,
  };
}

export class ServiceMonitor extends Construct {
  protected readonly apiObject: ApiObject;
  constructor(scope: Construct, name: string, props: ServiceMonitorProps) {
    super(scope, name);
    this.apiObject = new RawServiceMonitor(this, `resource`, {
      spec: {
        selector: {
          matchLabels: props.matchLabels,
        },
        endpoints: props.endpoints.map(endpointToRaw),
      },
    });
  }
}
