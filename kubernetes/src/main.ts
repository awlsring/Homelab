import { App } from "cdk8s";
import { ApplicationModule } from "./modules/application";
import { SystemModule } from "./modules/system";
import { PlatformModule } from "./modules/platform";
import { loadConfigurationFromInventory } from "./config/configuration";

const app = new App();

const config = loadConfigurationFromInventory();

new SystemModule(app, config);
new PlatformModule(app, config);
new ApplicationModule(app, config);

app.synth();
