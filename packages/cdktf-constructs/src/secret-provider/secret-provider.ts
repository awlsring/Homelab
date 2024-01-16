import { Construct } from "constructs";

export interface Secret {
  readonly key: string;
  readonly value: string;
}

export interface ISecretProvider {
  retrieveSecret(name: string): Secret;
}

export interface ISecretProviderFactory {
  createSecretProvider(scope: Construct, name: string): ISecretProvider;
}
