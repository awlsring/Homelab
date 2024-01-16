import { JsonPatch } from "cdk8s";
import { Deployment, DeploymentProps } from "cdk8s-plus-27";
import { Construct } from "constructs";

export interface HomelabDeploymentProps extends DeploymentProps {}

export enum GpuType {
  INTEL_INTEGRATED = "gpu.intel.com/i915",
}

export class HomelabDeployment extends Deployment {
  constructor(scope: Construct, name: string, props: HomelabDeploymentProps) {
    super(scope, name, props);
  }

  addGpuToContainer(gpu: GpuType, containerIndex?: number) {
    const index = containerIndex ?? 0;
    // hacky patch because of this bug https://github.com/cdk8s-team/cdk8s/issues/1184
    const json =
      this.apiObject.toJson().spec.template.spec.containers[index].resources;

    const limitRec: Record<string, any> = {
      [gpu]: { value: "1" },
    };
    const requestRec: Record<string, any> = {
      [gpu]: { value: "1" },
    };

    if (json.limits.cpu) {
      limitRec.cpu = { value: json.limits.cpu };
    }

    if (json.requests.cpu) {
      requestRec.cpu = { value: json.requests.cpu };
    }

    if (json.limits.memory) {
      limitRec.memory = { value: json.limits.memory };
    }

    if (json.requests.memory) {
      requestRec.memory = { value: json.requests.memory };
    }

    this.apiObject.addJsonPatch(
      JsonPatch.add(
        `/spec/template/spec/containers/${index}/resources/limits`,
        limitRec,
      ),
    );

    this.apiObject.addJsonPatch(
      JsonPatch.add(
        `/spec/template/spec/containers/${index}/resources/requests`,
        requestRec,
      ),
    );
  }
}
