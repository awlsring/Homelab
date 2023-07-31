import * as path from 'path';
import { App } from "cdktf";
import { ReadMachinesFromYAML } from "./meta/homelab-machine";
import { Memory, StorageSize } from "./constructs/proxmox/enums";
import { OnepasswordSecretsProviderModule } from "./constructs/secret-provider/onepassword-secret-provider";
import { K3SClusterStack } from "./stacks/proxmox/k3s-cluster";
import { ProxmoxNodeConfigurationStack, ProxmoxNodeConfigurationStackProps } from './stacks/proxmox/node-configuration';
import { ProxmoxStorageConfigurationStack } from './stacks/proxmox/storage-config';
import { ZFSRaidLevel } from '@awlsring/cdktf-proxmox';
import { StorageBackupStack } from './stacks/storage-backup';
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
  secretProvider: OnepasswordSecretsProviderModule({
    url: onepasswordUrl,
    token: onepasswordToken,
    vault: 'Homelab',
  })
}

const standardProps = {
  ...projectsProps,
  ...providerProps,
}

const proxmoxProps = {
  ...standardProps,
  proxmox: {
    endpoint: "https://10.0.10.11:8006",
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

  let interfaces: string[]
  switch (n.name) {
    case "ravnica":
      interfaces = ["enp9s0f0"]
      break;
    case "dominaria":
      interfaces = ["enp7s0f0"]
      break;
    default:
      throw new Error(`No interface for ${n.name}`)
  }

  const commonProps = {
    ...proxmoxProps,
    network: {
      bridge: "vmbr1",
      interfaces: interfaces
    },
  }

  let props: ProxmoxNodeConfigurationStackProps;
  if (n.name === "ravnica") {
    props = {
      ...commonProps,
      node: n.name,
      storage: {
        name: VM_STORAGE_CLASS,
        disks: n.disks.nvme.map(d => `/dev/${d.device}`),
        raidLevel: ZFSRaidLevel.SINGLE,
      },
    }
  } else {
    props = {
      ...commonProps,
      node: n.name,
    }
  }

  new ProxmoxNodeConfigurationStack(app, `proxmox-${n.name}-config`, props)
})

new K3SClusterStack(app, "k3s-cluster", {
  ...proxmoxProps,
  nodes: [
    {
      name: "ravnica",
      template: "ubuntu-jammy-template",
      bridge: "vmbr1",
      controlNodes: 2,
      workerNodes: 2,
      storage: VM_STORAGE_CLASS,
      controlStartingIp: "10.0.100.110",
      workerStartingIp: "10.0.100.120",
    },
    {
      name: "dominaria",
      template: "ubuntu-jammy-template",
      bridge: "vmbr1",
      controlNodes: 1,
      workerNodes: 1,
      storage: "dom-pool-1",
      controlStartingIp: "10.0.100.115",
      workerStartingIp: "10.0.100.125",
    },
  ],
  gateway: "10.0.100.1",
  vlan: 100,
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
  },
  workerConfig: {
    cpus: 4,
    memory: Memory.GB_16,
    diskSize: StorageSize.GB_200,
    tags: ["worker"],
    baseId: 5000,
  }
})

new StorageBackupStack(app, "storage-backup", {
  ...standardProps,
  secretName: "backblaze-tf-key",
})

app.synth();
