import { App } from "cdktf";
import {
  OnepasswordSecretProviderCreator,
  PostgresBackendCreator,
} from "cdktf-constructs";
import { StorageBackupStack } from "./stacks/storage/storage-backup";
import dotenv from "dotenv";
dotenv.config();

const app = new App();

const pgUser = process.env.POSTGRES_USER;
const pgPassword = process.env.POSTGRES_PASSWORD;
const pgAddress = process.env.POSTGRES_ADDRESS;
const pgDatabase = process.env.POSTGRES_DATABASE;
if (!pgUser || !pgPassword || !pgAddress || !pgDatabase) {
  throw new Error("Missing postgres configuration");
}

const onepasswordUrl = process.env.ONEPASSWORD_CONNECT_URL;
const onepasswordToken = process.env.ONEPASSWORD_CONNECT_TOKEN;
if (!onepasswordToken || !onepasswordUrl) {
  throw new Error("Missing token url or id");
}

const projectsProps = {
  project: "homelab",
  backendCreator: new PostgresBackendCreator({
    address: pgAddress,
    database: pgDatabase,
    user: pgUser,
    password: pgPassword,
  }),
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
