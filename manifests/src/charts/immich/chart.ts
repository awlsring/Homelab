import { Size } from 'cdk8s';
import { Deployment, EnvValue, PersistentVolumeAccessMode, Secret, Service, ServiceType, Volume, VolumeMount } from 'cdk8s-plus-25';
import { Construct } from 'constructs';
import { ConfigureTlsProps, HomelabChart, HomelabChartProps } from '../../common/homelab-charts';
import { HomelabService } from '../../common/homelab-service';
import { NfsShareVolumeOptions, NfsVolume } from '../../constructs/nfs-volume';

const DEFAULT_SERVER_PORT = 3001;
const DEFAULT_WEB_PORT = 3000;
const DEFAULT_MICROSERVICES_PORT = 3002;
const DEFAULT_MACHINE_LEARNING_PORT = 3003;
const DEFAULT_REDIS_PORT = 6379;
const DEFAULT_TYPESENSE_PORT = 8108;
const DEFAULT_PROXY_PORT = 2283;
const DEFAULT_IMAGE_TAG = 'release';
const TYPESENSE_CONTAINER = 'typesense/typesense:0.24.1';
const REDIS_CONTAINER = 'redis:6.2-alpine';

export enum LogLevel {
  VERBOSE = 'verbose',
  DEBUG = 'debug',
  LOG = 'log',
  WARN = 'warning',
  ERROR = 'error',
}

export enum Protocol {
  HTTP = 'http',
  HTTPS = 'https'
}

export interface ReadonlyCollectionOptions {
  readonly volume: Volume;
  readonly mountPath: string;
}

export interface ImmichChartProps extends HomelabChartProps {
  readonly options: ImmichOptions;
}

export interface ImmichOptions {
  readonly dnsName: string;
  readonly uploadShare: NfsShareVolumeOptions;
  readonly photoCollectionShares?: NfsShareVolumeOptions[];
  readonly generalOptions?: {
    readonly immichVersion?: string;
    readonly mediaLocation?: string;
    readonly timezone?: string;
    readonly nodeEnvironment?: string;
    readonly logLevel?: LogLevel;
    readonly loginMessage?: string;
  };
  readonly geocoding?: {
    readonly disable?: boolean;
    readonly percision?: number;
    readonly dumpDir?: string;
  };
  readonly portOptions?: {
    readonly webPort?: number;
    readonly serverPort?: number;
    readonly micoservicesPort?: number;
    readonly machineLearningPort?: number;
    readonly proxyPort?: number;
  };
  readonly urlOptions?: {
    readonly webUrl?: string;
    readonly serverUrl?: string;
    readonly machineLearningUrl?: string;
    readonly apiUrl?: string;
  };
  readonly databaseOptions: {
    readonly hostname: string;
    readonly user: string;
    readonly passwordSecret: string;
    readonly database: string;
    readonly port?: number;
  };
  readonly redisOptions?: {
    readonly create: boolean;
    readonly url?: string;
    readonly hostname?: string;
    readonly port?: number;
    readonly dbIndex?: number;
    readonly user?: string;
    readonly password?: string;
    readonly socket?: string;
  };
  readonly typesenseOptions?: {
    readonly enabled: boolean;
    readonly url?: string;
    readonly host?: string;
    readonly port?: number;
    readonly protocol?: Protocol;
    readonly apiKey?: string;
    readonly dataDir?: string;
  };
  readonly machineLearningOptions?: {
    readonly minimumFaceScore?: number;
    readonly minimumTagScore?: number;
    readonly faceRecognitionModel?: string;
    readonly clipTextModel?: string;
    readonly clipImageModel?: string;
    readonly classificationModel?: string;
    readonly cacheFolder?: string;
    readonly transformerCache?: string;
    readonly modelTtl?: number;
    readonly eagerStartup?: boolean;
  };
}

export class ImmichChart extends HomelabChart {
  readonly serverService: Service;
  readonly microservicesService: Service;
  readonly machineLearningService: Service;
  readonly webService: Service;
  readonly redisService: Service;
  readonly typesenseService: Service;

