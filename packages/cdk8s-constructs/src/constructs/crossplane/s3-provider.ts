import { Construct } from "constructs";
import { Provider } from "./provider";
import {
  AWSProviderConfig,
  CredentialSecretReference,
} from "./provider-config";

export interface S3ProviderProps {
  readonly credentialSecretRef: CredentialSecretReference;
}

export class S3Provider extends Provider {
  constructor(scope: Construct, id: string, props: S3ProviderProps) {
    super(scope, id, {
      name: "provider-aws-s3",
      package: "xpkg.upbound.io/upbound/provider-aws-s3:v1.1.0",
    });

    new AWSProviderConfig(this, "config", {
      name: "default",
      credentialSecret: props.credentialSecretRef,
    });
  }
}
