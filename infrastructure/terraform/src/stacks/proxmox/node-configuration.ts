import { NetworkBond } from "@awlsring/cdktf-proxmox/lib/base/network-bond";
import { NetworkBridge } from "@awlsring/cdktf-proxmox/lib/base/network-bridge";
import { ZfsPool } from "@awlsring/cdktf-proxmox/lib/base/zfs-pool";
import { NetworkHashPolicy, NetworkMode, ZFSRaidLevel } from "@awlsring/cdktf-proxmox";
import { Construct } from "constructs";
import { ProxmoxStack, ProxmoxStackProps } from "./common";

export interface ZfsStorageConfiguration {
  readonly name: string;
  readonly disks: string[];
  readonly raidLevel: ZFSRaidLevel;
}

export interface NetworkConfiguration {
  readonly interfaces: string[];
  readonly bond: string;
  readonly bridge: string;
}

export interface ProxmoxNodeConfigurationStackProps extends ProxmoxStackProps {
  readonly node: string;
  readonly network: NetworkConfiguration;
  readonly storage: ZfsStorageConfiguration;
}

export class ProxmoxNodeConfigurationStack extends ProxmoxStack {
  readonly nodeName: string;
  readonly pool: ZfsPool;
  readonly bridge: NetworkBridge;

  private configureVmPool(cfg: ZfsStorageConfiguration) {
    const pool = new ZfsPool(this, "zfs-pool", {
      name: cfg.name,
      nodeAttribute: this.nodeName,
      raidLevel: cfg.raidLevel,
      disks: cfg.disks,
    })
    
    return pool;
  }

  private configureNetwork(cfg: NetworkConfiguration) {
    const bond = new NetworkBond(this, "bond", {
      nodeAttribute: this.nodeName,
      name: cfg.bond,
      interfaces: cfg.interfaces,
      mode: NetworkMode.LCAP_802_3AD,
      hashPolicy: NetworkHashPolicy.LAYER_2_3,
    })

    const bridge = new NetworkBridge(this, "bridge", {
      nodeAttribute: this.nodeName,
      name: cfg.bridge,
      vlanAware: true,
      interfaces: [bond.name],
    })
    return bridge
  }

  constructor(scope: Construct, id: string, props: ProxmoxNodeConfigurationStackProps) {
    super(scope, id, props);
    this.nodeName = props.node;

    this.pool = this.configureVmPool(props.storage);
    this.bridge = this.configureNetwork(props.network);
  }
}