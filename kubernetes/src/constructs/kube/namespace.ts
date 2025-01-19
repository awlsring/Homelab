import { KubeNamespace } from "../../imports/k8s";
import { Construct } from "constructs";

export interface NamespaceProps {
  readonly name: string;
}

export class Namespace extends Construct {
  constructor(scope: Construct, name: string, props: NamespaceProps) {
    super(scope, name);
    new KubeNamespace(scope, props.name, {
      metadata: {
        name: props.name,
      },
    });
  }
}
