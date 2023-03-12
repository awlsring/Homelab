import { App } from "cdktf";
import { ReadMachinesFromYAML } from "./meta/homelab-machine";
import { DataStoreStack } from "./stacks/data-store";
import { ClusterStack, NodeProps } from "./stacks/k3s-cluster_old";
import { OnePasswordStack } from "./stacks/onepassword";
import * as path from 'path';
import { ReadNodesFromYAML } from "./proxmox/cluster-node";
import { Memory, StorageSize } from "./proxmox/enums";
import { CreateOnepasswordSecretsProvider } from "./constructs/secret-provider/onepassword-secret-provider";
import { K3SClusterStack } from "./stacks/k3s-cluster";
require('dotenv').config()

const app = new App();

const machines = ReadMachinesFromYAML(path.join(__dirname, "../meta/machines.yaml"));
const proxmoxMachines = machines.filter(m => m.roles.includes("proxmox"));

const onepasswordUrl = process.env.ONEPASSWORD_CONNECT_URL
const onepasswordToken = process.env.ONEPASSWORD_CONNECT_TOKEN
if (!onepasswordToken || !onepasswordUrl) {
  throw new Error("Missing token url or id")
}

const backendUser = process.env.BACKEND_USER
const backendPassword = process.env.BACKEND_PASSWORD
if (!backendUser || !backendPassword) {
  throw new Error("Missing backend user or password")
}

const genericProps = {
  project: "homelab",
  backend: {
    address: "https://tf-backend.awlsring-sea.drigs.org",
    username: backendUser,
    password: backendPassword,
  },
  secretProvider: {
    create: CreateOnepasswordSecretsProvider,
    params: {
      url: onepasswordUrl,
      token: onepasswordToken,
      vault: 'Homelab',
    },
  }
}

const onePassword = new OnePasswordStack(app, "onePassword", {
  url: onepasswordUrl,
  token: onepasswordToken,
  stack: "onepassword",
  ...genericProps,
})

const clusterNodes = ReadNodesFromYAML(path.join(__dirname, "../meta/k3sCluster.yaml"))

let clusterNodeProps: NodeProps[] = [];
proxmoxMachines.forEach(m => {
  const node = clusterNodes.find(n => n.name === m.name)
  if (node) {
    clusterNodeProps.push({
      machine: m,
      bridge: node.bridge,
      controlNodeAmount: node.controlNodes,
      workerNodeAmount: node.workerNodes,
      template: node.template,
      pool: node.pool,
    })
  }
})

const k3sCluster = new ClusterStack(app, "k3sCluster", {
  proxmox: {
    url: "https://10.0.10.11:8006/api2/json",
    tokenId: onePassword.retrieveSecret("proxmox-token-id"),
    tokenSecret: onePassword.retrieveSecret("proxmox-token-secret"),
  },
  nodes: clusterNodeProps,
  machines: {
    namePrefix: "k3s",
    baseId: 3000,
    baseIp: "10.0.110",
    ssh: {
      user: "awlsring",
      publicKey: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDKBk8jY0K2Vnr2Jcobao0aoYGAyRzUhDbAEjU1JLq47/Azmy/rDOMaX2EEineisEY4gwrDRt2RF2jeb+/bb2oG0LbqypXiWdXHp6FZcQS9ZV9Udurew2WotP7UtTx+VhOoO1Kc2stw1Qw7GFmMNO8FvSotGh+iD/gNvZKTDXNZDK2rNoyvRpij/lNFseF/ir+Pu3DIToAQMGiFi4ApfFGHk68nkpfR8UikI9C0uWkcQwVO4aTOJXRImAitASZ/otmaOfstE79KBNNL7OiIa2nHwvkA8Z7UW8i34WZsY/AG6lZUvX+0ACaCThQgy73YRy3GC1cV4wvCnxA+BtxvYw982WsEvcSv72E/11ii8hq7czlRb4Y9WnnxfG4IB9NesHqsolvHR3nS6KocHMX/Asa6Q09XD0AQYDQiX/7bOq2oSdA5rPjNYNJH5AGowkBZUAglj35u3xx4t3x2CPJza+mBksbejQDCfFL68zh3Occ+AlT1yksqm4xaUgHYU65Aehk= Mac Key",
    },
    vlan: 100,
    dnsDomain: "awlsring-sea.drigs.org",
    dnsServer: "10.10.10.10",
    gateway: "10.0.100.1",
  },
  controlConfig: {
    storageSize: StorageSize.GB_30,
    memory: Memory.GB_8,
    cpus: 4,
    tags: "node_type-control;k8s_flavor-k3s",
  },
  workerConfig: {
    storageSize: StorageSize.GB_30,
    memory: Memory.GB_8,
    cpus: 4,
    tags: "node_type-worker;k8s_flavor-k3s",
  },
  stack: "k3s",
  ...genericProps,
})
k3sCluster.addDependency(onePassword)

const datastore = new DataStoreStack(app, "dataStore", {
  stack: "datastore",
  url: "http://10.0.10.150/api/v2.0",
  secretName: 'truenas-token',
  ...genericProps,
})
datastore.addDependency(onePassword)

app.synth();
