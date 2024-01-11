import { Construct } from "constructs";
import { KubeNamespace } from "../../imports/k8s";

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
