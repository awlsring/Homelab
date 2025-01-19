import { Construct } from "constructs";
import {
  ExternalSecretV1Beta1,
  ExternalSecretV1Beta1SpecSecretStoreRefKind,
} from "../../imports/external-secrets.io";
import { ISecret, Resource, Secret, SecretValue } from "cdk8s-plus-31";
import { ApiObject } from "cdk8s";
import { ISecretStore } from "./secret-store";

export interface ExternalSecretProps {
  readonly store: ISecretStore;
  readonly secretKey: string;
}

/**
 * https://external-secrets.io/latest/provider/1password-automation/
 */
export class OnepasswordSecretPassword extends Resource {
  protected readonly apiObject: ApiObject;
  readonly resourceType = "ExternalSecret";
  readonly secretName: string;
  constructor(scope: Construct, name: string, props: ExternalSecretProps) {
    super(scope, name);

    this.secretName = props.secretKey;

    this.apiObject = new ExternalSecretV1Beta1(this, name, {
      spec: {
        secretStoreRef: {
          name: props.store.name,
          kind: props.store
            .storeType as unknown as ExternalSecretV1Beta1SpecSecretStoreRefKind,
        },
        dataFrom: [
          {
            extract: {
              key: props.secretKey,
            },
          },
        ],
      },
    });
  }

  asSecret(): ISecret {
    return Secret.fromSecretName(this, `${this.name}-kube-secret`, this.name);
  }

  asSecretValue(key?: string): SecretValue {
    return {
      secret: this.asSecret(),
      key: key ?? "password",
    };
  }
}
