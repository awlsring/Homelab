import { App } from "cdktf";
import {
  LocalBackendCreator,
  OnepasswordSecretProviderCreator,
} from "cdktf-constructs";
import { StorageBackupStack } from "./stacks/storage/storage-backup";
import dotenv from "dotenv";
dotenv.config();

const app = new App();

const onepasswordUrl = process.env.ONEPASSWORD_CONNECT_URL;
const onepasswordToken = process.env.ONEPASSWORD_CONNECT_TOKEN;
if (!onepasswordToken || !onepasswordUrl) {
  throw new Error("Missing token url or id");
}

const projectsProps = {
  project: "homelab",
  backendCreator: new LocalBackendCreator({}),
  secretProviderCreator: new OnepasswordSecretProviderCreator({
    url: onepasswordUrl,
    token: onepasswordToken,
    vault: "Homelab",
  }),
};

new StorageBackupStack(app, "storage-backup", {
  ...projectsProps,
  secretName: "backblaze-tf-key",
});

app.synth();