  constructor(scope: Construct, name: string, props: ImmichChartProps) {
    super(scope, name, props);

    this.serverService = this.configureService('server', props.options.portOptions?.serverPort ?? DEFAULT_SERVER_PORT);

    this.microservicesService = this.configureService('microservices', props.options.portOptions?.micoservicesPort ?? DEFAULT_MICROSERVICES_PORT);

    this.machineLearningService = this.configureService('machine-learning', props.options.portOptions?.machineLearningPort ?? DEFAULT_MACHINE_LEARNING_PORT);

    this.webService = this.configureService('web', props.options.portOptions?.webPort ?? DEFAULT_WEB_PORT);

    this.redisService = this.configureService('redis', props.options.portOptions?.webPort ?? props.options.redisOptions?.port ?? DEFAULT_REDIS_PORT);

    this.typesenseService = this.configureService('typesense', props.options.typesenseOptions?.port ?? DEFAULT_TYPESENSE_PORT);

    const env = this.formEnvironment(props.options);

    const storageVolume = NfsVolume.fromShare(this, 'immich-upload-share', props.options.uploadShare);
    const volumeMounts = [
      {
        path: '/usr/src/app/upload',
        volume: storageVolume,
      },
    ];
    props.options.photoCollectionShares?.forEach((collection) => {
      volumeMounts.push({
        path: collection.path,
        volume: NfsVolume.fromShare(this, `${collection.name}-share`, collection),
      });
    });

    this.buildServer(props.options, env, volumeMounts);
    this.buildMicroservices(props.options, env, volumeMounts);
    this.buildWeb(props.options, env);
    this.buildMachineLearning(props.options, env);
    this.buildTypesense(env);
    this.buildRedis(env);
    this.buildProxy(props.options, env, props.tls);
  }

  private configureService(name: string, port: number): Service {
    return new Service(this, `${name}-service`, {
      ports: [
        {
          port: port,
          targetPort: port,
        },
      ],
    });
  }

