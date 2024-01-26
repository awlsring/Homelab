import { App } from "cdk8s";
import { PalworldChart } from "../charts/applications/palworld";

export function assignGameServerCharts(app: App) {
  new PalworldChart(app, "palworld", {
    createNamespace: true,
    namespace: "palworld",
    secretStore: "onepassword-secret-store",
    serverData: {
      storageClass: "ceph-block",
    },
    serverName: "Drig Town USA",
    players: 10,
  });
}
