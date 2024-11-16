import { App, Size } from "cdk8s";
import {
  GatusAlertType,
  GatusConditions,
  GatusEndpoint,
} from "cdk8s-constructs";
import { ServiceType } from "cdk8s-plus-27";
import { AudioBookshelfChart } from "../charts/applications/audiobookshelf";
import { BlueskyPdsChart } from "../charts/applications/bluesky-pds";
import { GatusChart } from "../charts/applications/gatus";
import { ImmichChart } from "../charts/applications/immich";
import { JellyfinChart } from "../charts/applications/jellyfin";
import { TandoorChart } from "../charts/applications/tandoor";
import { TerraformBackendChart } from "../charts/applications/terraform-backend";
import { TPLinkPlugExporterChart } from "../charts/applications/tplink-plug-exporter";
import { YarrgChart } from "../charts/applications/yarrg";

const NAS_ADDRESS = "10.0.10.180";

export function assignApplicationsCharts(app: App) {
  new JellyfinChart(app, "jellyfin", {
    createNamespace: true,
    namespace: "jellyfin",
    imageTag: "10.8.13",
    ingress: {
      ingressClass: "nginx",
      hostname: "fin.us-drig-1.drigs.org",
      certIssuer: "prod",
    },
    storage: {
      size: Size.gibibytes(30),
      storageClassName: "ceph-block",
    },
    mediaShares: [
      {
        name: "media",
        server: NAS_ADDRESS,
        serverPath: "/mnt/WD-6D-8T/fin",
        mountPath: "/media",
      },
    ],
    tunnel: {
      email: "admin@drigs.org",
      domain: "drigs.org",
      cloudflareSecret: "cloudflare-secrets",
      accountId: "5838eb1235ebfbff425cfca5e3db9062",
      fqdn: "fin.drigs.org",
    },
  });

  new AudioBookshelfChart(app, "audiobookshelf", {
    createNamespace: true,
    namespace: "audiobookshelf",
    imageTag: "2.7.1",
    configStorage: {
      storageClassName: "ceph-block",
    },
    metadataStorage: {
      storageClassName: "ceph-block",
    },
    mediaStorage: {
      server: NAS_ADDRESS,
      serverPath: "/mnt/WD-6D-8T/fin",
      mountPath: "/media",
    },
    ingress: {
      ingressClass: "nginx",
      type: ServiceType.LOAD_BALANCER,
      hostname: "audiobookshelf.us-drig-1.drigs.org",
      certIssuer: "prod",
    },
  });

  new YarrgChart(app, "yarrg", {
    createNamespace: true,
    namespace: "yarrg",
    ingress: {
      ingressClass: "nginx",
      certIssuer: "prod",
    },
    radarr: {
      hostname: "radarr.us-drig-1.drigs.org",
    },
    sonarr: {
      hostname: "sonarr.us-drig-1.drigs.org",
    },
    lidarr: {
      hostname: "lidarr.us-drig-1.drigs.org",
    },
    readarr: {
      hostname: "readarr.us-drig-1.drigs.org",
    },
    bazarr: {
      hostname: "bazarr.us-drig-1.drigs.org",
    },
    prowlarr: {
      hostname: "prowlarr.us-drig-1.drigs.org",
    },
    requesterr: {
      hostname: "requesterr.us-drig-1.drigs.org",
    },
    mediaStorage: {
      server: NAS_ADDRESS,
      serverPath: "/mnt/WD-6D-8T/fin",
      mountPath: "/media",
    },
  });

  new ImmichChart(app, "immich", {
    createNamespace: true,
    namespace: "immich",
    uploadStorage: {
      server: NAS_ADDRESS,
      serverPath: "/mnt/WD-6D-8T/immich-uploads",
    },
    externalCollections: [
      {
        server: NAS_ADDRESS,
        serverPath: "/mnt/WD-6D-8T/photos",
        name: "photos",
      },
    ],
    ingress: {
      ingressClass: "nginx",
      hostname: "immich.us-drig-1.drigs.org",
      certIssuer: "prod",
      type: ServiceType.LOAD_BALANCER,
    },
    database: {
      username: "immich",
      passwordSecret: "immich-database-password",
      database: "immich",
      storageClass: "ceph-block",
    },
    machineLearning: {
      cache: {
        storageClass: "ceph-block",
      },
    },
  });

  new TerraformBackendChart(app, "terraform-backend", {
    createNamespace: true,
    namespace: "terraform-backend",
    instances: 2,
    storage: {
      storageClass: "ceph-block",
      size: Size.gibibytes(1),
    },
  });

  new TandoorChart(app, "tandoor", {
    createNamespace: true,
    namespace: "tandoor",
    secretStore: "onepassword-secret-store",
    storage: {
      staticFiles: {
        storageClass: "ceph-block",
      },
      mediaFiles: {
        storageClass: "ceph-block",
      },
    },
    ingress: {
      ingressClass: "nginx",
      hostname: "tandoor.us-drig-1.drigs.org",
      certIssuer: "prod",
    },
  });

  new BlueskyPdsChart(app, "bluesky-pds", {
    createNamespace: true,
    namespace: "bluesky-pds",
    imageTag: "0.4",
    hostname: "at.drigs.org",
    secretStore: "onepassword-secret-store",
    storage: {
      size: Size.gibibytes(10),
      storageClass: "ceph-block",
    },
    objectStorage: {
      bucketName: "pds-drigs-blobs",
      region: "us-east-005",
      endpoint: "https://s3.us-east-005.backblazeb2.com",
      forcePathStyle: true,
    },
    tunnel: {
      email: "admin@drigs.org",
      domain: "drigs.org",
      cloudflareSecret: "cloudflare-secrets",
      accountId: "5838eb1235ebfbff425cfca5e3db9062",
      fqdn: "at.drigs.org",
    },
  });

  new GatusChart(app, "gatus", {
    createNamespace: true,
    namespace: "gatus",
    secretStore: "onepassword-secret-store",
    endpoints: [
      new GatusEndpoint({
        name: "Audiobookshelf",
        group: "media - internal",
        url: "https://audiobookshelf.us-drig-1.drigs.org",
        conditions: [GatusConditions.HTTP_STATUS_2XX],
        alerts: [{ type: GatusAlertType.DISCORD }],
      }),
      new GatusEndpoint({
        name: "Jellyfin",
        group: "media - internal",
        url: "https://fin.us-drig-1.drigs.org/health",
        conditions: [GatusConditions.HTTP_STATUS_2XX],
        alerts: [{ type: GatusAlertType.DISCORD }],
      }),
      new GatusEndpoint({
        name: "Immich",
        group: "media - internal",
        url: "https://immich.us-drig-1.drigs.org",
        conditions: [GatusConditions.HTTP_STATUS_2XX],
        alerts: [{ type: GatusAlertType.DISCORD }],
      }),
      new GatusEndpoint({
        name: "Radarr",
        group: "yarrg",
        url: "https://radarr.us-drig-1.drigs.org",
        conditions: [GatusConditions.HTTP_STATUS_2XX],
        alerts: [{ type: GatusAlertType.DISCORD }],
      }),
      new GatusEndpoint({
        name: "Sonarr",
        group: "yarrg",
        url: "https://sonarr.us-drig-1.drigs.org",
        conditions: [GatusConditions.HTTP_STATUS_2XX],
        alerts: [{ type: GatusAlertType.DISCORD }],
      }),
      new GatusEndpoint({
        name: "lidarr",
        group: "yarrg",
        url: "https://lidarr.us-drig-1.drigs.org",
        conditions: [GatusConditions.HTTP_STATUS_2XX],
        alerts: [{ type: GatusAlertType.DISCORD }],
      }),
      new GatusEndpoint({
        name: "Readarr",
        group: "yarrg",
        url: "https://readarr.us-drig-1.drigs.org",
        conditions: [GatusConditions.HTTP_STATUS_2XX],
        alerts: [{ type: GatusAlertType.DISCORD }],
      }),
      new GatusEndpoint({
        name: "Bazarr",
        group: "yarrg",
        url: "https://bazarr.us-drig-1.drigs.org",
        conditions: [GatusConditions.HTTP_STATUS_2XX],
        alerts: [{ type: GatusAlertType.DISCORD }],
      }),
      new GatusEndpoint({
        name: "prowlarr",
        group: "yarrg",
        url: "https://prowlarr.us-drig-1.drigs.org",
        conditions: [GatusConditions.HTTP_STATUS_2XX],
        alerts: [{ type: GatusAlertType.DISCORD }],
      }),
      new GatusEndpoint({
        name: "Requesterr",
        group: "yarrg",
        url: "https://requesterr.us-drig-1.drigs.org",
        conditions: [GatusConditions.HTTP_STATUS_2XX],
        alerts: [{ type: GatusAlertType.DISCORD }],
      }),
      new GatusEndpoint({
        name: "Syncthing",
        group: "yarrg",
        url: "http://10.0.10.9:8384/rest/noauth/health",
        conditions: [GatusConditions.HTTP_STATUS_2XX],
        alerts: [{ type: GatusAlertType.DISCORD }],
      }),
      new GatusEndpoint({
        name: "Tandoor",
        group: "internal",
        url: "https://tandoor.us-drig-1.drigs.org",
        conditions: [GatusConditions.HTTP_STATUS_2XX],
        alerts: [{ type: GatusAlertType.DISCORD }],
      }),
      new GatusEndpoint({
        name: "Bluesky PDS",
        group: "external",
        url: "https://at.drigs.org",
        conditions: [GatusConditions.HTTP_STATUS_2XX],
        alerts: [{ type: GatusAlertType.DISCORD }],
      }),
      new GatusEndpoint({
        name: "Fin",
        group: "external",
        url: "https://fin.drigs.org",
        conditions: [GatusConditions.HTTP_STATUS_2XX],
        alerts: [{ type: GatusAlertType.DISCORD }],
      }),
    ],
    ingress: {
      ingressClass: "nginx",
      hostname: "gatus.us-drig-1.drigs.org",
      certIssuer: "prod",
    },
  });

  new TPLinkPlugExporterChart(app, "tplink-plug-exporter", {
    createNamespace: true,
    namespace: "tplink-plug-exporter",
  });
}
