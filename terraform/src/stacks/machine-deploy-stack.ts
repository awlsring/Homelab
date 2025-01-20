import {
  HomelabStack,
  HomelabStackProps,
} from "../constructs/stacks/homelab-stack";
import { Construct } from "constructs";
import { NixosAnywhereAllInOne } from "../../.gen/modules/nixos-anywhere-all-in-one";
import { Server } from "../../.gen/providers/hcloud/server";
import { HcloudProvider } from "../../.gen/providers/hcloud/provider";

export interface MachineOptions {
  readonly hostname: string;
  readonly site: string;
  readonly ipv4?: string;
}

export interface MachineDeploymentStackProps extends HomelabStackProps {
  readonly machines: MachineOptions[];
}

// Test stack creating a server on hetzner then configuring via nixos-anywhere
export class MachineDeploymentStack extends HomelabStack {
  constructor(
    scope: Construct,
    name: string,
    props: MachineDeploymentStackProps
  ) {
    super(scope, name, props);

    const providerSecret = this.secretProvider.retrieveSecret(
      "terraform.hetzner.apiKey"
    );

    new HcloudProvider(this, "provider", {
      token: providerSecret.value,
    });

    props.machines.forEach((machine) => {
      switch (machine.site) {
        case "hetzner":
          this.provisionHetznerMachine(machine);
          break;
        default:
          // probably local, just try to deploy
          this.provisionLocalMachine(machine);
          break;
      }
    });
  }

  private provisionLocalMachine(options: MachineOptions) {
    if (!options.ipv4) {
      throw new Error("Local machines require an ipv4 address");
    }

    this.deployMachine(options.hostname, options.ipv4, options.ipv4);
  }

  private provisionHetznerMachine(options: MachineOptions) {
    const server = new Server(this, "server", {
      name: options.hostname,
      image: "debian-12",
      serverType: "cpx11",
      datacenter: "hil-dc1",
      publicNet: [
        {
          ipv4Enabled: true,
        },
      ],
      sshKeys: ["ed25519"],
    });

    new NixosAnywhereAllInOne(this, "nixos-anywhere", {
      nixosSystemAttr: `.#nixosConfigurations.${options.hostname}.config.system.build.toplevel`,
      nixosPartitionerAttr: `.#nixosConfigurations.${options.hostname}.config.system.build.diskoScript`,
      targetHost: server.ipv4Address,
      instanceId: server.id,
      extraFilesScript: `${__dirname}/../../../scripts/extract-secrets.sh`,
      nixosGenerateConfigPath: `${__dirname}/../../../machines/${options.hostname}/hardware-configuration.nix`,
    });
  }

  deployMachine(hostname: string, id: string, ipv4: string) {
    new NixosAnywhereAllInOne(this, "nixos-anywhere", {
      nixosSystemAttr: `.#nixosConfigurations.${hostname}.config.system.build.toplevel`,
      nixosPartitionerAttr: `.#nixosConfigurations.${hostname}.config.system.build.diskoScript`,
      targetHost: ipv4,
      instanceId: id,
      extraFilesScript: `${__dirname}/../../../scripts/extract-secrets.sh`,
      nixosGenerateConfigPath: `${__dirname}/../../../machines/${hostname}/hardware-configuration.nix`,
    });
  }
}
