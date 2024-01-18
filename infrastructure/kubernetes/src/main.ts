import { App } from "cdk8s";
import { assignApplicationsCharts } from "./modules/applications";
import { assignSystemCharts } from "./modules/system";

const app = new App();

assignSystemCharts(app);
assignApplicationsCharts(app);

app.synth();
