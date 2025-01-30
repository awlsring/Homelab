import { ServiceType, Volume } from "cdk8s-plus-31";
import { Construct } from "constructs";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
import { Radarr } from "../../constructs/applications/radarr";
import { Sonarr } from "../../constructs/applications/sonarr";
import { Lidarr } from "../../constructs/applications/lidarr";
import { Readarr } from "../../constructs/applications/readarr";
import { Bazarr } from "../../constructs/applications/bazarr";
import { Prowlarr } from "../../constructs/applications/prowlarr";

export interface AppOptions {
  readonly dnsName: string;
  readonly imageTag?: string;
  readonly serviceType?: ServiceType;
}

export interface ArrAppOptions extends AppOptions {
  readonly metrics?: boolean;
}

export interface YarrgChartProps extends HomelabChartProps {
  readonly storageClass: string;
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
        imageTag: props.radarr.imageTag,
        config: {
          storageClass: props.storageClass,
        },
        storage: {
          media: mediaMount,
        },
        ingress: {
          ingressClass: props.ingress.ingressClass,
          hostname: props.radarr.dnsName,
          type: props.radarr.serviceType,
          certIssuer: props.ingress.certIssuer,
        },
        metrics: this.makeMetricsField("radarr", props.radarr.metrics),
      });
    }

    if (props.sonarr) {
      new Sonarr(this, "sonarr", {
        imageTag: props.sonarr.imageTag,
        config: {
          storageClass: props.storageClass,
        },
        storage: {
          media: mediaMount,
        },
        ingress: {
          ingressClass: props.ingress.ingressClass,
          hostname: props.sonarr.dnsName,
          type: props.sonarr.serviceType,
          certIssuer: props.ingress.certIssuer,
        },
        metrics: this.makeMetricsField("sonarr", props.sonarr.metrics),
      });
    }

    if (props.lidarr) {
      new Lidarr(this, "lidarr", {
        imageTag: props.lidarr.imageTag,
        config: {
          storageClass: props.storageClass,
        },
        storage: {
          media: mediaMount,
        },
        ingress: {
          ingressClass: props.ingress.ingressClass,
          hostname: props.lidarr.dnsName,
          type: props.lidarr.serviceType,
          certIssuer: props.ingress.certIssuer,
        },
        metrics: this.makeMetricsField("lidarr", props.lidarr.metrics),
      });
    }

    if (props.readarr) {
      new Readarr(this, "readarr", {
        imageTag: props.readarr.imageTag,
        config: {
          storageClass: props.storageClass,
        },
        storage: {
          media: mediaMount,
        },
        ingress: {
          ingressClass: props.ingress.ingressClass,
          hostname: props.readarr.dnsName,
          type: props.readarr.serviceType,
          certIssuer: props.ingress.certIssuer,
        },
        metrics: this.makeMetricsField("readarr", props.readarr.metrics),
      });
    }

    if (props.bazarr) {
      new Bazarr(this, "bazarr", {
        imageTag: props.bazarr.imageTag,
        config: {
          storageClass: props.storageClass,
        },
        storage: {
          movies: mediaMount,
        },
        ingress: {
          ingressClass: props.ingress.ingressClass,
          hostname: props.bazarr.dnsName,
          type: props.bazarr.serviceType,
          certIssuer: props.ingress.certIssuer,
        },
      });
    }

    if (props.prowlarr) {
      new Prowlarr(this, "prowlarr", {
        imageTag: props.prowlarr.imageTag,
        config: {
          storageClass: props.storageClass,
        },
        ingress: {
          ingressClass: props.ingress.ingressClass,
          hostname: props.prowlarr.dnsName,
          type: props.prowlarr.serviceType,
          certIssuer: props.ingress.certIssuer,
        },
        metrics: this.makeMetricsField("prowlarr", props.prowlarr.metrics),
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
