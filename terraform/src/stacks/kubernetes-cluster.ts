import {
  HomelabStack,
  HomelabStackProps,
} from "../constructs/stacks/homelab-stack";
import { Construct } from "constructs";
import { NixosAnywhereAllInOne } from "../../.gen/modules/nixos-anywhere-all-in-one";

export interface MachineOptions {
  readonly hostname: string;
  readonly site: string;
  readonly ipv4?: string;
}

export interface KubernetesClusterDeploymentStackProps
  extends HomelabStackProps {
  readonly machines: MachineOptions[];
}

export class KubernetesClusterDeploymentStack extends HomelabStack {
  constructor(
    scope: Construct,
    name: string,
    props: KubernetesClusterDeploymentStackProps
  ) {
    super(scope, name, props);

    props.machines.forEach((machine) => {
      this.provisionLocalMachine(machine);
    });
  }

  private provisionLocalMachine(options: MachineOptions) {
    if (!options.ipv4) {
      throw new Error("Local machines require an ipv4 address");
    }

    this.deployMachine(options.hostname, options.ipv4, options.ipv4);
  }

  deployMachine(hostname: string, id: string, ipv4: string) {
    new NixosAnywhereAllInOne(this, `nixos-anywhere-${hostname}`, {
      nixosSystemAttr: `.#nixosConfigurations.${hostname}.config.system.build.toplevel`,
      nixosPartitionerAttr: `.#nixosConfigurations.${hostname}.config.system.build.diskoScript`,
      targetHost: ipv4,
      instanceId: id,
      extraFilesScript: `${__dirname}/../../../scripts/extract-secrets.sh`,
      nixosGenerateConfigPath: `${__dirname}/../../../machines/${hostname}/hardware-configuration.nix`,
    });
  }
}
