import { ApiObject, Duration } from "cdk8s";
import { Construct } from "constructs";
import {
  ServiceMonitor as RawServiceMonitor,
  ServiceMonitorSpecEndpoints,
  ServiceMonitorSpecEndpointsMetricRelabelingsAction,
  ServiceMonitorSpecEndpointsRelabelingsAction,
  ServiceMonitorSpecEndpointsTargetPort,
} from "../../imports/monitoring.coreos.com";
import { DurationToString } from "../kube/conversion";

export enum RelabelingAction {
  REPLACE = "replace",
  KEEP = "keep",
  DROP = "drop",
  HASHMOD = "hashmod",
  LABELMAP = "labelmap",
  LABELDROP = "labeldrop",
  LABELKEEP = "labelkeep",
  LOWERCASE = "lowercase",
  UPPERCASE = "uppercase",
  KEEPEQUAL = "keepequal",
  DROPEQUAL = "dropequal",
}

export interface Relabeling {
  readonly action?: RelabelingAction;
  readonly modulus?: number;
  readonly regex?: string;
  readonly replacement?: string;
  readonly separator?: string;
  readonly sourceLabels?: string[];
  readonly targetLabel?: string;
}

export interface ServiceMonitorEndpoint {
  readonly port: string;
  readonly interval?: Duration;
  readonly relabelings?: Relabeling[];
  readonly metricRelabelings?: Relabeling[];
  readonly params?: { [key: string]: string[] };
  readonly path?: string;
  readonly proxyUrl?: string;
  readonly scrapeTimeout?: Duration;
  readonly targetPort?: string;
  readonly trackTimestampsStaleness?: boolean;
}

export interface ServiceMonitorProps {
  readonly matchLabels: Record<string, string>;
  readonly endpoints: ServiceMonitorEndpoint[];
}

function endpointToRaw(
  endpoint: ServiceMonitorEndpoint,
): ServiceMonitorSpecEndpoints {
  return {
    ...endpoint,
    targetPort: endpoint.targetPort
      ? ServiceMonitorSpecEndpointsTargetPort.fromString(endpoint.targetPort)
      : undefined,
    interval: endpoint.interval
      ? DurationToString(endpoint.interval)
      : undefined,
    scrapeTimeout: endpoint.scrapeTimeout
      ? DurationToString(endpoint.scrapeTimeout)
      : undefined,
    relabelings: endpoint.relabelings?.map((relabeling) => ({
      ...relabeling,
      action: relabeling.action
        ? (relabeling.action as unknown as ServiceMonitorSpecEndpointsRelabelingsAction)
        : undefined,
    })),
    metricRelabelings: endpoint.metricRelabelings?.map((relabeling) => {
      return {
        action: relabeling.action
          ? (relabeling.action as unknown as ServiceMonitorSpecEndpointsMetricRelabelingsAction)
          : undefined,
        modulus: relabeling.modulus,
        regex: relabeling.regex,
        replacement: relabeling.replacement,
        separator: relabeling.separator,
        sourceLabels: relabeling.sourceLabels,
        targetLabel: relabeling.targetLabel,
      };
    }),
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
        endpoints: props.endpoints.map((e) => endpointToRaw(e)),
      },
    });
  }
}
