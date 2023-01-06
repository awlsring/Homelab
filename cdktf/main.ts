import { App } from "cdktf";
import { ClusterStack } from "./lib/stacks/k3s-cluster";
require('dotenv').config()

const app = new App();

const tokenSecret = process.env.PROXMOX_TOKEN_SECRET
const tokenId = process.env.PROXMOX_TOKEN_ID

if (!tokenSecret || !tokenId) {
  throw new Error("Missing token secret or id")
}

new ClusterStack(app, "k3sCluster", {
  proxmox: {
    url: "https://10.0.10.11:8006/api2/json",
    tokenId: tokenId,
    tokenSecret: tokenSecret,
  },
  nodes: [
    {
      name: "dominaria",
      bridge: "vmbr0",
      pool: "dom-pool-1",
      controlAmount: 1,
      workerAmount: 1,
    },
  ],
  baseIpSuffix: 100,
  gateway: "10.0.100.1",
  template: "ubuntu-jammy-template",
  clusterPrefix: "k3s",
  clusterVmBaseId: 3000,
})

app.synth();
