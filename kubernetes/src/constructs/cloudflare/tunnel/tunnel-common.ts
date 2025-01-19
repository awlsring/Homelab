import { Construct } from "constructs";
import { CloudflareTunnelBinding } from "../tunnel-binding";
import { Resource, Service } from "cdk8s-plus-31";
import { TunnelSpec } from "../../../imports/tunnels-networking.cfargotunnel.com";

export interface BaseTunnelOptions {
  readonly email: string;
  readonly domain: string;
  readonly cloudflareSecret: string;
  readonly accountId?: string;
  readonly accountName?: string;
  readonly replicas?: number;
  readonly resourceName?: string;
  readonly image?: string;
  readonly imageTag?: string;
}

export interface ExistingTunnelProps extends BaseTunnelOptions {
  readonly tunnelId?: string;
  readonly tunnelName?: string;
}

export interface CloudflareTunnelProps extends BaseTunnelOptions {
  readonly tunnelName?: string;
}

export interface BindToServiceProps {
  readonly domainName?: string;
}

export interface ExistingTunnelOptions extends CloudflareTunnelProps {
  readonly existingTunnel: ExistingTunnelProps;
}

const DEFAULT_REPLICA_COUNT = 2;

const DEFAULT_IMAGE = "cloudflare/cloudflared";
const DEFAULT_IMAGE_TAG = "2024.1.5";

export interface ICloudflareTunnel {
  readonly name: string;
  readonly resourceType: string;
  bindToService(
    service: Service,
    props?: BindToServiceProps
  ): CloudflareTunnelBinding;
}

/**
 *  @internal
 */
export abstract class BaseCloudflareTunnel extends Resource {
  readonly replicas: number;
  abstract readonly resourceType: string;
  constructor(scope: Construct, name: string, props: CloudflareTunnelProps) {
    super(scope, name);
    this.replicas = props.replicas ?? DEFAULT_REPLICA_COUNT;
    if (!props.accountId && !props.accountName) {
      throw new Error("Must specify either accountId or accountName");
    }
  }

  private formImage(image: string | undefined, imageTag: string | undefined) {
    let i = DEFAULT_IMAGE;
    let t = DEFAULT_IMAGE_TAG;
    if (image) {
      i = image;
    }
    if (imageTag) {
      t = imageTag;
    }
    return `${i}:${t}`;
  }

  protected formResourceSpec(
    name: string,
    props: CloudflareTunnelProps
  ): TunnelSpec {
    const spec: TunnelSpec = {
      size: props.replicas ?? DEFAULT_REPLICA_COUNT,
      image: this.formImage(props.image, props.imageTag),
      cloudflare: {
        email: props.email,
        domain: props.domain,
        secret: props.cloudflareSecret,
        accountId: props.accountId,
        accountName: props.accountName,
      },
    };
    if ("existingTunnel" in props) {
      const p = props as ExistingTunnelOptions;
      return {
        existingTunnel: {
          id: p.existingTunnel.tunnelId,
          name: p.existingTunnel.tunnelName,
        },
        ...spec,
      };
    }
    return {
      newTunnel: {
        name: props.tunnelName ?? name,
      },
      ...spec,
    };
  }

  bindToService(
    service: Service,
    props?: BindToServiceProps
  ): CloudflareTunnelBinding {
    return new CloudflareTunnelBinding(this, "binding", {
      service: service,
      tunnel: this,
      domainName: props?.domainName,
    });
  }
}
