import { TerraformBackend, TerraformStack } from "cdktf";
import { Construct } from "constructs";
import {
  ISecretProvider,
  ISecretProviderCreator,
} from "../secret-provider/secret-provider";
import { IBackendCreator } from "../backend/backend-producer";

export interface HomelabStackProps {
  readonly project: string;
  readonly backendCreator: IBackendCreator;
  readonly secretProviderCreator?: ISecretProviderCreator;
}

export interface BackendProps {
  readonly address: string;
  readonly username: string;
  readonly password: string;
}

export class HomelabStack extends TerraformStack {
  readonly backend: TerraformBackend;
  readonly secretProvider?: ISecretProvider;
  constructor(scope: Construct, name: string, props: HomelabStackProps) {
    super(scope, name);

    this.backend = props.backendCreator.create(this);

    if (props.secretProviderCreator) {
      this.secretProvider = props.secretProviderCreator.create(this, name);
    }
  }
}
