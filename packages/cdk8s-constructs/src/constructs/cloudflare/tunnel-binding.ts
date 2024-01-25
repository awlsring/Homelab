import { Construct } from "constructs";
import { CloudflareTunnel } from "./tunnel";
import { TunnelBinding as L1TunnelBinding } from "../../imports/cnpq-networking.cfargotunnel.com";
import { Service } from "cdk8s-plus-27";
import { ApiObject } from "cdk8s";

export interface CloudflareTunnelBindingProps {
  readonly service: Service;
  readonly tunnel: CloudflareTunnel;
  readonly domainName?: string;
}

export class CloudflareTunnelBinding extends Construct {
  protected apiObject: ApiObject;
  constructor(
    scope: Construct,
    name: string,
    props: CloudflareTunnelBindingProps,
  ) {
    super(scope, name);
    this.apiObject = new L1TunnelBinding(this, "resource", {
      metadata: {
        name: name,
      },
      subjects: [
        {
          kind: "Service",
          name: props.service.name,
          spec: {
            fqdn: props.domainName,
          },
        },
      ],
      tunnelRef: {
        kind: "Tunnel",
        name: props.tunnel.name,
      },
    });
  }
}
