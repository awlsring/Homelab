import { ApiObject } from "cdk8s";
import { Construct } from "constructs";
import { ClusterTunnel as L1ClusterTunnel } from "../../../imports/clustertunnel-networking.cfargotunnel.com";
import {
  BaseCloudflareTunnel,
  CloudflareTunnelProps,
  ExistingTunnelProps,
  ICloudflareTunnel,
} from "./tunnel-common";

interface ExistingTunnelOptions extends CloudflareTunnelProps {
  readonly existingTunnel: ExistingTunnelProps;
}

export class CloudflareClusterTunnel
  extends BaseCloudflareTunnel
  implements ICloudflareTunnel
{
  protected readonly apiObject: ApiObject;
  readonly resourceType = "ClusterTunnel";
  constructor(scope: Construct, name: string, props: CloudflareTunnelProps) {
    super(scope, name, props);

    this.apiObject = new L1ClusterTunnel(this, "resource", {
      metadata: {
        namespace: undefined,
      },
      spec: this.formResourceSpec(name, props),
    });
  }

  static fromExistingTunnel(
    scope: Construct,
    name: string,
    options: ExistingTunnelProps
  ): CloudflareClusterTunnel {
    if (!options.tunnelId && !options.tunnelName) {
      throw new Error("Must specify either tunnelId or tunnelName");
    }

    const opts: ExistingTunnelOptions = {
      ...options,
      existingTunnel: {
        ...options,
      },
    };

    return new CloudflareClusterTunnel(scope, name, opts);
  }
}