  private formEnvironment(options: ImmichOptions): Record<string, EnvValue> {
    const secret = Secret.fromSecretName(this, 'photoprism-secret', options.databaseOptions.passwordSecret);
    const env: Record<string, EnvValue> = {
      UPLOAD_LOCATION: EnvValue.fromValue(options.uploadShare.path),
      DB_HOSTNAME: EnvValue.fromValue(options.databaseOptions.hostname),
      DB_USERNAME: EnvValue.fromValue(options.databaseOptions.user),
      DB_DATABASE_NAME: EnvValue.fromValue(options.databaseOptions.database),
      DB_PORT: EnvValue.fromValue(`${options.databaseOptions.port ?? 5432}`),
      DB_PASSWORD: EnvValue.fromSecretValue({ secret: secret, key: 'DATABASE_PASSWORD' }),
      TYPESENSE_API_KEY: EnvValue.fromValue(options.typesenseOptions?.apiKey ?? 'xyz'),
      TYPESENSE_DATA_DIR: EnvValue.fromValue(options.typesenseOptions?.dataDir ?? '/data'),
    };

    env.IMMICH_SERVER_URL = EnvValue.fromValue(`http://${this.serverService.name}:${this.serverService.port}`);
    env.IMMICH_WEB_URL = EnvValue.fromValue(`http://${this.webService.name}:${this.webService.port}`);
    env.IMMICH_MACHINE_LEARNING_URL = EnvValue.fromValue(`http://${this.machineLearningService.name}:${this.machineLearningService.port}`);
    env.PUBLIC_IMMICH_SERVER_URL = EnvValue.fromValue(options.dnsName);
    env.REDIS_HOSTNAME = EnvValue.fromValue(this.redisService.name);
    env.TYPESENSE_HOST = EnvValue.fromValue(this.typesenseService.name);

    if (options.generalOptions?.mediaLocation) {
      env.IMMICH_MEDIA_LOCATION = EnvValue.fromValue(options.generalOptions.mediaLocation);
    }
    if (options.generalOptions?.nodeEnvironment) {
      env.NODE_ENV = EnvValue.fromValue(options.generalOptions.nodeEnvironment);
    }
    if (options.generalOptions?.logLevel) {
      env.LOG_LEVEL = EnvValue.fromValue(options.generalOptions.logLevel);
    }
    if (options.generalOptions?.loginMessage) {
      env.PUBLIC_LOGIN_MESSAGE = EnvValue.fromValue(options.generalOptions.loginMessage);
    }
    if (options.generalOptions?.immichVersion) {
      env.IMMICH_VERSION = EnvValue.fromValue(options.generalOptions.immichVersion);
    }
    if (options.generalOptions?.timezone) {
      env.TZ = EnvValue.fromValue(options.generalOptions.timezone);
    }
    if (options.geocoding?.disable) {
      env.DISABLE_REVERSE_GEOCODING = EnvValue.fromValue('true');
    }
    if (options.geocoding?.percision) {
      env.REVERSE_GEOCODING_PRECISION = EnvValue.fromValue(`${options.geocoding.percision}`);
    }
    if (options.geocoding?.dumpDir) {
      env.REVERSE_GEOCODING_DUMP_DIRECTORY = EnvValue.fromValue(options.geocoding.dumpDir);
    }
    if (options.portOptions?.webPort) {
      env.PORT = EnvValue.fromValue(`${options.portOptions.webPort}`);
    }
    if (options.portOptions?.serverPort) {
      env.SERVER_PORT = EnvValue.fromValue(`${options.portOptions.serverPort}`);
    }
    if (options.portOptions?.micoservicesPort) {
      env.MICROSERVICES_PORT = EnvValue.fromValue(`${options.portOptions.micoservicesPort}`);
    }
    if (options.portOptions?.machineLearningPort) {
      env.MACHINE_LEARNING_PORT = EnvValue.fromValue(`${options.portOptions.machineLearningPort}`);
    }
    if (options.urlOptions?.apiUrl) {
      env.IMMICH_API_URL_EXTERNAL = EnvValue.fromValue(options.urlOptions.apiUrl);
    }
    if (options.redisOptions) {
      if (options.redisOptions.url) {
        env.REDIS_URL = EnvValue.fromValue(options.redisOptions.url);
      }
      if (options.redisOptions.port) {
        env.REDIS_PORT = EnvValue.fromValue(`${options.redisOptions.port}`);
      }
      if (options.redisOptions.password) {
        env.REDIS_PASSWORD = EnvValue.fromValue(options.redisOptions.password);
      }
      if (options.redisOptions.dbIndex) {
        env.REDIS_DBINDEX = EnvValue.fromValue(`${options.redisOptions.dbIndex}`);
      }
      if (options.redisOptions.user) {
        env.REDIS_USERNAME = EnvValue.fromValue(options.redisOptions.user);
      }
      if (options.redisOptions.socket) {
        env.REDIS_SOCKET = EnvValue.fromValue(options.redisOptions.socket);
      }
    }
    if (options.typesenseOptions?.enabled) {
      env.TYPESENSE_ENABLED = EnvValue.fromValue(`${options.typesenseOptions.enabled}`);
    }
    if (options.typesenseOptions?.url) {
      env.TYPESENSE_URL = EnvValue.fromValue(options.typesenseOptions.url);
    }
    if (options.typesenseOptions?.port) {
      env.TYPESENSE_PORT = EnvValue.fromValue(`${options.typesenseOptions.port}`);
    }
    if (options.typesenseOptions?.protocol) {
      env.TYPESENSE_PROTOCOL = EnvValue.fromValue(options.typesenseOptions.protocol);
    }
    if (options.typesenseOptions?.host) {
      env.TYPESENSE_HOST = EnvValue.fromValue(options.typesenseOptions.host);
    }
    if (options.machineLearningOptions?.minimumFaceScore) {
      env.MACHINE_LEARNING_MIN_FACE_SCORE = EnvValue.fromValue(`${options.machineLearningOptions.minimumFaceScore}`);
    }
    if (options.machineLearningOptions?.modelTtl) {
      env.MACHINE_LEARNING_MODEL_TTL = EnvValue.fromValue(`${options.machineLearningOptions.modelTtl}`);
    }
    if (!options.machineLearningOptions?.eagerStartup) {
      env.MACHINE_LEARNING_EAGER_STARTUP = EnvValue.fromValue('false');
    }
    if (options.machineLearningOptions?.minimumTagScore) {
      env.MACHINE_LEARNING_MIN_TAG_SCORE = EnvValue.fromValue(`${options.machineLearningOptions.minimumTagScore}`);
    }
    if (options.machineLearningOptions?.faceRecognitionModel) {
      env.MACHINE_LEARNING_FACIAL_RECOGNITION_MODEL = EnvValue.fromValue(`${options.machineLearningOptions.faceRecognitionModel}`);
    }
    if (options.machineLearningOptions?.clipTextModel) {
      env.MACHINE_LEARNING_CLIP_TEXT_MODEL = EnvValue.fromValue(`${options.machineLearningOptions.clipTextModel}`);
    }
    if (options.machineLearningOptions?.clipImageModel) {
      env.MACHINE_LEARNING_CLIP_IMAGE_MODEL = EnvValue.fromValue(`${options.machineLearningOptions.clipImageModel}`);
    }
    if (options.machineLearningOptions?.classificationModel) {
      env.MACHINE_LEARNING_CLASSIFICATION_MODEL = EnvValue.fromValue(`${options.machineLearningOptions.classificationModel}`);
    }
    if (options.machineLearningOptions?.cacheFolder) {
      env.MACHINE_LEARNING_CACHE_FOLDER = EnvValue.fromValue(`${options.machineLearningOptions.cacheFolder}`);
    }
    if (options.machineLearningOptions?.transformerCache) {
      env.TRANSFORMER_CACHE = EnvValue.fromValue(`${options.machineLearningOptions.transformerCache}`);
    }
    return env;
  }

