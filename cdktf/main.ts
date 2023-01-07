import { App } from "cdktf";
import { ClusterStack } from "./lib/stacks/k3s-cluster";
import { OnePasswordStack } from "./lib/stacks/onepassword";
require('dotenv').config()

const app = new App();

const onepasswordUrl = process.env.ONEPASSWORD_CONNECT_URL
const onepasswordToken = process.env.ONEPASSWORD_CONNECT_TOKEN
if (!onepasswordToken || !onepasswordUrl) {
  throw new Error("Missing token url or id")
}

const onePassword = new OnePasswordStack(app, "onePassword", {
  url: onepasswordUrl,
  token: onepasswordToken,
})

const k3sCluster = new ClusterStack(app, "k3sCluster", {
  proxmox: {
    url: "https://10.0.10.11:8006/api2/json",
    tokenId: onePassword.retrieveSecret("proxmox-token-id"),
    tokenSecret: onePassword.retrieveSecret("proxmox-token-secret"),
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
k3sCluster.addDependency(onePassword)

app.synth();
