import { App } from "cdktf";
import { OnepasswordSecretProviderFactory } from "cdktf-constructs";
import { StorageBackupStack } from "./stacks/storage-backup";

const app = new App();

const onepasswordUrl = process.env.ONEPASSWORD_CONNECT_URL;
const onepasswordToken = process.env.ONEPASSWORD_CONNECT_TOKEN;
if (!onepasswordToken || !onepasswordUrl) {
  throw new Error("Missing token url or id");
}

const backendUser = process.env.BACKEND_USER;
const backendPassword = process.env.BACKEND_PASSWORD;
if (!backendUser || !backendPassword) {
  throw new Error("Missing backend user or password");
}

const projectsProps = {
  project: "homelab",
  backend: {
    address: "https://tf-backend.awlsring-sea.drigs.org",
    username: backendUser,
    password: backendPassword,
  },
};

const providerProps = {
  secretProvider: new OnepasswordSecretProviderFactory({
    url: onepasswordUrl,
    token: onepasswordToken,
    vault: "Homelab",
  }),
};

const standardProps = {
  ...projectsProps,
  ...providerProps,
};

new StorageBackupStack(app, "storage-backup", {
  ...standardProps,
  secretName: "backblaze-tf-key",
});

app.synth();
