import { Construct } from 'constructs';
import { Secret, SecretProvider } from './secret-provider';
import { DataOnepasswordItem } from '../../.gen/providers/onepassword/data-onepassword-item';
import { DataOnepasswordVault } from '../../.gen/providers/onepassword/data-onepassword-vault';
import { OnepasswordProvider } from '../../.gen/providers/onepassword/provider';

export function CreateOnepasswordSecretsProvider(
  scope: Construct,
  name: string,
  props: OnepasswordSecretProviderProps
): SecretProvider {
  return new OnepasswordSecretProvider(scope, name, props);
}

export interface OnepasswordSecretProviderProps {
  url: string;
  token: string;
  vault: string;
}

export class OnepasswordSecretProvider extends Construct implements SecretProvider {
  private readonly vault: DataOnepasswordVault;
  constructor(scope: Construct, name: string, props: OnepasswordSecretProviderProps) {
    super(scope, name);

    new OnepasswordProvider(this, 'provider', {
      url: props.url,
      token: "eyJhbGciOiJFUzI1NiIsImtpZCI6Im1yZno1d2J6enNrMnR5NnNldzJnbWNjcTNtIiwidHlwIjoiSldUIn0.eyIxcGFzc3dvcmQuY29tL2F1dWlkIjoiTUJDRUk2TFE3TkY3TlBPM1ZXQkQ0VlM3SFEiLCIxcGFzc3dvcmQuY29tL3Rva2VuIjoienB0bGcwSmR1dHZFeGFwNjUwUDlGWUw3YXBKcEJUSDkiLCIxcGFzc3dvcmQuY29tL2Z0cyI6WyJ2YXVsdGFjY2VzcyJdLCIxcGFzc3dvcmQuY29tL3Z0cyI6W3sidSI6InYyNWZjenA3NmN0eDV5czNkZmxybWo1bnBpIiwiYSI6NDh9XSwiYXVkIjpbImNvbS4xcGFzc3dvcmQuY29ubmVjdCJdLCJzdWIiOiJPSVJXUjRPVlVWRVczSEE2V0ZCRzRWS1hSUSIsImlhdCI6MTY3MzA3NjU2MCwiaXNzIjoiY29tLjFwYXNzd29yZC5iNSIsImp0aSI6Im5rbmV4Z3pha3F2cDVnNG5ndDJiZW8zdnZtIn0._ZCQwH8Ueu2ayD5EMIaOyTpgbRMHL3NyJty84lOFBahCO69uXwXv7uLYq4SifVOi9i1_zrSykDxf7u9eIfGHxA",
      // alias: `onepassword-${name}`
    });

    this.vault = new DataOnepasswordVault(this, 'vault', {
      name: props.vault,
    });
  }

  retrieveSecret(name: string): Secret {
    const secret = new DataOnepasswordItem(this, `${name}-secret`, {
      vault: this.vault.uuid,
      title: name,
    });
    return {
      key: secret.username,
      value: secret.password,
    };
  }
}