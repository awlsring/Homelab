import { App } from "cdk8s";
import { assignApplicationsCharts } from "./modules/applications";
import { assignSystemCharts } from "./modules/system";

const app = new App();

assignApplicationsCharts(app);
assignSystemCharts(app);

app.synth();
