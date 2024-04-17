import { ApiObject } from "cdk8s";
import { Construct } from "constructs";

export interface CredentialSecretReference {
  readonly name: string;
  readonly namespace: string;
  readonly key: string;
}

export interface BaseProviderConfigProps {
  readonly apiVersion: string;
  readonly name: string;
  readonly credentialSecret: CredentialSecretReference;
}

export abstract class ProviderConfig extends ApiObject {
  public static readonly k: string = "ProviderConfig";

  public constructor(
    scope: Construct,
    id: string,
    props: BaseProviderConfigProps,
  ) {
    super(scope, id, {
      apiVersion: props.apiVersion,
      kind: ProviderConfig.k,
      metadata: {
        name: props.name,
      },
      spec: {
        source: "Secret",
        secretRef: props.credentialSecret,
      },
    });
  }
}

export interface ProviderConfigProps {
  readonly name: string;
  readonly credentialSecret: CredentialSecretReference;
}

export class AWSProviderConfig extends ProviderConfig {
  public static readonly v = "pkg.crossplane.io/v1";

  public constructor(scope: Construct, id: string, props: ProviderConfigProps) {
    super(scope, id, {
      apiVersion: AWSProviderConfig.v,
      name: props.name,
      credentialSecret: props.credentialSecret,
    });
  }
}
