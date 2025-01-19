import { Construct } from "constructs";
import { TunnelBinding as L1TunnelBinding } from "../../imports/tunnelbinding-networking.cfargotunnel.com";
import { Service } from "cdk8s-plus-31";
import { ApiObject } from "cdk8s";
import { ICloudflareTunnel } from "./tunnel/tunnel-common";

export interface CloudflareTunnelBindingProps {
  readonly service: Service;
  readonly tunnel: ICloudflareTunnel;
  readonly domainName?: string;
}

export class CloudflareTunnelBinding extends Construct {
  protected apiObject: ApiObject;
  constructor(
    scope: Construct,
    name: string,
    props: CloudflareTunnelBindingProps
  ) {
    super(scope, name);
    this.apiObject = new L1TunnelBinding(this, "resource", {
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
        kind: props.tunnel.resourceType,
        name: props.tunnel.name,
      },
    });
  }
}
