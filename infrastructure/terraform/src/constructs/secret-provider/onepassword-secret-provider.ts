import { Construct } from 'constructs';
import { Secret, SecretProvider } from './secret-provider';
import { DataOnepasswordItem } from '../../.gen/providers/onepassword/data-onepassword-item';
import { DataOnepasswordVault } from '../../.gen/providers/onepassword/data-onepassword-vault';
import { OnepasswordProvider } from '../../.gen/providers/onepassword/provider';

export function OnepasswordSecretsProviderModule(props: OnepasswordSecretProviderProps) {
  return function(scope: Construct, name: string) {
    return new OnepasswordSecretProvider(scope, name, props);
  }
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