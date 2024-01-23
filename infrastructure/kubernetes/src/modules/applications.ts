import { App, Size } from "cdk8s";
import { ServiceType } from "cdk8s-plus-27";
import { AudioBookshelfChart } from "../charts/applications/audiobookshelf";
import { ImmichChart } from "../charts/applications/immich";
import { JellyfinChart } from "../charts/applications/jellyfin";
import { TerraformBackendChart } from "../charts/applications/terraform-backend";
import { YarrgChart } from "../charts/applications/yarrg";

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
    configStorage: {
      storageClassName: "ceph-block",
    },
    cacheStorage: {
      storageClassName: "ceph-block",
    },
    mediaShares: [
      {
        name: "media",
        server: "10.0.10.180",
        serverPath: "/mnt/WD-6D-8T/fin",
        mountPath: "/media",
      },
    ],
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
      server: "10.0.100.149",
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
    resillio: {
      hostname: "resillio.us-drig-1.drigs.org",
    },
    mediaStorage: {
      server: "10.0.100.149",
      serverPath: "/mnt/WD-6D-8T/fin",
      mountPath: "/media",
    },
  });

  new ImmichChart(app, "immich", {
    createNamespace: true,
    namespace: "immich",
    uploadStorage: {
      server: "10.0.10.180",
      serverPath: "/mnt/WD-6D-8T/immich-uploads",
    },
    externalCollections: [
      {
        server: "10.0.10.180",
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
}
