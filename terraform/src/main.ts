import { App } from "cdktf";
import { HomelabStackProps } from "./constructs/stacks/homelab-stack";
import { LocalBackendFactory } from "./backend/local-backend";
import { SopsSecretProviderFactory } from "./secret-provider/sops-secret-provider";
import { HetznerMachineDeploymentStack } from "./stacks/machine-deploy-stack";

const app = new App();

const commonProps: HomelabStackProps = {
  backendFactory: new LocalBackendFactory(),
  secretProviderFactory: new SopsSecretProviderFactory({
    sourceFile: `${__dirname}/../../secrets/secrets.yaml`,
  }),
};

new HetznerMachineDeploymentStack(app, "machine-deployment", {
  ...commonProps,
  hostname: "conflux",
});

app.synth();
