import { Construct } from "constructs";
import { ExternalSecretV1Beta1 } from "../../imports/external-secrets.io";

export enum SecretStoreType {
  STANDARD = "SecretStore",
  CLUSTER = "ClusterSecretStore",
}

export interface ExternalSecretProps {
  readonly secretStore: string;
  readonly secretStoreType: SecretStoreType;
  readonly secretKey: string;
}

/**
 * https://external-secrets.io/latest/provider/1password-automation/
 */
export class OnepasswordSecretPassword extends Construct {
  constructor(scope: Construct, name: string, props: ExternalSecretProps) {
    super(scope, name);

    new ExternalSecretV1Beta1(this, name, {
      metadata: {
        name: name,
      },
      spec: {
        secretStoreRef: {
          name: props.secretStore,
          kind: props.secretStoreType,
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
}
