import { App } from "cdk8s";
import { CloudnativePqChart } from "../charts/platform/cloudnative-pq";

export function assignPlatformCharts(app: App) {
  new CloudnativePqChart(app, "cloudnative-pq");
}
