import { ApiObject } from "cdk8s";
import { Construct } from "constructs";
import { Tunnel as L1Tunnel } from "../../../imports/tunnels-networking.cfargotunnel.com";
import {
  BaseCloudflareTunnel,
  CloudflareTunnelProps,
  ExistingTunnelOptions,
  ExistingTunnelProps,
  ICloudflareTunnel,
} from "./tunnel-common";

export class CloudflareTunnel
  extends BaseCloudflareTunnel
  implements ICloudflareTunnel
{
  protected readonly apiObject: ApiObject;
  readonly resourceType = "Tunnel";
  constructor(scope: Construct, name: string, props: CloudflareTunnelProps) {
    super(scope, name, props);

    this.apiObject = new L1Tunnel(this, "resource", {
      spec: this.formResourceSpec(name, props),
    });
  }

  static fromExistingTunnel(
    scope: Construct,
    name: string,
    options: ExistingTunnelProps
  ): CloudflareTunnel {
    if (!options.tunnelId && !options.tunnelName) {
      throw new Error("Must specify either tunnelId or tunnelName");
    }

    const opts: ExistingTunnelOptions = {
      ...options,
      existingTunnel: {
        ...options,
      },
    };

    return new CloudflareTunnel(scope, name, opts);
  }
}
