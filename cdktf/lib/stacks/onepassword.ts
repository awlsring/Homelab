import { TerraformStack } from "cdktf";
import { Construct } from "constructs";
import { OnepasswordProvider } from "../../.gen/providers/onepassword/provider";
import { DataOnepasswordVault } from "../../.gen/providers/onepassword/data-onepassword-vault";
import { DataOnepasswordItem } from "../../.gen/providers/onepassword/data-onepassword-item";

export interface OnepasswordStackProps {
  url: string;
  token: string;
}

export class OnePasswordStack extends TerraformStack {
  secrets: Map<string, string>

  retrieveSecret(name: string): string {
    const secret = this.secrets.get(name)
    if (!secret) {
      throw new Error(`Secret ${name} not found`)
    }
    return secret
  }

  constructor(scope: Construct, name: string, props: OnepasswordStackProps) {
    super(scope, name);
    this.secrets = new Map<string, string>();

    new OnepasswordProvider(this, "provider", {
      url: props.url,
      token: props.token,
    })

    const vault = new DataOnepasswordVault(this, "homelab-vault", {
      name: "Homelab",
    })

    const proxmoxToken = new DataOnepasswordItem(this, "proxmox-token-id", {
      vault: vault.uuid,
      title: "proxmox-token",
    })

    this.secrets.set("proxmox-token-id", proxmoxToken.username)
    this.secrets.set("proxmox-token-secret", proxmoxToken.password)
  }
}