  private buildServer(
    options: ImmichOptions,
    env: Record<string, EnvValue>,
    mounts: VolumeMount[],
  ): Deployment {

    const deployment = new Deployment(this, 'server-deployment', {
      replicas: 1,
    });

    deployment.addContainer({
      name: 'immich-server',
      image: `ghcr.io/immich-app/immich-server:${options.generalOptions?.immichVersion ?? DEFAULT_IMAGE_TAG}`,
      envVariables: env,
      volumeMounts: mounts,
      command: ['/bin/sh'],
      args: ['./start-server.sh'],
      resources: {},
      securityContext: {
        ensureNonRoot: false,
        privileged: true,
        readOnlyRootFilesystem: false,
        allowPrivilegeEscalation: true,
      },
    });

    this.serverService.select(deployment);
    return deployment;
  }

  private buildMicroservices(
    options: ImmichOptions,
    env: Record<string, EnvValue>,
    mounts: VolumeMount[],
  ): Deployment {

    const deployment = new Deployment(this, 'microservices-deployment', {
      replicas: 1,
    });

    deployment.addContainer({
      name: 'immich-microservices',
      image: `ghcr.io/immich-app/immich-server:${options.generalOptions?.immichVersion ?? DEFAULT_IMAGE_TAG}`,
      envVariables: env,
      command: ['/bin/sh'],
      args: ['./start-microservices.sh'],
      volumeMounts: mounts,
      resources: {},
      securityContext: {
        ensureNonRoot: false,
        privileged: true,
        readOnlyRootFilesystem: false,
        allowPrivilegeEscalation: true,
      },
    });

    this.microservicesService.select(deployment);

    return deployment;
  }

  private buildMachineLearning(
    options: ImmichOptions,
    env: Record<string, EnvValue>,
  ): Deployment {

    const modelCache = this.formPersistanceVolume('model-cache', {
      storageClassName: 'longhorn',
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_MANY],
      storage: Size.gibibytes(10),
    });

