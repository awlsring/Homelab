import { App } from "cdk8s";
import { assignApplicationsCharts } from "./modules/applications";
import { assignExternalIngressCharts } from "./modules/external-ingress";
import { assignPlatformCharts } from "./modules/platform";
import { assignSystemCharts } from "./modules/system";

const app = new App();

assignSystemCharts(app);
assignPlatformCharts(app);
assignApplicationsCharts(app);
assignExternalIngressCharts(app);

app.synth();
