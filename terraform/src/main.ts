import { App } from "cdktf";
import { HomelabStackProps } from "./constructs/stacks/homelab-stack";
import { SopsSecretProviderFactory } from "./secret-provider/sops-secret-provider";
import { HetznerMachineDeploymentStack } from "./stacks/machine-deploy-stack";
import { PostgresBackendFactory } from "./backend/pg-backend";
import { extractSopsSecret } from "./util/extract-sops-secret";

const app = new App();

const sopsSecretPath = `${__dirname}/../../secrets/secrets.yaml`;

const commonProps: HomelabStackProps = {
  secretProviderFactory: new SopsSecretProviderFactory({
    sourceFile: sopsSecretPath,
  }),
  backendFactory: new PostgresBackendFactory({
    address: "terraform-backend.us-drig-1.drigs.org",
    database: "terraform",
    user: "terraform",
    password: extractSopsSecret(
      sopsSecretPath,
      '["terraform"]["backend"]["postgresql"]["password"]'
    ),
  }),
};

new HetznerMachineDeploymentStack(app, "machine-deployment", {
  ...commonProps,
  hostname: "conflux",
});

app.synth();
