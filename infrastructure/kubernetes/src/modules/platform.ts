import { App } from "cdk8s";
import { CloudnativePgChart } from "../charts/platform/cloudnative-pq";

export function assignPlatformCharts(app: App) {
  new CloudnativePgChart(app, "cnpg");
}
