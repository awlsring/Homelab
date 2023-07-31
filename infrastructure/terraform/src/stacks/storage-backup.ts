import { Construct } from 'constructs';
import { HomelabStack, HomelabStackProps } from './homelab-stack';
import { B2Provider } from '../.gen/providers/b2/provider';
import { Bucket } from '../.gen/providers/b2/bucket';

export interface StorageBackupStackProps extends HomelabStackProps {
  secretName: string;
}

export class StorageBackupStack extends HomelabStack {
  constructor(scope: Construct, name: string, props: StorageBackupStackProps) {
    super(scope, name, props);

    if (this.secretProvider === undefined) {
      throw new Error('Secret provider not set');
    }

    const providerSecret = this.secretProvider.retrieveSecret(props.secretName);
    new B2Provider(this, 'provider', {
      applicationKeyId: providerSecret.key,
      applicationKey: providerSecret.value,
    });

    new Bucket(this, 'bucket', {
      bucketName: 'awlsring-storage-backup',
      bucketType: 'allPrivate',
      lifecycleRules: [
        {
          daysFromHidingToDeleting: 1,
          daysFromUploadingToHiding: 0,
          fileNamePrefix: '',
        }
      ]
    });

    // make a cloudsync task to backup the storage bucket with truenas
  }
}