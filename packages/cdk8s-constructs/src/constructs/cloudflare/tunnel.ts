import { ApiObject } from "cdk8s";
import { Construct } from "constructs";
import {
  Tunnel as L1Tunnel,
  TunnelSpec,
} from "../../imports/cnpq-networking.cfargotunnel.com";
import { CloudflareTunnelBinding } from "./tunnel-binding";
import { Service } from "cdk8s-plus-27";

const DEFAULT_REPLICA_COUNT = 2;

export interface BaseTunnelOptions {
  readonly email: string;
  readonly domain: string;
  readonly cloudflareSecret: string;
  readonly accountId?: string;
  readonly accountName?: string;
  readonly replicas?: number;
  readonly resourceName?: string;
}

export interface ExistingTunnelProps extends BaseTunnelOptions {
  readonly tunnelId?: string;
  readonly tunnelName?: string;
}

export interface CloudflareTunnelProps extends BaseTunnelOptions {
  readonly tunnelName?: string;
}

interface ExistingTunnelOptions extends CloudflareTunnelProps {
  readonly existingTunnel: ExistingTunnelProps;
}

export interface BindToServiceProps {
  readonly domainName?: string;
}

export class CloudflareTunnel extends Construct {
  protected apiObject: ApiObject;
  readonly name: string;
  constructor(scope: Construct, name: string, props: CloudflareTunnelProps) {
    super(scope, name);
    this.name = props.resourceName ?? name;
    if (!props.accountId && !props.accountName) {
      throw new Error("Must specify either accountId or accountName");
    }

    const spec = this.formResourceSpec(name, props);

    this.apiObject = new L1Tunnel(this, "resource", {
      metadata: {
        name: this.name,
      },
      spec,
    });
  }

  private formResourceSpec(
    name: string,
    props: CloudflareTunnelProps,
  ): TunnelSpec {
    const spec: TunnelSpec = {
      size: props.replicas ?? DEFAULT_REPLICA_COUNT,
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
    props?: BindToServiceProps,
  ): CloudflareTunnelBinding {
    return new CloudflareTunnelBinding(this, "binding", {
      service: service,
      tunnel: this,
      domainName: props?.domainName,
    });
  }

  static fromExistingTunnel(
    scope: Construct,
    name: string,
    options: ExistingTunnelProps,
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
