import { App } from "cdk8s";
import { EnshroudedChart } from "../charts/applications/enshrouded";
import { PalworldChart } from "../charts/applications/palworld";
import { ValheimChart } from "../charts/applications/valheim";

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

  new ValheimChart(app, "valheim", {
    createNamespace: true,
    namespace: "valheim",
    secretStore: "onepassword-secret-store",
    configPersistence: {
      storageClass: "ceph-block",
    },
    serverPersistence: {
      storageClass: "ceph-block",
    },
    serverName: "Drig Town USA",
  });

  new ValheimChart(app, "valheim-old", {
    namespace: "valheim",
    secretStore: "onepassword-secret-store",
    configPersistence: {
      storageClass: "ceph-block",
    },
    serverPersistence: {
      storageClass: "ceph-block",
    },
    serverName: "Drig Town USA",
  });

  new EnshroudedChart(app, "enshrouded", {
    createNamespace: true,
    secretStore: "onepassword-secret-store",
    namespace: "enshrouded",
    serverPersistence: {
      storageClass: "ceph-block",
    },
    serverName: "Drigtopia",
  });
}
