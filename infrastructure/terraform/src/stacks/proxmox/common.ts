import { ProxmoxProvider } from "@awlsring/cdktf-proxmox/lib/base/provider";
import { Construct } from "constructs";
import { HomelabStack, HomelabStackProps } from "../homelab-stack";

export interface ProviderProps {
  readonly tokenSecret?: string;
  readonly userSecret?: string;
  readonly endpoint: string;
}

export interface ProxmoxStackProps extends HomelabStackProps {
  readonly proxmox: ProviderProps;
}

export class ProxmoxStack extends HomelabStack {
  constructor(scope: Construct, id: string, props: ProxmoxStackProps) {
    super(scope, id, props);

    if (props.proxmox.tokenSecret && props.proxmox.userSecret) {
      throw new Error("Only one of tokenSecret or userSecret can be provided");
    }
    if (this.secretProvider === undefined) {
      throw new Error("Secret provider is undefined");
    }

    if (props.proxmox.tokenSecret) {
      const secret = this.secretProvider.retrieveSecret(props.proxmox.tokenSecret);

      new ProxmoxProvider(this, "provider", {
        endpoint: props.proxmox.endpoint,
        apiKey: `${secret.key}=${secret.value}`,
        insecure: true,
      });
    }

    if (props.proxmox.userSecret) {
      const secret = this.secretProvider.retrieveSecret(props.proxmox.userSecret);

      new ProxmoxProvider(this, "provider", {
        endpoint: props.proxmox.endpoint,
        username: secret.key,
        password: secret.value,
        insecure: true,
      });
    }

    
  }
}