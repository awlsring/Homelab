import { Construct } from "constructs";
import * as fs from "fs";
import * as path from "path";
import { KubeConfigMap } from "../../imports/k8s";

const PROM_OPERATOR_DASHBOARD_LABEL = "grafana_dashboard";

export interface GrafanaDashboardProps {
  readonly name: string;
  readonly data: string;
  readonly dashboardLabelOverride?: string;
}

export class GrafanaDashboard extends Construct {
  private constructor(
    scope: Construct,
    id: string,
    props: GrafanaDashboardProps
  ) {
    super(scope, id);

    let dashboardLabel =
      props.dashboardLabelOverride ?? PROM_OPERATOR_DASHBOARD_LABEL;

    new KubeConfigMap(this, `${id}-dashboard`, {
      metadata: {
        name: id,
        namespace: "monitoring",
        labels: {
          [dashboardLabel]: "1",
        },
      },
      data: {
        [props.name]: props.data,
      },
    });
  }

  static fromFile(scope: Construct, name: string, file: string) {
    const filename = path.basename(file);
    const fileData = fs.readFileSync(file, "utf8");

    return new GrafanaDashboard(scope, name, {
      name: filename,
      data: fileData,
    });
  }
}
