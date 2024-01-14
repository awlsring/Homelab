import {
  HomelabChart,
  HomelabChartProps,
  Lidarr,
  Bazarr,
  Radarr,
  Readarr,
  Sonarr,
  Prowlarr,
  Requesterr,
  ResilioSync,
} from "cdk8s-constructs";
import { Volume } from "cdk8s-plus-27";
import { Construct } from "constructs";

export interface AppOptions {
  readonly hostname: string;
  readonly imageTag?: string;
}

export interface ArrAppOptions extends AppOptions {
  readonly metrics?: boolean;
}

export interface YarrgChartProps extends HomelabChartProps {
  readonly ingress: {
    readonly ingressClass: string;
    readonly certIssuer: string;
  };
  readonly radarr?: ArrAppOptions;
  readonly sonarr?: ArrAppOptions;
  readonly lidarr?: ArrAppOptions;
  readonly readarr?: ArrAppOptions;
  readonly bazarr?: AppOptions;
  readonly prowlarr?: ArrAppOptions;
  readonly requesterr?: AppOptions;
  readonly resillio?: AppOptions;
  readonly mediaStorage: {
    readonly server: string;
    readonly serverPath: string;
    readonly mountPath: string;
  };
}

/**
 * A stack to deploy server arr charts and resillio for syncing
 */
export class YarrgChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: YarrgChartProps) {
    super(scope, name, props);

    const mediaVol = Volume.fromNfs(this, "nfs-vol", "media", {
      server: props.mediaStorage.server,
      path: props.mediaStorage.serverPath,
    });
    const mediaMount = {
      volume: mediaVol,
      path: "/media",
    };

    if (props.radarr) {
      new Radarr(this, "radarr", {
        config: {
          storageClass: "ceph-block",
        },
        storage: {
          media: mediaMount,
        },
        ingress: {
          ingressClass: props.ingress.ingressClass,
          hostname: props.radarr.hostname,
          certIssuer: props.ingress.certIssuer,
        },
        metrics: this.makeMetricsField("radarr", props.radarr.metrics),
      });
    }

    if (props.sonarr) {
      new Sonarr(this, "sonarr", {
        config: {
          storageClass: "ceph-block",
        },
        storage: {
          media: mediaMount,
        },
        ingress: {
          ingressClass: props.ingress.ingressClass,
          hostname: props.sonarr.hostname,
          certIssuer: props.ingress.certIssuer,
        },
        metrics: this.makeMetricsField("sonarr", props.sonarr.metrics),
      });
    }

    if (props.lidarr) {
      new Lidarr(this, "lidarr", {
        config: {
          storageClass: "ceph-block",
        },
        storage: {
          media: mediaMount,
        },
        ingress: {
          ingressClass: props.ingress.ingressClass,
          hostname: props.lidarr.hostname,
          certIssuer: props.ingress.certIssuer,
        },
        metrics: this.makeMetricsField("lidarr", props.lidarr.metrics),
      });
    }

    if (props.readarr) {
      new Readarr(this, "readarr", {
        config: {
          storageClass: "ceph-block",
        },
        storage: {
          media: mediaMount,
        },
        ingress: {
          ingressClass: props.ingress.ingressClass,
          hostname: props.readarr.hostname,
          certIssuer: props.ingress.certIssuer,
        },
        metrics: this.makeMetricsField("readarr", props.readarr.metrics),
      });
    }

    if (props.bazarr) {
      new Bazarr(this, "bazarr", {
        config: {
          storageClass: "ceph-block",
        },
        storage: {
          movies: mediaMount,
        },
        ingress: {
          ingressClass: props.ingress.ingressClass,
          hostname: props.bazarr.hostname,
          certIssuer: props.ingress.certIssuer,
        },
      });
    }

    if (props.prowlarr) {
      new Prowlarr(this, "prowlarr", {
        config: {
          storageClass: "ceph-block",
        },
        ingress: {
          ingressClass: props.ingress.ingressClass,
          hostname: props.prowlarr.hostname,
          certIssuer: props.ingress.certIssuer,
        },
        metrics: this.makeMetricsField("prowlarr", props.prowlarr.metrics),
      });
    }

    if (props.requesterr) {
      new Requesterr(this, "requesterr", {
        config: {
          storageClass: "ceph-block",
        },
        ingress: {
          ingressClass: props.ingress.ingressClass,
          hostname: props.requesterr.hostname,
          certIssuer: props.ingress.certIssuer,
        },
      });
    }

    if (props.resillio) {
      new ResilioSync(this, "resillio", {
        storage: {
          config: {
            storageClass: "ceph-block",
          },
          sync: mediaVol,
        },
        ingress: {
          ingressClass: props.ingress.ingressClass,
          hostname: props.resillio.hostname,
          certIssuer: props.ingress.certIssuer,
        },
      });
    }
  }

  private makeMetricsField(name: string, metrics?: boolean) {
    if (metrics) {
      return {
        application: name,
        prometheusRule: true,
      };
    }
    return undefined;
  }
}
