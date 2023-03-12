import { TerraformStack } from "cdktf";
import { Construct } from "constructs";
import { SurrealBackend } from "@awlsring/cdktf-surreal-backend";
import { SecretProvider } from "./secret-provider/secret-provider";

export interface SecretProviderProps {
  create: (scope: Construct, name: string, props: any) => SecretProvider;
  params: any;
}

export interface HomelabStackProps {
  project: string;
  stack: string;
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
      this.secretProvider = props.secretProvider.create(this, 'secret-provider', props.secretProvider.params);
    }

    new SurrealBackend(this, {
      address: props.backend.address,
      username: props.backend.username,
      password: props.backend.password,
      project: props.project,
      stack: props.stack,
    });
  }
}