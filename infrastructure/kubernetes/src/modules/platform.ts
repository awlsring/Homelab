import { App } from "cdk8s";
import { CloudnativePgChart } from "../charts/platform/cloudnative-pq";
import { KanidmChart } from "../charts/platform/kanidm";

export function assignPlatformCharts(app: App) {
  new CloudnativePgChart(app, "cnpg");
  new KanidmChart(app, "kanidm");
}
