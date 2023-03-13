import { ZfsStorageClass } from "@awlsring/cdktf-proxmox/lib/base/zfs-storage-class";
import { Construct } from "constructs";
import { ProxmoxStack, ProxmoxStackProps } from "./common";

export interface VirtualMachineStorageClassconfiguration {
  readonly name: string;
  readonly pool: string;
  readonly nodes: string[];
}

export interface ProxmoxStorageConfigurationStackProps extends ProxmoxStackProps {
  readonly vmStorage: VirtualMachineStorageClassconfiguration;
}

export class ProxmoxStorageConfigurationStack extends ProxmoxStack {
  readonly vmStorageClass: ZfsStorageClass;
  constructor(scope: Construct, id: string, props: ProxmoxStorageConfigurationStackProps) {
    super(scope, id, props);

    this.vmStorageClass = new ZfsStorageClass(this, "vm-storage-class", {
      id: props.vmStorage.name,
      pool: props.vmStorage.pool,
      nodes: props.vmStorage.nodes,
    })
  }
}