import { TerraformStack } from "cdktf";
import { Construct } from "constructs";
import { ProxmoxProvider } from "../../.gen/providers/proxmox/provider";
import { VmQemuDisk, VmQemuNetwork } from "../../.gen/providers/proxmox/vm-qemu";
import { Memory } from "../constructs/proxmox/enums";
import { VMClone, VMCloneProps } from "../constructs/proxmox/vm-clone";

export interface ClusterNodeProps {
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

export interface ProxmoxNodeProps {
  name: string;
  bridge: string;
  pool: string;
  controlAmount: number;
  workerAmount: number;
}

export interface ClusterStackProps {
  proxmox: ProxmoxProviderProps;
  nodes: ProxmoxNodeProps[],
  template: string;
  clusterPrefix: string;
  clusterVmBaseId: number;
  baseIpSuffix: number;
  gateway: string;
}

const PUBLIC_KEY = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDKBk8jY0K2Vnr2Jcobao0aoYGAyRzUhDbAEjU1JLq47/Azmy/rDOMaX2EEineisEY4gwrDRt2RF2jeb+/bb2oG0LbqypXiWdXHp6FZcQS9ZV9Udurew2WotP7UtTx+VhOoO1Kc2stw1Qw7GFmMNO8FvSotGh+iD/gNvZKTDXNZDK2rNoyvRpij/lNFseF/ir+Pu3DIToAQMGiFi4ApfFGHk68nkpfR8UikI9C0uWkcQwVO4aTOJXRImAitASZ/otmaOfstE79KBNNL7OiIa2nHwvkA8Z7UW8i34WZsY/AG6lZUvX+0ACaCThQgy73YRy3GC1cV4wvCnxA+BtxvYw982WsEvcSv72E/11ii8hq7czlRb4Y9WnnxfG4IB9NesHqsolvHR3nS6KocHMX/Asa6Q09XD0AQYDQiX/7bOq2oSdA5rPjNYNJH5AGowkBZUAglj35u3xx4t3x2CPJza+mBksbejQDCfFL68zh3Occ+AlT1yksqm4xaUgHYU65Aehk= Mac Key"

export class ClusterStack extends TerraformStack {
  readonly controlNodes: VMClone[];
  readonly workerNodes: VMClone[];

  private buildControlNode(prefix: string, baseId: number, config: ClusterNodeProps) {
    const cloneConfig: VMCloneProps = {
      id: this.controlNodes.length + baseId,
      name: `${prefix}-control-${this.controlNodes.length + 1}`,
      ...config,
    }
    const node = new VMClone(this, `control${this.controlNodes.length}`, cloneConfig);
    this.controlNodes.push(node);
  }

  private buildWorkerNode(prefix: string, baseId: number, config: ClusterNodeProps) {
    const cloneConfig: VMCloneProps = {
      id: this.controlNodes.length + baseId,
      name: `${prefix}-worker-${this.workerNodes.length + 1}`,
      ...config,
    }
    const node = new VMClone(this, `worker${this.workerNodes.length}`, cloneConfig);
    this.workerNodes.push(node);
  }

  constructor(scope: Construct, name: string, props: ClusterStackProps) {
    super(scope, name);

    new ProxmoxProvider(this, "ProxmoxProvider", {
      pmApiUrl: props.proxmox.url,
      pmApiTokenId: props.proxmox.tokenId,
      pmApiTokenSecret: props.proxmox.tokenSecret,
      pmTlsInsecure: true,
    })

    const controlConfigs: ClusterNodeProps[] = [];
    const workerConfigs: ClusterNodeProps[] = [];

    for (let i = 0; i < props.nodes.length; i++) {
      const node = props.nodes[i];
      const commonConfig = {
        node: node.name,
        template: props.template,
        nics: [
          {
            model: "virtio",
            bridge: node.bridge,
            tag: 100,
          },
        ],
        gateway: props.gateway,
        agent: true,
        sshUser: "awlsring",
        sshKey: PUBLIC_KEY,
        dnsServer: "10.10.10.10",
        dnsDomain: "awlsring-sea.drigs.org",
      }

      for (let j = 0; j < props.nodes[i].controlAmount; j++) {
        const controlConfig: ClusterNodeProps = {
          memory: Memory.GB_8,
          cores: 2,
          tags: "node_type-control;k8s_flavor-k3s",
          ip: `10.0.100.${props.baseIpSuffix + workerConfigs.length + controlConfigs.length + 1}/24`,
          disks: [
            {
              storage: node.pool,
              size: "30G",
              type: "scsi",
              discard: "on",
            },
          ],
          ...commonConfig,
        }
        controlConfigs.push(controlConfig);
      }

      for (let j = 0; j < props.nodes[i].workerAmount; j++) {
        const worker: ClusterNodeProps = {
          memory: Memory.GB_12,
          cores: 4,
          tags: "node_type-worker;k8s_flavor-k3s",
          ip: `10.0.100.${props.baseIpSuffix + workerConfigs.length + controlConfigs.length + 1}/24`,
          disks: [
            {
              storage: node.pool,
              size: "200G",
              type: "scsi",
              discard: "on",
            },
          ],
          ...commonConfig,
        }
        workerConfigs.push(worker);
      }
    }

    this.controlNodes = [];
    this.workerNodes = [];

    for (let i = 0; i < controlConfigs.length; i++) {
      this.buildControlNode(props.clusterPrefix, props.clusterVmBaseId, controlConfigs[i]);
    }
    for (let i = 0; i < workerConfigs.length; i++) {
      this.buildWorkerNode(props.clusterPrefix, props.clusterVmBaseId, workerConfigs[i]);
    }
  }
}