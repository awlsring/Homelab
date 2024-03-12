import { App } from "cdk8s";
import { CloudflareOperatorChart } from "../charts/platform/cloudflare-operator";
import { CloudnativePgChart } from "../charts/platform/cloudnative-pq";
import { CrossplaneChart } from "../charts/platform/crossplane";
import { KanidmChart } from "../charts/platform/kanidm";

export function assignPlatformCharts(app: App) {
  new CloudnativePgChart(app, "cnpg");
  new KanidmChart(app, "kanidm");
  new CloudflareOperatorChart(app, "cloudflare-operator");
  new CrossplaneChart(app, "crossplane");
}
