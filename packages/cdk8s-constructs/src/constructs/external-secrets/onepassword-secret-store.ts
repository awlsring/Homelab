import { Construct } from "constructs";
import { ClusterSecretStoreV1Beta1 } from "../../imports/external-secrets.io";
import { NamespaceSecretReference } from "../secret-reference";
import { ApiObject } from "cdk8s";
import { SecretStore } from "./secret-store";

export interface OnePasswordSecretStoreProps {
  readonly connectHost: string;
  readonly vaults: string[];
  readonly connectTokenRef: NamespaceSecretReference;
  readonly storeName?: string;
}

export class OnePasswordClusterSecretStore extends SecretStore {
  protected readonly apiObject: ApiObject;
  readonly resourceType = "ClusterSecretStore";
  readonly storeType = "ClusterSecretStore";
  constructor(
    scope: Construct,
    name: string,
    props: OnePasswordSecretStoreProps,
  ) {
    super(scope, name);

    this.apiObject = new ClusterSecretStoreV1Beta1(this, "store", {
      metadata: {
        name: props.storeName ?? name,
      },
      spec: {
        provider: {
          onepassword: {
            connectHost: props.connectHost,
            vaults: this.vaultListToRecord(props.vaults),
            auth: {
              secretRef: {
                connectTokenSecretRef: props.connectTokenRef,
              },
            },
          },
        },
      },
    });
  }

  private vaultListToRecord(vaults: string[]): Record<string, number> {
    const vaultsRecord: Record<string, number> = {};
    vaults.forEach((vault, i) => {
      vaultsRecord[vault] = i + 1;
    });
    return vaultsRecord;
  }
}
