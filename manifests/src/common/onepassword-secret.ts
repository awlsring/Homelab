import { EnvValue, ISecret, Secret } from 'cdk8s-plus-25';
import { Construct } from 'constructs';
import { OnePasswordItem } from '../imports/onepassword.com';

export interface OnepasswordSecretProps {
  readonly secretName: string;
  readonly vault: string;
  readonly kubeSecretName?: string;
}

/*
* Creates a OnepasswordItem for the specified secret passed in
* Will present a value of "Secret" that can be used to refer to the mirrored secret
* that is created from the operator
*/
export class OnepasswordSecret extends Construct {
  readonly secretName: string;
  readonly secret: ISecret;
  readonly item: OnePasswordItem;

  constructor(scope: Construct, name: string, props: OnepasswordSecretProps) {
    super(scope, name);

    this.secretName = props.kubeSecretName ?? props.secretName;

    this.item = new OnePasswordItem(this, 'onepassword', {
      metadata: {
        name: this.secretName,
      },
      spec: {
        itemPath: `vaults/${props.vault}/items/${props.secretName}`,
      },
    });

    this.secret = Secret.fromSecretName(this, 'secret', this.secretName);
  }

  credentialAsEnvValue(): EnvValue {
    return EnvValue.fromSecretValue({ secret: this.secret, key: 'credential' });
  }

  asEnvValue(key: string): EnvValue {
    return EnvValue.fromSecretValue({ secret: this.secret, key });
  }
}
