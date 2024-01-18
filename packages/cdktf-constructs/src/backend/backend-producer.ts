import { TerraformBackend } from "cdktf";
import { Construct } from "constructs";

export interface IBackendCreator {
  create(scope: Construct): TerraformBackend;
}
