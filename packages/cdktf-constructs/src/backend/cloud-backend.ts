import { Construct } from "constructs";
import { IBackendCreator } from "./backend-producer";
import {
  CloudBackend,
  NamedCloudWorkspace,
  TaggedCloudWorkspaces,
  TerraformBackend,
} from "cdktf";

export interface CloudBackendProps {
  readonly hostname: string;
  readonly organization: string;
  readonly workspace: NamedCloudWorkspace | TaggedCloudWorkspaces;
  readonly token?: string;
}

export class CloudBackendCreator implements IBackendCreator {
  constructor(private readonly props: CloudBackendProps) {}

  create(scope: Construct): TerraformBackend {
    return new CloudBackend(scope, {
      hostname: this.props.hostname,
      organization: this.props.organization,
      workspaces: this.props.workspace,
      token: this.props.token,
    });
  }
}
