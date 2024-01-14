import { App } from "cdk8s";
import { ServiceType } from "cdk8s-plus-27";
import { AudioBookshelfChart } from "./charts/audiobookshelf";
import { JellyfinChart } from "./charts/jellyfin";
import { YarrgChart } from "./charts/yarrg";

const app = new App();

new JellyfinChart(app, "jellyfin", {
  createNamespace: true,
  namespace: "jellyfin",
  imageTag: "10.7.0",
  configStorage: {
    storageClassName: "ceph-block",
  },
  cacheStorage: {
    storageClassName: "ceph-block",
  },
  mediaShares: [],
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

app.synth();
