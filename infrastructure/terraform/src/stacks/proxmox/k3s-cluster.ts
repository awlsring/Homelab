import { DataProxmoxTemplate } from "@awlsring/cdktf-proxmox/lib/base/data-proxmox-template"
import { Construct } from "constructs";
import { VirtualMachine } from "@awlsring/cdktf-proxmox/lib/base/virtual-machine";
import { DiskInterface } from "@awlsring/cdktf-proxmox";
import { ProxmoxStack, ProxmoxStackProps } from "./common";
import * as crypto from "crypto";

export interface K3SVirtualMachineConfig {
  readonly cpus: number;
  readonly memory: number;
  readonly diskSize: number;
  readonly tags: string[];
  readonly baseId: number;
  readonly startingIp: string;
}

export interface VirtualMachineConfig {
  readonly id: number;
  readonly name: string;
  readonly node: string;
  readonly tags: string[];
  readonly template: number;
  readonly storage: string;
  readonly cpus: number;
  readonly memory: number;
  readonly diskSize: number;
  readonly bridge: string;
  readonly resourcePool? : string;
  readonly user: string;
  readonly publicKeys: string[];
  readonly ipAddress: string;
  readonly gateway: string;
  readonly nameserver: string;
  readonly domain: string;
  readonly description?: string;
  readonly vlan?: number;
}

export interface NodeConfig {
  readonly name: string;
  readonly template: string;
  readonly bridge: string;
  readonly controlNodes: number;
  readonly workerNodes: number;
  readonly storage: string;
}

export interface CloudInitConfig {
  readonly user: string;
  readonly sshKeys: string[];
  readonly nameserver: string;
  readonly domain: string;
}

export interface K3SClusterStackProps extends ProxmoxStackProps {
  readonly nodes: NodeConfig[];
  readonly gateway: string;
  readonly cloudInit: CloudInitConfig;
  readonly controlConfig: K3SVirtualMachineConfig;
  readonly workerConfig: K3SVirtualMachineConfig;
  readonly vlan?: number;
}

export class K3SClusterStack extends ProxmoxStack {
  readonly controlNodes: VirtualMachine[];
  readonly workerNodes: VirtualMachine[];

  private buildNode(cfg: VirtualMachineConfig) {
    return new VirtualMachine(this, `${cfg.name}-node`, {
      id: cfg.id,
      name: cfg.name,
      nodeAttribute: cfg.node,
      startOnNodeBoot: true,
      startOnCreate: false,
      description: cfg.description ?? "K3S Node",
      clone: {
        source: cfg.template,
        storage: cfg.storage,
        fullClone: true,
      },
      agent: {
        enabled: true,
      },
      cpu: {
        cores: cfg.cpus,
      },
      memory: {
        dedicated: cfg.memory,
      },
      disks: [
        {
          size: cfg.diskSize,
          storage: cfg.storage,
          position: 0,
          interfaceType: DiskInterface.SCSI,
        }
      ],
      networkInterfaces: [
        {
          model: "virtio",
          bridge: cfg.bridge,
          position: 0,
          vlan: cfg.vlan,
        }
      ],
      cloudInit: {
        user: {
          name: cfg.user,
          publicKeys: cfg.publicKeys,
        },
        dns: {
          nameserver: cfg.nameserver,
          domain: cfg.domain,
        },
        ip: [
          {
            position: 0,
            v4: {
              address: cfg.ipAddress,
              gateway: cfg.gateway,
              netmask: "24",
            },
            v6: {
              dhcp: true,
            },
          }
        ]
      },
      tags: cfg.tags,
      resourcePool: cfg.resourcePool,
    });
  }

  private uptickIp(ip: string, amount: number) {
    const parts = ip.split(".");
    const last = parseInt(parts[parts.length - 1]);
    parts[parts.length - 1] = (last + amount).toString();
    return parts.join(".");
  }

  private validateProps(props: K3SClusterStackProps) {
    if (props.nodes.length === 0) {
      throw new Error("At least one node must be specified");
    }
    let controlAmount = 0;
    props.nodes.forEach((node, index) => {
      controlAmount = node.controlNodes + controlAmount;
      if (node.controlNodes < 1) {
        throw new Error(`At least one control node must be specified for node ${index}`);
      }
      if (node.workerNodes < 1) {
        throw new Error(`At least one worker node must be specified for node ${index}`);
      }
    })
    if (!(controlAmount % 2)) {
      throw new Error("The number of control nodes must be an odd number");
    }
  }

  private generateId(name: string) {
    const hash = crypto.createHash("sha256");
    hash.update(name);
    const hashInt = parseInt(hash.digest("hex").substring(0, 9), 16);
    return hashInt % 1000000000;
  }

  constructor(scope: Construct, id: string, props: K3SClusterStackProps) {
    super(scope, id, props);
    this.validateProps(props);
    this.controlNodes = [];
    this.workerNodes = [];

    const commonTags = ["k3s"];
    const controlTags = [...commonTags, ...props.controlConfig.tags];
    const workerTags = [...commonTags, ...props.workerConfig.tags];

    props.nodes.forEach((node) => {
      const nodeAbbr = node.name.substring(0, 3).toLocaleLowerCase();
      const template = new DataProxmoxTemplate(this, `${node.name}-template`, {
        name: node.template,
        nodeAttribute: node.name,
      })

      const commonConfig = {
        node: node.name,
        template: template.id,
        bridge: node.bridge,
        gateway: props.gateway,
        user: props.cloudInit.user,
        publicKeys: props.cloudInit.sshKeys,
        nameserver: props.cloudInit.nameserver,
        domain: props.cloudInit.domain,
      }

      for (let i = 0; i < node.controlNodes; i++) {
        const clusterId = i + 1;
        const name = `k3s-control-${nodeAbbr}-${clusterId}`

        const config: VirtualMachineConfig = {
          ...commonConfig,
          id: this.generateId(name),
          name: name,
          description: "K3S Control Node",
          tags: controlTags,
          storage: node.storage,
          cpus: props.controlConfig.cpus,
          memory: props.controlConfig.memory,
          diskSize: props.controlConfig.diskSize,
          ipAddress: this.uptickIp(props.controlConfig.startingIp, this.controlNodes.length),
          vlan: props.vlan,
        }
        this.controlNodes.push(this.buildNode(config));
      }
      for (let i = 0; i < node.workerNodes; i++) {
        const clusterId = i + 1;
        const name = `k3s-worker-${nodeAbbr}-${clusterId}`

        const config: VirtualMachineConfig = {
          ...commonConfig,
          id: this.generateId(name),
          name: name,
          description: "K3S Worker Node",
          tags: workerTags,
          storage: node.storage,
          cpus: props.workerConfig.cpus,
          memory: props.workerConfig.memory,
          diskSize: props.workerConfig.diskSize,
          ipAddress: this.uptickIp(props.workerConfig.startingIp, this.workerNodes.length),
          vlan: props.vlan,
        }
        this.workerNodes.push(this.buildNode(config));
      }
    }) 
  }
}