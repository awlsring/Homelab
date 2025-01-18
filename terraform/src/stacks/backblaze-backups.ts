import { HomelabStack, HomelabStackProps } from "../constructs/stacks/homelab-stack";
import { Construct } from "constructs";
import { Bucket } from "../../.gen/providers/b2/bucket";
import { B2Provider } from "../../.gen/providers/b2/provider";

export interface StorageBackupStackProps extends HomelabStackProps {
  readonly secretName: string;
}

export class StorageBackupStack extends HomelabStack {
  constructor(scope: Construct, name: string, props: StorageBackupStackProps) {
    super(scope, name, props);

    const providerSecret = this.secretProvider.retrieveSecret(props.secretName);

    new B2Provider(this, "provider", {
      applicationKey: providerSecret.value,
    });

    new Bucket(this, "bucket", {
      bucketName: "awlsring-storage-backup",
      bucketType: "allPrivate",
    });
  }
}
