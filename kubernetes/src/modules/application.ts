import { App, Size } from "cdk8s";
import { Module } from "./modules";
import { AudioBookshelfChart } from "../charts/applications/audiobookshelf";
import { ServiceType } from "cdk8s-plus-31";
import { ImmichChart } from "../charts/applications/immich";
import { BlueskyPdsChart } from "../charts/applications/bluesky-pds";
import { TPLinkPlugExporterChart } from "../charts/applications/tplink-plug-exporter";
import { Configuration } from "../config/configuration";
import { TerraformBackendChart } from "../charts/applications/terraform-backend";
import { GatusChart } from "../charts/applications/gatus";
import {
  GatusAlertType,
  GatusConditions,
  GatusEndpoint,
} from "../constructs/applications/gatus";
import { YarrgChart } from "../charts/applications/yarrg";
import { MealieChart } from "../charts/applications/mealie";
import { SearxngChart } from "../charts/applications/searxng";
import { PocketIdChart } from "../charts/applications/pocket-id";
import { ForgejoChart } from "../charts/applications/forgejo";
import { WoodpeckerCIChart } from "../charts/applications/woodpecker-ci";
import { DawarichChart } from "../charts/applications/dawarich";

export const ONEPASSWORD_SECRET_STORE = "onepassword-secret-store";

export class ApplicationModule extends Module {
  constructor(app: App, config: Configuration) {
    super(app, config);

    new AudioBookshelfChart(app, "audiobookshelf", {
      namespace: "audiobookshelf",
      imageTag: "2.7.1",
      configStorage: {
        storageClassName: "longhorn",
      },
      metadataStorage: {
        storageClassName: "longhorn",
      },
      mediaStorage: {
        server: this.config.storage.nfs["media"].ipv4,
        serverPath: this.config.storage.nfs["media"].mountPath,
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
      namespace: "yarrg",
      storageClass: "longhorn",
      ingress: {
        ingressClass: "nginx",
        certIssuer: "prod",
      },
      radarr: {
        imageTag: "5.17.2",
        dnsName: "radarr.us-drig-1.drigs.org",
      },
      sonarr: {
        dnsName: "sonarr.us-drig-1.drigs.org",
      },
      lidarr: {
        imageTag: "2.8.2",
        dnsName: "lidarr.us-drig-1.drigs.org",
      },
      readarr: {
        imageTag: "0.4.10-develop",
        dnsName: "readarr.us-drig-1.drigs.org",
      },
      bazarr: {
        imageTag: "1.5.1",
        dnsName: "bazarr.us-drig-1.drigs.org",
      },
      prowlarr: {
        imageTag: "1.30.2",
        dnsName: "prowlarr.us-drig-1.drigs.org",
      },
      mediaStorage: {
        server: this.config.storage.nfs["media"].ipv4,
        serverPath: this.config.storage.nfs["media"].mountPath,
        mountPath: "/media",
      },
    });

    new ImmichChart(app, "immich", {
      namespace: "immich",
      secretStore: "onepassword-secret-store",
      uploadStorage: {
        server: this.config.storage.nfs["immich-uploads"].ipv4,
        serverPath: this.config.storage.nfs["immich-uploads"].mountPath,
      },
      externalCollections: [
        {
          server: this.config.storage.nfs["photos"].ipv4,
          serverPath: this.config.storage.nfs["photos"].mountPath,
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
        storageClass: "local-path",
      },
      machineLearning: {
        cache: {
          storageClass: "longhorn",
        },
      },
    });

    new BlueskyPdsChart(app, "bluesky-pds", {
      namespace: "bluesky-pds",
      imageTag: "0.4",
      hostname: "at.drigs.org",
      secretStore: "onepassword-secret-store",
      storage: {
        size: Size.gibibytes(10),
        storageClass: "longhorn",
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

    new TPLinkPlugExporterChart(app, "tplink-plug-exporter", {
      namespace: "tplink-plug-exporter",
    });

    new MealieChart(app, "mealie", {
      namespace: "mealie",
      imageTag: "v2.5.0",
      secretStore: "onepassword-secret-store",
      storage: {
        storageClass: "longhorn",
      },
      ingress: {
        ingressClass: "nginx",
        hostname: "mealie.us-drig-1.drigs.org",
        certIssuer: "prod",
      },
    });

    new SearxngChart(app, "searxng", {
      namespace: "searxng",
      imageTag: "2025.2.3-4ab7984ed",
      storageClassName: "longhorn",
      secretStore: ONEPASSWORD_SECRET_STORE,
      ingress: {
        ingressClass: "nginx",
        hostname: "search.us-drig-1.drigs.org",
        certIssuer: "prod",
      },
    });

    new PocketIdChart(app, "pocket-id", {
      namespace: "pocket-id",
      imageTag: "latest",
      secretStore: ONEPASSWORD_SECRET_STORE,
      storageClassName: "longhorn",
      ingress: {
        ingressClass: "nginx",
        hostname: "identity.us-drig-1.drigs.org",
        certIssuer: "prod",
      },
    });

    new TerraformBackendChart(app, "terraform-backend", {
      secretStore: "onepassword-secret-store",
      namespace: "terraform-backend",
      storage: {
        storageClass: "local-path",
        size: Size.gibibytes(5),
      },
    });

    new ForgejoChart(app, "forgejo", {
      namespace: "forgejo",
      createNamespace: true,
      secretStore: "onepassword-secret-store",
      storageClassName: "longhorn",
      imageTag: "10.0.0-rootless",
      ingress: {
        ingressClass: "nginx",
        hostname: "code.us-drig-1.drigs.org",
        certIssuer: "prod",
      },
    });

    new WoodpeckerCIChart(app, "woodpecker", {
      namespace: "woodpecker",
      storageClass: "longhorn",
      imageTag: "v3.0.1",
      secretStore: ONEPASSWORD_SECRET_STORE,
      allowedUsers: ["awlsring"],
      ingress: {
        ingressClass: "nginx",
        hostname: "ci.us-drig-1.drigs.org",
        certIssuer: "prod",
      },
    });

    new DawarichChart(app, "dawarich", {
      namespace: "dawarich",
      imageTag: "latest",
      secretStore: ONEPASSWORD_SECRET_STORE,
      storage: {
        storageClass: "longhorn",
      },
      ingress: {
        ingressClass: "nginx",
        hostname: "dawarich.us-drig-1.drigs.org",
        certIssuer: "prod",
      },
    });

    // TODO: auto generate this somehow
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
          url: "https://jellyfin.us-drig-1.drigs.org/health",
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
          url: "http://10.0.10.120:8384/rest/noauth/health",
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
          url: "https://jellyfin.drigs.org",
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
  }
}
