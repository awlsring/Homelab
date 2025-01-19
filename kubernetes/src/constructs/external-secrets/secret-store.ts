import { IResource, Resource } from "cdk8s-plus-31";
import { Construct } from "constructs";

export enum SecretStoreType {
  SECRET_STORE = "SecretStore",
  CLUSTER_SECRET_STORE = "ClusterSecretStore",
}

export interface ISecretStore extends IResource {
  readonly storeType: SecretStoreType;
}

export abstract class SecretStore extends Resource implements ISecretStore {
  abstract readonly resourceType: string;
  abstract readonly storeType: SecretStoreType;

  public get kind(): string {
    return this.storeType;
  }

  public get apiGroup(): string {
    return "";
  }

  public get apiVersion(): string {
    return "external-secrets.io/v1beta1";
  }

  static fromName(
    scope: Construct,
    name: string,
    type: SecretStoreType
  ): ISecretStore {
    return new ImportedSecretStore(scope, name, type);
  }
}

export class ImportedSecretStore extends Construct implements ISecretStore {
  readonly name: string;
  readonly storeType: SecretStoreType;
  readonly resourceType: string;

  public get kind(): string {
    return this.storeType;
  }

  public get apiGroup(): string {
    return "";
  }

  public get apiVersion(): string {
    return "external-secrets.io/v1beta1";
  }

  constructor(scope: Construct, name: string, type: SecretStoreType) {
    super(scope, name);
    this.name = name;
    this.storeType = type;
    this.resourceType = type;
  }
}
