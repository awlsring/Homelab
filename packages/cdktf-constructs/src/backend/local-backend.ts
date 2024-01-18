import { Construct } from "constructs";
import { IBackendCreator } from "./backend-producer";
import { LocalBackend, TerraformBackend } from "cdktf";

export interface LocalBackendProps {
  readonly path?: string;
  readonly workspaceDir?: string;
}

export class LocalBackendCreator implements IBackendCreator {
  constructor(private readonly props?: LocalBackendProps) {}

  create(scope: Construct): TerraformBackend {
    return new LocalBackend(scope, {
      path: this.props?.path,
      workspaceDir: this.props?.workspaceDir,
    });
  }
}
