import { TerraformStack } from "cdktf";
import { Construct } from "constructs";
import {
  ISecretProvider,
  ISecretProviderFactory,
} from "../secret-provider/secret-provider";

export interface HomelabStackProps {
  readonly project: string;
  readonly backend: BackendProps;
  readonly secretProviderFactory?: ISecretProviderFactory;
}

export interface BackendProps {
  readonly address: string;
  readonly username: string;
  readonly password: string;
}

export class HomelabStack extends TerraformStack {
  readonly secretProvider?: ISecretProvider;
  constructor(scope: Construct, name: string, props: HomelabStackProps) {
    super(scope, name);

    if (props.secretProviderFactory) {
      this.secretProvider = props.secretProviderFactory.createSecretProvider(
        this,
        name,
      );
    }
  }
}
