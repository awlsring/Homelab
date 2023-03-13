import { TerraformStack } from "cdktf";
import { Construct } from "constructs";
import { SurrealBackend } from "@awlsring/cdktf-surreal-backend";
import { SecretProvider, SecretProviderProps } from "./secret-provider/secret-provider";

export interface HomelabStackProps {
  project: string;
  backend: BackendProps;
  secretProvider?: SecretProviderProps;
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
      this.secretProvider = props.secretProvider.create(this, name, props.secretProvider.params);
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