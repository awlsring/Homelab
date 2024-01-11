import { App } from "cdk8s";
import { ServiceType } from "cdk8s-plus-27";
import { AudioBookshelfChart } from "./charts/audiobookshelf";

const app = new App();

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
app.synth();
