import { Construct } from 'constructs';

import { Dataset } from '../../.gen/providers/truenas/dataset';
import { TruenasProvider } from '../../.gen/providers/truenas/provider';
import { HomelabStack, HomelabStackProps } from '../constructs/homelab-stack';

export interface DatastoreStackProps extends HomelabStackProps {
  url: string;
  secretName: string;
}

export class DataStoreStack extends HomelabStack {
  private wd6d8tPool = 'WD-6D-8T';
  constructor(scope: Construct, name: string, props: DatastoreStackProps) {
    super(scope, name, props);

    const secrets = props.secretsProvider.create(this, 'secret-provider', props.secretsProvider.params);

    new TruenasProvider(this, 'provider', {
      baseUrl: props.url,
      apiKey: secrets.retrieveSecret('truenas-token').value,
    });

    new Dataset(this, 'dataset', {
      pool: this.wd6d8tPool,
      name: 's3',
      comments: 'S3 bucket storage',
    });

    new Dataset(this, 'dataset-appdata', {
      pool: this.wd6d8tPool,
      name: 'appdata',
      comments: 'Dataset for app data',
    });

    new Dataset(this, 'dataset-home', {
      pool: this.wd6d8tPool,
      name: 'home',
      comments: 'Home drirectory roots',
    });
  }
}