    const deployment = new Deployment(this, 'machine-learning-deployment', {
      replicas: 1,
    });

    deployment.addContainer({
      name: 'immich-machine-learning',
      image: `ghcr.io/immich-app/immich-machine-learning:${options.generalOptions?.immichVersion ?? DEFAULT_IMAGE_TAG}`,
      envVariables: env,
      volumeMounts: [
        {
          path: '/cache',
          volume: modelCache,
        },
      ],
      resources: {},
      securityContext: {
        ensureNonRoot: false,
        privileged: true,
        readOnlyRootFilesystem: false,
        allowPrivilegeEscalation: true,
      },
    });

    this.machineLearningService.select(deployment);

    return deployment;
  }

  private buildTypesense(
    env: Record<string, EnvValue>,
  ): Deployment {

    const data = Volume.fromEmptyDir(this, 'ts-data', 'data-cache');

    const deployment = new Deployment(this, 'typesense-deployment', {
      replicas: 1,
    });

    deployment.addContainer({
      name: 'typesense',
      image: TYPESENSE_CONTAINER,
      envVariables: env,
      volumeMounts: [
        {
          path: '/data',
          volume: data,
        },
      ],
      resources: {},
      securityContext: {
        ensureNonRoot: false,
        privileged: true,
        readOnlyRootFilesystem: false,
        allowPrivilegeEscalation: true,
      },
    });

    this.typesenseService.select(deployment);

    return deployment;
  }

  private buildRedis(
    env: Record<string, EnvValue>,
  ): Deployment {
    const deployment = new Deployment(this, 'redis-deployment', {
      replicas: 1,
    });

    deployment.addContainer({
      name: 'redis',
      image: REDIS_CONTAINER,
      envVariables: env,
      resources: {},
      securityContext: {
        ensureNonRoot: false,
        privileged: true,
        readOnlyRootFilesystem: false,
        allowPrivilegeEscalation: true,
      },
    });

    this.redisService.select(deployment);

    return deployment;
  }

  private buildProxy(
    options: ImmichOptions,
    env: Record<string, EnvValue>,
    tls?: ConfigureTlsProps,
  ): Deployment {
    const deployment = new Deployment(this, 'proxy-deployment', {
      replicas: 1,
    });

    const port = options.portOptions?.proxyPort ?? DEFAULT_PROXY_PORT;

    deployment.addContainer({
      name: 'immich-proxy',
      image: `ghcr.io/immich-app/immich-proxy:${options.generalOptions?.immichVersion ?? DEFAULT_IMAGE_TAG}`,
      envVariables: env,
      resources: {},
      securityContext: {
        ensureNonRoot: false,
        privileged: true,
        readOnlyRootFilesystem: false,
        allowPrivilegeEscalation: true,
      },
    });

    const service = new HomelabService(this, 'immich-proxy-service', {
      type: ServiceType.LOAD_BALANCER,
      selector: deployment,
      ports: [
        {
          name: 'http',
          port: port,
          targetPort: 8080,
        },
      ],
    });

    if (tls) {
      const cert = service.createSSLCertificate({
        name: tls.name,
        issuer: tls.certIssuer,
        dnsNames: tls.dnsNames,
      });
      service.exposeViaTraefikIngressRoute({
        dnsNames: tls.dnsNames,
        certificate: cert,
      });
    }

    return deployment;
  }

  private buildWeb(
    options: ImmichOptions,
    env: Record<string, EnvValue>,
  ): Deployment {
    const deployment = new Deployment(this, 'web-deployment', {
      replicas: 1,
    });

    deployment.addContainer({
      name: 'immich-web',
      image: `ghcr.io/immich-app/immich-web:${options.generalOptions?.immichVersion ?? DEFAULT_IMAGE_TAG}`,
      envVariables: env,
      resources: {},
      securityContext: {
        ensureNonRoot: false,
        privileged: true,
        readOnlyRootFilesystem: false,
        allowPrivilegeEscalation: true,
      },
    });

    this.webService.select(deployment);

    return deployment;
  }
}