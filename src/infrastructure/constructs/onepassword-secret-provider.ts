import { Construct } from 'constructs';
import { Secret, SecretsProvider } from './secrets-provider';
import { DataOnepasswordItem } from '../../.gen/providers/onepassword/data-onepassword-item';
import { DataOnepasswordVault } from '../../.gen/providers/onepassword/data-onepassword-vault';
import { OnepasswordProvider } from '../../.gen/providers/onepassword/provider';

export function CreateOnepasswordSecretsProvider(scope: Construct, name: string, props: OnepasswordSecretsProviderProps): SecretsProvider {
  return new OnepasswordSecretsProvider(scope, name, props);
}

export interface OnepasswordSecretsProviderProps {
  url: string;
  token: string;
  vault: string;
}

export class OnepasswordSecretsProvider extends Construct implements SecretsProvider {
  private readonly vault: DataOnepasswordVault;
  constructor(scope: Construct, name: string, props: OnepasswordSecretsProviderProps) {
    super(scope, name);

    new OnepasswordProvider(this, 'provider', {
      url: props.url,
      token: props.token,
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