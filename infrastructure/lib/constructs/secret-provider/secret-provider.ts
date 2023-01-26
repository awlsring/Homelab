export interface Secret {
  key: string;
  value: string;
}

export interface SecretProvider {
  retrieveSecret(name: string): Secret;
}