import { App } from "cdktf";
import { HomelabStackProps } from "./constructs/stacks/homelab-stack";
import { SopsSecretProviderFactory } from "./secret-provider/sops-secret-provider";
import { MachineDeploymentStack } from "./stacks/machine-deploy-stack";
import { PostgresBackendFactory } from "./backend/pg-backend";
import { extractSopsSecret } from "./util/extract-sops-secret";
import { StorageBackupStack } from "./stacks/storage-backups";

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

new MachineDeploymentStack(app, "machine-deployment", {
  ...commonProps,
  machines: [
    {
      hostname: "ravnica",
      ipv4: "10.0.10.69",
      site: "us-drig-1",
    },
  ],
});

new StorageBackupStack(app, "storage-backups", {
  ...commonProps,
  accessKeyIdSecretName: "terraform.backblaze.accessKeyId",
  secretAccessKeySecretName: "terraform.backblaze.secretAccessKey",
});

app.synth();
