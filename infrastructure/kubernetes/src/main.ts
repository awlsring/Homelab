import { App } from "cdk8s";
import { assignApplicationsCharts } from "./modules/applications";
import { assignExternalIngressCharts } from "./modules/external-ingress";
import { assignGameServerCharts } from "./modules/game-servers";
import { assignPlatformCharts } from "./modules/platform";
import { assignSystemCharts } from "./modules/system";

const app = new App();

assignSystemCharts(app);
assignPlatformCharts(app);
assignApplicationsCharts(app);
assignGameServerCharts(app);
assignExternalIngressCharts(app);

app.synth();
