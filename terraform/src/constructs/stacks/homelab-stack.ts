import { TerraformBackend, TerraformStack } from "cdktf";
import { Construct } from "constructs";
import {
  ISecretProvider,
  ISecretProviderFactory,
} from "../../secret-provider/secret-provider";
import { IBackendFactory } from "../../backend/backend-factory";

export interface HomelabStackProps {
  readonly backendFactory: IBackendFactory;
  readonly secretProviderFactory: ISecretProviderFactory;
}

export class HomelabStack extends TerraformStack {
  readonly backend: TerraformBackend;
  readonly secretProvider: ISecretProvider;
  constructor(scope: Construct, id: string, props: HomelabStackProps) {
    super(scope, id);

    this.backend = props.backendFactory.create(this);
    this.secretProvider = props.secretProviderFactory.create(this, id);
    
  }
}
