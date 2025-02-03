import {
  HomelabStack,
  HomelabStackProps,
} from "../constructs/stacks/homelab-stack";
import { Construct } from "constructs";
import { Bucket } from "../../.gen/providers/b2/bucket";
import { B2Provider } from "../../.gen/providers/b2/provider";

export interface StorageBackupStackProps extends HomelabStackProps {
  readonly accessKeyIdSecretName: string;
  readonly secretAccessKeySecretName: string;
}

export class StorageBackupStack extends HomelabStack {
  constructor(scope: Construct, name: string, props: StorageBackupStackProps) {
    super(scope, name, props);

    const accessKeyId = this.secretProvider.retrieveSecret(
      props.accessKeyIdSecretName
    );
    const secretAccessKey = this.secretProvider.retrieveSecret(
      props.secretAccessKeySecretName
    );

    new B2Provider(this, "provider", {
      applicationKeyId: accessKeyId.value,
      applicationKey: secretAccessKey.value,
    });

    new Bucket(this, "cnpg-backups", {
      bucketName: "awlsring-homelab-cnpg-db-backups",
      bucketType: "allPrivate",
    });
  }
}
