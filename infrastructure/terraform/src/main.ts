import * as path from 'path';
import { App } from "cdktf";
import { ReadMachinesFromYAML } from "./meta/homelab-machine";
import { DataStoreStack } from "./stacks/data-store";
import { OnePasswordStack } from "./stacks/onepassword";
import { Memory, StorageSize } from "./constructs/proxmox/enums";
import { CreateOnepasswordSecretsProvider } from "./constructs/secret-provider/onepassword-secret-provider";
import { K3SClusterStack } from "./stacks/proxmox/k3s-cluster";
import { ProxmoxNodeConfigurationStack } from './stacks/proxmox/node-configuration';
import { ProxmoxStorageConfigurationStack } from './stacks/proxmox/storage-config';
import { ZFSRaidLevel } from '@awlsring/cdktf-proxmox';
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

const projectsProps = {
  project: "homelab",
  backend: {
    address: "https://tf-backend.awlsring-sea.drigs.org",
    username: backendUser,
    password: backendPassword,
  },
}

const providerProps = {
  secretProvider: {
    create: CreateOnepasswordSecretsProvider,
    params: {
      url: onepasswordUrl,
      token: onepasswordToken,
      vault: 'Homelab',
    },
  }
}

const standardProps = {
  ...providerProps,
  ...projectsProps,
}

const onePassword = new OnePasswordStack(app, "onepassword", {
  url: onepasswordUrl,
  token: onepasswordToken,
  ...providerProps,
  ...projectsProps,
})

const datastore = new DataStoreStack(app, "datastore", {
  url: "http://10.0.10.150/api/v2.0",
  secretName: 'truenas-token',
  ...projectsProps,
  ...providerProps,
})
datastore.addDependency(onePassword)

const proxmoxProps = {
  ...standardProps,
  proxmox: {
    endpoint: "https://10.0.10.10:8006",
    userSecret: "proxmox-login"
  },
}

const VM_STORAGE_CLASS = "nvme-qemu-pool";
new ProxmoxStorageConfigurationStack(app, "proxmox-storage", {
  ...proxmoxProps,
  vmStorage: {
    name: VM_STORAGE_CLASS,
    pool: VM_STORAGE_CLASS,
    nodes: ["ravnica"],
  }
})

proxmoxMachines.forEach(n => {
  if (!n.disks.nvme) {
    throw new Error(`Machine ${n.name} has no nvme disk`)
  }
  new ProxmoxNodeConfigurationStack(app, `proxmox-${n.name}-config`, {
    ...proxmoxProps,
    node: n.name,
    storage: {
      name: VM_STORAGE_CLASS,
      disks: n.disks.nvme.map(d => `/dev/${d.device}`),
      raidLevel: ZFSRaidLevel.SINGLE,
    },
    network: {
      bridge: "vmbr1",
      bond: "bond0",
      interfaces: n.nics.filter(n => n.name.includes("s0f")).map(n => n.name), // hacky way to get the interfaces on pcie card
    },
  })
})

new K3SClusterStack(app, "k3s-cluster", {
  ...proxmoxProps,
  nodes: [
    {
      name: "ravnica",
      template: "ubuntu-jammy-template",
      bridge: "vmbr1",
      controlNodes: 1,
      workerNodes: 2,
      storage: VM_STORAGE_CLASS
    },
  ],
  gateway: "10.0.100.1",
  cloudInit: {
    user: "awlsring",
    sshKeys: ["ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDKBk8jY0K2Vnr2Jcobao0aoYGAyRzUhDbAEjU1JLq47/Azmy/rDOMaX2EEineisEY4gwrDRt2RF2jeb+/bb2oG0LbqypXiWdXHp6FZcQS9ZV9Udurew2WotP7UtTx+VhOoO1Kc2stw1Qw7GFmMNO8FvSotGh+iD/gNvZKTDXNZDK2rNoyvRpij/lNFseF/ir+Pu3DIToAQMGiFi4ApfFGHk68nkpfR8UikI9C0uWkcQwVO4aTOJXRImAitASZ/otmaOfstE79KBNNL7OiIa2nHwvkA8Z7UW8i34WZsY/AG6lZUvX+0ACaCThQgy73YRy3GC1cV4wvCnxA+BtxvYw982WsEvcSv72E/11ii8hq7czlRb4Y9WnnxfG4IB9NesHqsolvHR3nS6KocHMX/Asa6Q09XD0AQYDQiX/7bOq2oSdA5rPjNYNJH5AGowkBZUAglj35u3xx4t3x2CPJza+mBksbejQDCfFL68zh3Occ+AlT1yksqm4xaUgHYU65Aehk= Mac Key"],
    nameserver: "10.10.10.10",
    domain: "awlsring-sea.drigs.org",
  },
  controlConfig: {
    cpus: 2,
    memory: Memory.GB_8,
    diskSize: StorageSize.GB_30,
    tags: ["control"],
    baseId: 4000,
    startingIp: "10.0.100.110"
  },
  workerConfig: {
    cpus: 4,
    memory: Memory.GB_16,
    diskSize: StorageSize.GB_200,
    tags: ["worker"],
    baseId: 5000,
    startingIp: "10.0.100.120"
  }
})

app.synth();
