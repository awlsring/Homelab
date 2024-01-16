import { TerraformStack } from "cdktf";
import { Construct } from "constructs";
import { SecretProvider } from "../secret-provider/secret-provider";

export interface HomelabStackProps {
  readonly project: string;
  readonly backend: BackendProps;
  readonly secretProvider?: (scope: Construct, name: string) => SecretProvider;
}

export interface BackendProps {
  address: string;
  username: string;
  password: string;
}

export class HomelabStack extends TerraformStack {
  readonly secretProvider?: SecretProvider;
  constructor(scope: Construct, name: string, props: HomelabStackProps) {
    super(scope, name);

    if (props.secretProvider) {
      this.secretProvider = props.secretProvider(this, name);
    }
  }
}
