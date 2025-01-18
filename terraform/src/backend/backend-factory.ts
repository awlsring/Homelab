import { TerraformBackend } from "cdktf";
import { Construct } from "constructs";

export interface IBackendFactory {
  create(scope: Construct): TerraformBackend;
}
