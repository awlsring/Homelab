import { Deployment, DeploymentProps } from "cdk8s-plus-31";
import { Construct } from "constructs";

export interface HomelabDeploymentProps extends DeploymentProps {}

export enum GpuType {
  INTEL_INTEGRATED = "gpu.intel.com/i915",
}

export class HomelabDeployment extends Deployment {
  constructor(scope: Construct, name: string, props: HomelabDeploymentProps) {
    super(scope, name, props);
  }
}
