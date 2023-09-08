import { Duration, Size } from 'cdk8s';
import { ConfigMap, ConnectionScheme, Deployment, EnvValue, PersistentVolumeAccessMode, Probe, Protocol, ServiceType, Volume } from 'cdk8s-plus-25';
import { Construct } from 'constructs';
import { HomelabChart, HomelabChartProps } from '../../common/homelab-charts';
import { HomelabService } from '../../common/homelab-service';
import { OnepasswordSecret } from '../../common/onepassword-secret';

export interface TandoorChartProps extends HomelabChartProps {
  readonly options: TandoorOptions;
  readonly databaseOptions: DatabaseOptions;
}

export enum TandoorDatabaseEngine {
  POSTGRES = 'django.db.backends.postgresql',
}

export interface DatabaseOptions {
  readonly engine: TandoorDatabaseEngine;
  readonly host: string;
  readonly port?: number;
  readonly user: string;
  readonly passwordSecretName: string;
  readonly database: string;
}

export interface TandoorOptions {
  readonly secretKeySecretName: string;
  readonly image?: string;
  readonly timezone?: string;
  readonly metrics?: boolean;
  readonly staticFileVolSize?: Size;
  readonly mediaFileVolSize?: Size;
  readonly enableSignUp?: boolean;
}

export class TandoorChart extends HomelabChart {

  constructor(scope: Construct, name: string, props: TandoorChartProps) {
    super(scope, name, props);

    const nginxConfig = new ConfigMap(this, 'nginx-config', {
      data: {
        'nginx-config': `events {
            worker_connections 1024;
          }
          http {
            include mime.types;
            server {
              listen 80;
              server_name _;
      
              client_max_body_size 16M;
      
              # serve static files
              location /static/ {
                alias /static/;
              }
              # serve media files
              location /media/ {
                alias /media/;
              }
            }
          }`,
      },
    });
    const nginxConfigVol = Volume.fromConfigMap(this, 'nginx-config-vol', nginxConfig);

    const staticFilesVolume = this.formPersistanceVolume('static', {
      storageClassName: 'longhorn',
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_MANY],
      storage: props.options?.staticFileVolSize ?? Size.gibibytes(25),
    });

    const mediaFilesVolume = this.formPersistanceVolume('media', {
      storageClassName: 'longhorn',
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_MANY],
      storage: props.options?.mediaFileVolSize ?? Size.gibibytes(25),
    });

    const secretKey = new OnepasswordSecret(this, 'secret-key', {
      secretName: props.options?.secretKeySecretName,
      vault: 'Homelab',
    });

    const dbSecret = new OnepasswordSecret(this, 'db-secret', {
      secretName: props.databaseOptions.passwordSecretName,
      vault: 'Homelab',
    });

    const env = {
      SECRET_KEY: secretKey.credentialAsEnvValue(),
      TIMEZONE: EnvValue.fromValue(props.options?.timezone ?? 'Etc/UTC'),
      ENABLE_METRICS: EnvValue.fromValue(props.options?.metrics ? '1' : '0'),
      DB_ENGINE: EnvValue.fromValue(props.databaseOptions.engine),
      POSTGRES_HOST: EnvValue.fromValue(props.databaseOptions.host),
      POSTGRES_PORT: EnvValue.fromValue(`${props.databaseOptions.port ?? 5432}`),
      POSTGRES_USER: EnvValue.fromValue(props.databaseOptions.user),
      POSTGRES_PASSWORD: dbSecret.credentialAsEnvValue(),
      POSTGRES_DB: EnvValue.fromValue(props.databaseOptions.database),
      ENABLE_SIGNUP: EnvValue.fromValue(props.options?.enableSignUp ? '1' : '0'),
    };

    const deployment = new Deployment(this, 'deployment', {
      replicas: 1,
      containers: [
        {
          name: 'tandoor',
          image: `vabene1111/recipes:${props.options?.image ?? 'latest'}`,
          envVariables: env,
          volumeMounts: [
            {
              path: '/opt/recipes/staticfiles',
              volume: staticFilesVolume,
              subPath: 'files',
            },
            {
              path: '/opt/recipes/mediafiles',
              volume: mediaFilesVolume,
              subPath: 'files',
            },
          ],
          securityContext: {
            ensureNonRoot: false,
            privileged: true,
            readOnlyRootFilesystem: false,
            allowPrivilegeEscalation: true,
          },
          resources: {},
          liveness: Probe.fromHttpGet('/', {
            port: 8080,
            scheme: ConnectionScheme.HTTP,
            periodSeconds: Duration.seconds(30),
          }),
          readiness: Probe.fromHttpGet('/', {
            port: 8080,
            scheme: ConnectionScheme.HTTP,
            periodSeconds: Duration.seconds(30),
          }),
        },
        {
          name: 'nginx',
          image: 'nginx:latest',
          ports: [
            {
              number: 80,
              name: 'http',
              protocol: Protocol.TCP,
            },
            {
              number: 8080,
              name: 'gunicorn',
              protocol: Protocol.TCP,
            },
          ],
          envVariables: env,
          resources: {},
          securityContext: {
            ensureNonRoot: false,
            privileged: true,
            readOnlyRootFilesystem: false,
            allowPrivilegeEscalation: true,
          },
          volumeMounts: [
            {
              path: '/opt/recipes/staticfiles',
              volume: staticFilesVolume,
              subPath: 'files',
            },
            {
              path: '/opt/recipes/mediafiles',
              volume: mediaFilesVolume,
              subPath: 'files',
            },
            {
              path: '/etc/nginx/nginx.conf',
              volume: nginxConfigVol,
              subPath: 'nginx-config',
              readOnly: true,
            },
          ],
        },
      ],
    });

    const service = new HomelabService(this, 'service', {
      type: ServiceType.LOAD_BALANCER,
      selector: deployment,
      ports: [
        {
          port: 80,
          targetPort: 8080,
        },
      ],
    });

    if (props.tls) {
      this.configureTls(props.tls.name, props.tls.certIssuer, props.tls.dnsNames, service);
    }
  }
}