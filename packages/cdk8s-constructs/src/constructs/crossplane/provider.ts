import { ApiObject, GroupVersionKind } from "cdk8s";
import { Construct } from "constructs";

export interface ProviderProps {
  readonly name: string;
  readonly package: string;
}

export class Provider extends ApiObject {
  public static readonly GVK: GroupVersionKind = {
    apiVersion: "pkg.crossplane.io/v1",
    kind: "Provider",
  };

  public constructor(scope: Construct, id: string, props: ProviderProps) {
    super(scope, id, {
      ...Provider.GVK,
      metadata: {
        name: props.name,
      },
      spec: {
        package: props.package,
      },
    });
  }
}
