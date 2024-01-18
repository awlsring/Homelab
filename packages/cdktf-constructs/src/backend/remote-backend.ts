import { Construct } from "constructs";
import { IBackendCreator } from "./backend-producer";
import {
  NamedCloudWorkspace,
  RemoteBackend,
  TaggedCloudWorkspaces,
  TerraformBackend,
} from "cdktf";

export interface RemoteBackendProps {
  readonly hostname: string;
  readonly organization: string;
  readonly workspace: NamedCloudWorkspace | TaggedCloudWorkspaces;
  readonly token?: string;
}

export class RemoteBackendCreator implements IBackendCreator {
  constructor(private readonly props: RemoteBackendProps) {}

  create(scope: Construct): TerraformBackend {
    return new RemoteBackend(scope, {
      hostname: this.props.hostname,
      organization: this.props.organization,
      workspaces: this.props.workspace,
      token: this.props.token,
    });
  }
}
