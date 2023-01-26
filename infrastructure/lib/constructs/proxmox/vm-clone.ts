import { Construct } from "constructs";
import { VmQemu, VmQemuConfig, VmQemuDisk, VmQemuNetwork } from "../../../.gen/providers/proxmox/vm-qemu"
import { Memory } from "../../proxmox/enums";

export interface VMCloneProps {
  name: string,
  node: string,
  template: string,
  memory: Memory,
  cores: number,
  disks: VmQemuDisk[]
  nics: VmQemuNetwork[]
  ip?: string,
  gateway?: string
  id?: number,
  agent?: boolean,
  sshUser?: string,
  sshKey?: string,
  tags?: string,
  dnsServer?: string,
  dnsDomain?: string,
}

export class VMClone extends VmQemu {
  constructor(scope: Construct, name: string, props: VMCloneProps) {
    let ipconfig = "ip="
    if (props.ip) {
      ipconfig += props.ip
      if (props.gateway) {
        ipconfig += `,gw=${props.gateway}`
      }
    } else {
      ipconfig += "dhcp"
    }

    let config: VmQemuConfig = {
      count: 1,
      name: props.name,
      vmid: props.id,
      targetNode: props.node,
      boot: "c",
      bootdisk: "scsi0",
      clone: props.template,
      osType: "cloud-init",
      agent: props.agent ? 1 : 0,
      memory: props.memory,
      cores: props.cores,
      ipconfig0: ipconfig,
      fullClone: true,
      network: props.nics,
      disk: props.disks,
      ciuser: props.sshUser,
      searchdomain: props.dnsDomain,
      nameserver: props.dnsServer,
      sshkeys: props.sshKey,
      tags: props.tags,
    }

    super(scope, name, config);
  }
}