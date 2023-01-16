import { Construct } from "constructs";
import { OnepasswordProvider } from "../../.gen/providers/onepassword/provider";
import { DataOnepasswordVault } from "../../.gen/providers/onepassword/data-onepassword-vault";
import { DataOnepasswordItem } from "../../.gen/providers/onepassword/data-onepassword-item";
import { HomelabStack, HomelabStackProps } from "../constructs/homelab-stack";

export interface OnepasswordStackProps extends HomelabStackProps {
  url: string;
  token: string;
}

export class OnePasswordStack extends HomelabStack {
  secrets: Map<string, string>

  retrieveSecret(name: string): string {
    const secret = this.secrets.get(name)
    if (!secret) {
      throw new Error(`Secret ${name} not found`)
    }
    return secret
  }

  constructor(scope: Construct, name: string, props: OnepasswordStackProps) {
    super(scope, name, props);
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

    const truenasToken = new DataOnepasswordItem(this, "truenas-token-id", {
      vault: vault.uuid,
      title: "truenas-token",
    })
    this.secrets.set("truenas-token", truenasToken.password)

    const s3Creds = new DataOnepasswordItem(this, "truenas-s3-creds", {
      vault: vault.uuid,
      title: "truenas-s3-creds",
    })
    this.secrets.set("truenas-s3-access-key", s3Creds.username)
    this.secrets.set("truenas-s3-secret-key", s3Creds.password)
  }
}