import { SurrealBackend } from '@awlsring/cdktf-surreal-backend';
import { TerraformStack } from 'cdktf';
import { Construct } from 'constructs';
import { SecretsProvider } from './secrets-provider';

export interface SecretsProviderProps {
  create: (scope: Construct, name: string, props: any) => SecretsProvider;
  params: any;
}

export interface HomelabStackProps {
  project: string;
  stack: string;
  backend: BackendProps;
  secretsProvider: SecretsProviderProps;
}

export interface BackendProps {
  address: string;
  username: string;
  password: string;
}

export class HomelabStack extends TerraformStack {
  constructor(scope: Construct, name: string, props: HomelabStackProps) {
    super(scope, name);

    new SurrealBackend(this, {
      address: props.backend.address,
      username: props.backend.username,
      password: props.backend.password,
      project: props.project,
      stack: props.stack,
    });
  }
}