import { Construct } from "constructs";
import { ProxmoxProvider } from "../../.gen/providers/proxmox/provider";
import { VmQemuDisk, VmQemuNetwork } from "../../.gen/providers/proxmox/vm-qemu";
import { HomelabStack, HomelabStackProps } from "../constructs/homelab-stack";
import { Memory, StorageSize } from "../proxmox/enums";
import { VMClone, VMCloneProps } from "../constructs/proxmox/vm-clone";
import { HomelabMachine } from "../meta/homelab-machine";

export interface ClusterNodeOptions {
  node: string,
  template: string,
  memory: Memory,
  cores: number,
  nics: VmQemuNetwork[]
  disks: VmQemuDisk[]
  ip?: string,
  gateway?: string
  agent?: boolean,
  sshUser?: string,
  sshKey?: string,
  tags?: string,
  dnsServer?: string,
  dnsDomain?: string,
}

export interface ProxmoxProviderProps {
  url: string;
  tokenId: string;
  tokenSecret: string;
}

export interface NodeProps {
  machine: HomelabMachine
  bridge: string;
  controlNodeAmount: number;
  workerNodeAmount: number;
  template: string;
  pool: string;
}

export interface SSHProps {
  user: string;
  publicKey: string;
}

export interface ClusterMachineConfigProps {
  namePrefix: string;
  baseIp: string;
  baseId: number;
  ssh: SSHProps;
  dnsServer: string;
  dnsDomain: string;
  gateway: string;
  vlan?: number;
}

export interface ClusterNodeProps {
  storageSize: StorageSize;
  memory: Memory;
  cpus: number;
  tags?: string;
}

export interface ClusterStackProps extends HomelabStackProps {
  proxmox: ProxmoxProviderProps;
  nodes: NodeProps[],
  machines: ClusterMachineConfigProps
  controlConfig: ClusterNodeProps;
  workerConfig: ClusterNodeProps;
}

export class ClusterStack extends HomelabStack {
  readonly controlNodes: VMClone[];
  readonly workerNodes: VMClone[];

  private buildControlNode(prefix: string, baseId: number, config: ClusterNodeOptions) {
    const cloneConfig: VMCloneProps = {
      id: this.controlNodes.length + baseId,
      name: `${prefix}-control-${this.controlNodes.length + 1}`,
      ...config,
    }
    const node = new VMClone(this, `control${this.controlNodes.length}`, cloneConfig);
    this.controlNodes.push(node);
  }

  private buildWorkerNode(prefix: string, baseId: number, config: ClusterNodeOptions) {
    const cloneConfig: VMCloneProps = {
      id: this.controlNodes.length + baseId,
      name: `${prefix}-worker-${this.workerNodes.length + 1}`,
      ...config,
    }
    const node = new VMClone(this, `worker${this.workerNodes.length}`, cloneConfig);
    this.workerNodes.push(node);
  }

  private uptickIp(ip: string, amount: number) {
    const parts = ip.split(".");
    const last = parseInt(parts[parts.length - 1]);
    parts[parts.length - 1] = (last + amount).toString();
    return parts.join(".");
  }

  constructor(scope: Construct, name: string, props: ClusterStackProps) {
    super(scope, name, props);

    new ProxmoxProvider(this, "ProxmoxProvider", {
      pmApiUrl: props.proxmox.url,
      pmApiTokenId: props.proxmox.tokenId,
      pmApiTokenSecret: props.proxmox.tokenSecret,
      pmTlsInsecure: true,
    })

    const controlConfigs: ClusterNodeOptions[] = [];
    const workerConfigs: ClusterNodeOptions[] = [];

    for (let i = 0; i < props.nodes.length; i++) {
      const node = props.nodes[i];
      const commonConfig = {
        node: node.machine.name,
        template: node.template,
        nics: [
          {
            model: "virtio",
            bridge: node.bridge,
            tag: props.machines.vlan,
          },
        ],
        gateway: props.machines.gateway,
        agent: true,
        sshUser: props.machines.ssh.user,
        sshKey: props.machines.ssh.publicKey,
        dnsServer: props.machines.dnsServer,
        dnsDomain: props.machines.dnsDomain,
      }

      props.nodes.forEach((node) => {
        const controlConfig: ClusterNodeOptions = {
          memory: props.controlConfig.memory,
          cores: props.controlConfig.cpus,
          tags: props.controlConfig.tags,
          ip: `${this.uptickIp(props.machines.baseIp, (workerConfigs.length + controlConfigs.length + 1))}/24`,
          disks: [
            {
              storage: node.pool,
              size: props.controlConfig.storageSize,
              type: "scsi",
              discard: "on",
            },
          ],
          ...commonConfig,
        }
        controlConfigs.push(controlConfig);

        const worker: ClusterNodeOptions = {
          memory: props.workerConfig.memory,
          cores: props.workerConfig.cpus,
          tags: props.workerConfig.tags,
          ip: `${this.uptickIp(props.machines.baseIp, (workerConfigs.length + controlConfigs.length + 1))}/24`,
          disks: [
            {
              storage: node.pool,
              size: props.workerConfig.storageSize,
              type: "scsi",
              discard: "on",
            },
          ],
          ...commonConfig,
        }
        workerConfigs.push(worker);

      })
    }

    this.controlNodes = [];
    this.workerNodes = [];

    for (let i = 0; i < controlConfigs.length; i++) {
      this.buildControlNode(props.machines.namePrefix, props.machines.baseId, controlConfigs[i]);
    }
    for (let i = 0; i < workerConfigs.length; i++) {
      this.buildWorkerNode(props.machines.namePrefix, props.machines.baseId, workerConfigs[i]);
    }
  }
}