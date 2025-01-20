import {
  HomelabStack,
  HomelabStackProps,
} from "../constructs/stacks/homelab-stack";
import { Construct } from "constructs";
import { NixosAnywhereAllInOne } from "../../.gen/modules/nixos-anywhere-all-in-one";
import { Server } from "../../.gen/providers/hcloud/server";
import { HcloudProvider } from "../../.gen/providers/hcloud/provider";

export interface MachineDeploymentStackProps extends HomelabStackProps {
  readonly hostname: string;
}

// Test stack creating a server on hetzner then configuring via nixos-anywhere
export class HetznerMachineDeploymentStack extends HomelabStack {
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

    const server = new Server(this, "server", {
      name: props.hostname,
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
      nixosSystemAttr: `.#nixosConfigurations.${props.hostname}.config.system.build.toplevel`,
      nixosPartitionerAttr: `.#nixosConfigurations.${props.hostname}.config.system.build.diskoScript`,
      targetHost: server.ipv4Address,
      instanceId: server.id,
      extraFilesScript: `${__dirname}/../../../scripts/extract-secrets.sh`,
      nixosGenerateConfigPath: `${__dirname}/../../../machines/${props.hostname}/hardware-configuration.nix`,
    });
  }
}
