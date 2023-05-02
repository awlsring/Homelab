import { ApiResource, IServiceAccount, Role, RoleBinding, Secret, ServiceAccount } from 'cdk8s-plus-25';
import { Construct } from 'constructs';

export interface TailscaleAuthSecretServiceAccountOptions {
  readonly namespace: string;
  readonly name: string;
}

export interface TailscaleAuthSecretProps {
  readonly secret?: Secret;
  readonly serviceAccount?: TailscaleAuthSecretServiceAccountOptions;
  readonly authKey?: string;
}

export class TailscaleAuthSecret extends Construct {
  readonly role: Role;
  readonly serviceAccount: IServiceAccount;
  readonly secret: Secret;
  readonly roleBinding: RoleBinding;

  constructor(scope: Construct, name: string, props: TailscaleAuthSecretProps) {
    super(scope, name);

    if (props.secret && props.authKey) {
      throw new Error('Cannot specify both secret and authKey');
    }

    if (props.secret) {
      this.secret = props.secret;
    } else if (props.authKey) {
      this.secret = new Secret(this, 'secret', {
        stringData: {
          TS_AUTHKEY: props.authKey,
        },
      });
    } else {
      throw new Error('Must specify either secret or authKey');
    }

    this.serviceAccount = this.determineServiceAccount(props.serviceAccount);

    this.role = this.createSecretRole(this.secret);

    this.roleBinding = new RoleBinding(this, 'role-binding', {
      role: this.role,
    });
    this.roleBinding.addSubjects(this.serviceAccount);
  }

  private determineServiceAccount(serviceAccount?: TailscaleAuthSecretServiceAccountOptions): IServiceAccount {
    if (serviceAccount) {
      return ServiceAccount.fromServiceAccountName(this, 'account', serviceAccount.name, {
        namespaceName: serviceAccount.namespace,
      });
    }
    return new ServiceAccount(this, 'service-account');
  }

  private createSecretRole(secret: Secret): Role {
    const role = new Role(this, 'role');
    role.allowCreate(ApiResource.SECRETS);
    const secretResource = {
      apiGroup: '',
      resourceType: 'secrets',
      resourceName: secret.name,
    };
    role.allowGet(secretResource);
    role.allowUpdate(secretResource);
    role.allowPatch(secretResource);

    return role;
  }
}