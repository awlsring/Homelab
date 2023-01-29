import * as path from 'path';
import { ConfigMap, Deployment, EnvValue, Secret, Service, ServiceType, Volume } from 'cdk8s-plus-25';
import { Construct } from 'constructs';
import { HomelabChart, HomelabChartProps } from '../../common/homelab-charts';

export interface TerraformBackendSurrealProps extends HomelabChartProps {}

export class TerraformBackendSurrealChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: TerraformBackendSurrealProps) {
    super(scope, name, props);
    const config = new ConfigMap(this, 'Config');
    config.addFile(path.join(__dirname, 'config.yaml'));

    const configVolume = Volume.fromConfigMap(this, 'config-volume', config);

    const secret = Secret.fromSecretName(this, 'users', 'users');
    const db = Secret.fromSecretName(this, 'dbcreds', 'dbcreds');
    const usersVol = Volume.fromSecret(this, 'users-volume', secret);

    const deployment = new Deployment(this, 'deployment', {
      containers: [
        {
          image: 'ghcr.io/awlsring/terraform-backend-surreal:latest',
          port: 8032,
          envVariables: {
            CONFIG_PATH: EnvValue.fromValue('/config/config.yaml'),
            USERS_PATH: EnvValue.fromValue('/users/users.yaml'),
            DB_USER: EnvValue.fromSecretValue({ secret: db, key: 'user' }),
            DB_PASSWORD: EnvValue.fromSecretValue({ secret: db, key: 'password' }),
          },
          volumeMounts: [
            {
              path: '/config',
              volume: configVolume,
            },
            {
              path: '/users',
              volume: usersVol,
            },
          ],
          securityContext: {
            allowPrivilegeEscalation: false,
            user: 1000,
          },
        },
      ],
    });

    const service = new Service(this, 'service', {
      type: ServiceType.CLUSTER_IP,
      selector: deployment,
      ports: [
        {
          port: 8032,
          targetPort: 8032,
        },
      ],
    });

    if (props.tls) {
      this.configureTls(props.tls.name, props.tls.certIssuer, props.tls.dnsNames, service);
    }

  }
}