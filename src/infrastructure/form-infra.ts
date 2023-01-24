import { App, TerraformStack } from 'cdktf';
import { CreateOnepasswordSecretsProvider } from './constructs/onepassword-secret-provider';
import { DataStoreStack } from './stacks/data-store';
export function FormInfraStacks(app: App): TerraformStack[] {
  const stacks: TerraformStack[] = [];

  const onepasswordUrl = process.env.ONEPASSWORD_CONNECT_URL;
  const onepasswordToken = process.env.ONEPASSWORD_CONNECT_TOKEN;
  if (!onepasswordToken || !onepasswordUrl) {
    throw new Error('Missing token url or id');
  }

  const backendUser = process.env.BACKEND_USER;
  const backendPassword = process.env.BACKEND_PASSWORD;
  if (!backendUser || !backendPassword) {
    throw new Error('Missing backend user or password');
  }

  const genericProps = {
    project: 'homelab',
    backend: {
      address: 'https://tf-backend.awlsring-sea.drigs.org',
      username: backendUser,
      password: backendPassword,
    },
  };

  const datastore = new DataStoreStack(app, 'dataStore', {
    stack: 'datastore',
    url: 'http://10.0.10.150/api/v2.0',
    secretName: 'truenas-token',
    secretsProvider: {
      create: CreateOnepasswordSecretsProvider,
      params: {
        url: onepasswordUrl,
        token: onepasswordToken,
        vault: 'Homelab',
      },
    },
    ...genericProps,
  });
  stacks.push(datastore);

  return stacks;
}