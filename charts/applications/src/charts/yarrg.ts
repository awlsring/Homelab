import {
  HomelabChart,
  HomelabChartProps,
  MetricOptions,
  Radarr,
} from "cdk8s-constructs";
import { Volume } from "cdk8s-plus-27";
import { Construct } from "constructs";

export interface ArrAppOptions {
  readonly imageTag?: string;
  readonly metrics?: boolean;
  readonly hostname: string;
}

export interface YarrgChartProps extends HomelabChartProps {
  readonly ingress: {
    readonly ingressClass: string;
    readonly certIssuer: string;
  };
  readonly radarr?: ArrAppOptions;
  readonly mediaStorage: {
    readonly server: string;
    readonly serverPath: string;
    readonly mountPath: string;
  };
}

/**
 * A stack to deploy server arr charts
 */
export class YarrgChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: YarrgChartProps) {
    super(scope, name, props);

    const mediaVol = Volume.fromNfs(this, "nfs-vol", "media", {
      server: props.mediaStorage.server,
      path: props.mediaStorage.serverPath,
    });

    if (props.radarr) {
      let metrics: MetricOptions | undefined = undefined;
      if (props.radarr.metrics) {
        metrics = {
          application: "radarr",
          prometheusRule: true,
        };
      }
      new Radarr(this, "radarr", {
        config: {
          storageClass: "ceph-block",
        },
        storage: {
          media: mediaVol,
        },
        ingress: {
          ingressClass: props.ingress.ingressClass,
          hostname: props.radarr.hostname,
          certIssuer: props.ingress.certIssuer,
        },
        metrics: metrics,
      });
    }
  }
}
