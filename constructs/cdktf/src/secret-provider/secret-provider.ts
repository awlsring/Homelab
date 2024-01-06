export interface Secret {
  readonly key: string;
  readonly value: string;
}

export interface SecretProvider {
  retrieveSecret(name: string): Secret;
}
