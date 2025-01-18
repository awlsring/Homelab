import { Construct } from "constructs";

export interface Secret {
  readonly value: string;
}

export interface ISecretProvider {
  retrieveSecret(name: string): Secret;
}

export interface ISecretProviderFactory {
  create(scope: Construct, name: string): ISecretProvider;
}
