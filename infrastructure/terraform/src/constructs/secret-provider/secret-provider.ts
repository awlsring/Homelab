import { Construct } from "constructs";

export interface SecretProviderProps {
  create: (scope: Construct, name: string, props: any) => SecretProvider;
  params: any;
}

export interface Secret {
  key: string;
  value: string;
}

export interface SecretProvider {
  retrieveSecret(name: string): Secret;
}