import { Construct } from "constructs";
import { IBackendFactory } from "./backend-factory";
import { LocalBackend, TerraformBackend } from "cdktf";

export interface LocalBackendOptions {
  readonly path?: string;
  readonly workspaceDir?: string;
}

export class LocalBackendFactory implements IBackendFactory {
  constructor(private readonly props?: LocalBackendOptions) {}

  create(scope: Construct): TerraformBackend {
    return new LocalBackend(scope, {
      path: this.props?.path,
      workspaceDir: this.props?.workspaceDir,
    });
  }
}
