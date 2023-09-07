import { ApiResource, ClusterRole, ClusterRoleBinding, Deployment, EnvValue, ServiceAccount } from 'cdk8s-plus-25';
import { Construct } from 'constructs';
import { HomelabChart, HomelabChartProps } from '../../common/homelab-charts';
import { OnepasswordSecret } from '../../common/onepassword-secret';

export interface ExternalDnsPiholeChartProps extends HomelabChartProps {
  readonly address: string;
  readonly passwordSecretName: string;
  readonly version?: string;
  readonly skipVerify?: boolean;
}

export class ExternalDnsPiholeChart extends HomelabChart {
  readonly deployment: Deployment;

  constructor(scope: Construct, name: string, props: ExternalDnsPiholeChartProps) {
    super(scope, name, props);

    const onepassSecret = new OnepasswordSecret(this, 'password', {
      secretName: props.passwordSecretName,
      vault: 'Homelab',
    });

    const account = new ServiceAccount(this, 'service-account');

    const role = new ClusterRole(this, 'cluster-role', {
      rules: [
        {
          verbs: ['get', 'list', 'watch'],
          endpoints: [
            ApiResource.NODES,
            ApiResource.ENDPOINTS,
            ApiResource.SERVICES,
            ApiResource.PODS,
            ApiResource.custom({
              apiGroup: 'extensions',
              resourceType: 'ingresses',
            }),
            ApiResource.custom({
              apiGroup: 'networking.k8s.io',
              resourceType: 'ingresses',
            }),
          ],
        },
      ],
    });

    const binding = new ClusterRoleBinding(this, 'cluster-role-bind', {
      role: role,
    });
    binding.addSubjects(account);


    const env: Record<string, EnvValue> = {
      EXTERNAL_DNS_PIHOLE_SERVER: EnvValue.fromValue(props.address),
      EXTERNAL_DNS_PIHOLE_TLS_SKIP_VERIFY: EnvValue.fromValue(String(props.skipVerify ?? true)),
      EXTERNAL_DNS_PIHOLE_PASSWORD: onepassSecret.credentialAsEnvValue(),
    };

    this.deployment = new Deployment(this, 'deployment', {
      replicas: 1,
      containers: [
        {
          name: 'external-dns',
          image: `registry.k8s.io/external-dns/external-dns:${props.version ?? 'v0.13.4'}`,
          envVariables: env,
          args: [
            '--source=service',
            '--source=ingress',
            '--registry=noop',
            '--policy=upsert-only',
            '--provider=pihole',
          ],
          resources: {},
        },
      ],
      automountServiceAccountToken: true,
      securityContext: {
        fsGroup: 65534,
      },
    });
  }
}