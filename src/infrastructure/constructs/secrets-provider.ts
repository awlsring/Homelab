export interface Secret {
  key: string;
  value: string;
}

export interface SecretsProvider {
  retrieveSecret(name: string): Secret;
}