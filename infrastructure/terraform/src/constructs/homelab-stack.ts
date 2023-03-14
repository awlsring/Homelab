import { TerraformStack } from "cdktf";
import { Construct } from "constructs";
import { SurrealBackend } from "@awlsring/cdktf-surreal-backend";
import { SecretProvider } from "./secret-provider/secret-provider";

export interface HomelabStackProps {
  project: string;
  backend: BackendProps;
  secretProvider?: (scope: Construct, name: string) => SecretProvider
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
    
    const stackName = name.replace(/-/g, '_');
    new SurrealBackend(this, {
      address: props.backend.address,
      username: props.backend.username,
      password: props.backend.password,
      project: props.project,
      stack: stackName,
    });
  }
}