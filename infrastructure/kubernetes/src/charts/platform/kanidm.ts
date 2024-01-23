import { HomelabChart, Kanidm } from "cdk8s-constructs";
import { Construct } from "constructs";

export class KanidmChart extends HomelabChart {
  constructor(scope: Construct, name: string) {
    super(scope, name, {
      namespace: "kanidm",
      createNamespace: true,
    });

    new Kanidm(this, "app");
  }
}
