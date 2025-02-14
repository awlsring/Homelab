import { Duration, Size } from "cdk8s";
import {
  Cpu,
  Deployment,
  DeploymentStrategy,
  EnvValue,
  ISecret,
  Probe,
  Service,
  ServiceType,
  Volume,
  VolumeMount,
} from "cdk8s-plus-31";
import { Construct } from "constructs";
import { HomelabIngress, HomelabIngressOptions } from "../homelab/ingress";
import {
  PersistantVolume,
  PersistentVolumeClaimOptions,
} from "../homelab/storage";
import { ServiceMonitor } from "../prometheus/service-monitor";

const DEFAULT_IMAGE_TAG = "release";

const IMMICH_SERVER_IMAGE = "ghcr.io/immich-app/immich-server";
const IMMICH_SERVER_PORT = 2283;

const IMMICH_METRICS_PORT = 8081;

const IMMICH_MACHINE_LEARNING_IMAGE =
  "ghcr.io/immich-app/immich-machine-learning";
const IMMICH_MACHINE_LEARNING_PORT = 3003;
const IMMICH_UPLOAD_LOCATION = "./library";

export enum ImmichLogLevel {
  VERBOSE = "verbose",
  DEBUG = "debug",
  LOG = "log",
  WARN = "warning",
  ERROR = "error",
}

export interface ImmichGeneralOptions {
  readonly immichVersion?: string;
  readonly mediaLocation?: string;
  readonly timezone?: string;
  readonly nodeEnvironment?: string;
  readonly logLevel?: ImmichLogLevel;
  readonly loginMessage?: string;
}

export interface ImmichGeocodingOptions {
  readonly disable?: boolean;
  readonly percision?: number;
  readonly dumpDir?: string;
}

export interface ImmichRedisOptions {
  readonly url?: string;
  readonly hostname: string;
  readonly port?: number;
  readonly dbIndex?: number;
  readonly user?: string;
  readonly password?: string;
  readonly socket?: string;
}

export interface ImmichPostgresOptions {
  readonly hostname: string;
  readonly user: string;
  readonly passwordSecret: ISecret;
  readonly database: string;
  readonly port?: number;
}

export interface ImmichMachineLearningCacheOptions {
  readonly storageClass: string;
  readonly size: Size;
}

export interface ImmichMachineLearningOptions {
  readonly cache?: PersistentVolumeClaimOptions;
  readonly imageTag?: string;
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
}

export interface ImmichPhotoVolumeOptions {
  readonly name: string;
  readonly volume: Volume;
}

export interface ImmichServerOptions {
  readonly imageTag?: string;
  readonly ingress: HomelabIngressOptions;
  readonly uploadLocation?: string;
}

export interface ImmichProps {
  readonly uploadShare: Volume;
  readonly photoCollectionShares?: ImmichPhotoVolumeOptions[];
  readonly generalOptions?: ImmichGeneralOptions;
  readonly geocoding?: ImmichGeocodingOptions;
  readonly serverOptions: ImmichServerOptions;
  readonly redisOptions: ImmichRedisOptions;
  readonly postgresOptions: ImmichPostgresOptions;
  readonly machineLearningOptions?: ImmichMachineLearningOptions;
  readonly externalApiUrl?: string;
  readonly monitoring?: boolean;
}

export class Immich extends Construct {
  readonly machineLearningService: Service;

  constructor(scope: Construct, name: string, props: ImmichProps) {
    super(scope, name);

    this.machineLearningService = this.configureService(
      "machine-learning",
      IMMICH_MACHINE_LEARNING_PORT
    );

    const env = this.formEnvironment(props);

    const volumeMounts = [
      {
        path: "/usr/src/app/upload",
        volume: props.uploadShare,
      },
    ];
    props.photoCollectionShares?.forEach((collection) => {
      volumeMounts.push({
        path: collection.name,
        volume: collection.volume,
      });
    });

    this.buildServer(
      props.serverOptions,
      env,
      volumeMounts,
      props.monitoring ?? false
    );
    this.buildMachineLearning(props.machineLearningOptions ?? {}, env);

    if (props.monitoring) {
      new ServiceMonitor(this, "service-monitor", {
        matchLabels: {
          "immich/monitoring": "true",
        },
        endpoints: [
          {
            port: "metrics",
          },
        ],
      });
    }
  }

  private configureService(
    name: string,
    port: number,
    metrics?: boolean
  ): Service {
    const ports = [
      {
        name: "http",
        port: port,
        targetPort: port,
      },
    ];

    if (metrics) {
      ports.push({
        name: "metrics",
        port: IMMICH_METRICS_PORT,
        targetPort: IMMICH_METRICS_PORT,
      });
    }

    return new Service(this, `${name}-service`, {
      metadata: {
        labels: {
          "immich/monitoring": metrics ? "true" : "false",
        },
      },
      ports: ports,
    });
  }

  private formEnvironment(options: ImmichProps): Record<string, EnvValue> {
    const env: Record<string, EnvValue> = {
      IMMICH_METRICS: EnvValue.fromValue(options.monitoring ? "true" : "false"),
      UPLOAD_LOCATION: EnvValue.fromValue(
        options.serverOptions.uploadLocation ?? IMMICH_UPLOAD_LOCATION
      ),
      DB_HOSTNAME: EnvValue.fromValue(options.postgresOptions.hostname),
      DB_USERNAME: EnvValue.fromValue(options.postgresOptions.user),
      DB_DATABASE_NAME: EnvValue.fromValue(options.postgresOptions.database),
      DB_PORT: EnvValue.fromValue(`${options.postgresOptions.port ?? 5432}`),
      DB_PASSWORD: EnvValue.fromSecretValue({
        secret: options.postgresOptions.passwordSecret,
        key: "password",
      }),
      POSTGRES_PASSWORD: EnvValue.fromSecretValue({
        secret: options.postgresOptions.passwordSecret,
        key: "password",
      }),
    };

    env.IMMICH_MACHINE_LEARNING_URL = EnvValue.fromValue(
      `http://${this.machineLearningService.name}:${this.machineLearningService.port}`
    );
    env.PUBLIC_IMMICH_SERVER_URL = EnvValue.fromValue(
      options.serverOptions.ingress.hostname
    );
    env.REDIS_HOSTNAME = EnvValue.fromValue(options.redisOptions.hostname);

    if (options.generalOptions?.mediaLocation) {
      env.IMMICH_MEDIA_LOCATION = EnvValue.fromValue(
        options.generalOptions.mediaLocation
      );
    }
    if (options.generalOptions?.nodeEnvironment) {
      env.NODE_ENV = EnvValue.fromValue(options.generalOptions.nodeEnvironment);
    }
    if (options.generalOptions?.logLevel) {
      env.LOG_LEVEL = EnvValue.fromValue(options.generalOptions.logLevel);
    }
    if (options.generalOptions?.loginMessage) {
      env.PUBLIC_LOGIN_MESSAGE = EnvValue.fromValue(
        options.generalOptions.loginMessage
      );
    }
    if (options.generalOptions?.immichVersion) {
      env.IMMICH_VERSION = EnvValue.fromValue(
        options.generalOptions.immichVersion
      );
    }
    if (options.generalOptions?.timezone) {
      env.TZ = EnvValue.fromValue(options.generalOptions.timezone);
    }
    if (options.geocoding?.disable) {
      env.DISABLE_REVERSE_GEOCODING = EnvValue.fromValue("true");
    }
    if (options.geocoding?.percision) {
      env.REVERSE_GEOCODING_PRECISION = EnvValue.fromValue(
        `${options.geocoding.percision}`
      );
    }
    if (options.geocoding?.dumpDir) {
      env.REVERSE_GEOCODING_DUMP_DIRECTORY = EnvValue.fromValue(
        options.geocoding.dumpDir
      );
    }
    if (options.externalApiUrl) {
      env.IMMICH_API_URL_EXTERNAL = EnvValue.fromValue(options.externalApiUrl);
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
        env.REDIS_DBINDEX = EnvValue.fromValue(
          `${options.redisOptions.dbIndex}`
        );
      }
      if (options.redisOptions.user) {
        env.REDIS_USERNAME = EnvValue.fromValue(options.redisOptions.user);
      }
      if (options.redisOptions.socket) {
        env.REDIS_SOCKET = EnvValue.fromValue(options.redisOptions.socket);
      }
    }
    if (options.machineLearningOptions?.minimumFaceScore) {
      env.MACHINE_LEARNING_MIN_FACE_SCORE = EnvValue.fromValue(
        `${options.machineLearningOptions.minimumFaceScore}`
      );
    }
    if (options.machineLearningOptions?.modelTtl) {
      env.MACHINE_LEARNING_MODEL_TTL = EnvValue.fromValue(
        `${options.machineLearningOptions.modelTtl}`
      );
    }
    if (!options.machineLearningOptions?.eagerStartup) {
      env.MACHINE_LEARNING_EAGER_STARTUP = EnvValue.fromValue("false");
    }
    if (options.machineLearningOptions?.minimumTagScore) {
      env.MACHINE_LEARNING_MIN_TAG_SCORE = EnvValue.fromValue(
        `${options.machineLearningOptions.minimumTagScore}`
      );
    }
    if (options.machineLearningOptions?.faceRecognitionModel) {
      env.MACHINE_LEARNING_FACIAL_RECOGNITION_MODEL = EnvValue.fromValue(
        `${options.machineLearningOptions.faceRecognitionModel}`
      );
    }
    if (options.machineLearningOptions?.clipTextModel) {
      env.MACHINE_LEARNING_CLIP_TEXT_MODEL = EnvValue.fromValue(
        `${options.machineLearningOptions.clipTextModel}`
      );
    }
    if (options.machineLearningOptions?.clipImageModel) {
      env.MACHINE_LEARNING_CLIP_IMAGE_MODEL = EnvValue.fromValue(
        `${options.machineLearningOptions.clipImageModel}`
      );
    }
    if (options.machineLearningOptions?.classificationModel) {
      env.MACHINE_LEARNING_CLASSIFICATION_MODEL = EnvValue.fromValue(
        `${options.machineLearningOptions.classificationModel}`
      );
    }
    if (options.machineLearningOptions?.cacheFolder) {
      env.MACHINE_LEARNING_CACHE_FOLDER = EnvValue.fromValue(
        `${options.machineLearningOptions.cacheFolder}`
      );
    }
    if (options.machineLearningOptions?.transformerCache) {
      env.TRANSFORMER_CACHE = EnvValue.fromValue(
        `${options.machineLearningOptions.transformerCache}`
      );
    }
    return env;
  }

  private buildServer(
    options: ImmichServerOptions,
    env: Record<string, EnvValue>,
    mounts: VolumeMount[],
    monitoring: boolean
  ): Deployment {
    const deployment = new Deployment(this, "server-deployment", {
      replicas: 1,
      strategy: DeploymentStrategy.recreate(),
    });

    const image = `${IMMICH_SERVER_IMAGE}:${
      options.imageTag ?? DEFAULT_IMAGE_TAG
    }`;

    deployment.addContainer({
      name: "immich-server",
      image: image,
      envVariables: env,
      volumeMounts: mounts,
      ports: [{ name: "http", number: IMMICH_SERVER_PORT }],
      resources: {
        cpu: {
          request: Cpu.millis(200),
          limit: Cpu.millis(8000),
        },
        memory: {
          request: Size.gibibytes(1),
          limit: Size.gibibytes(16),
        },
      },
      liveness: Probe.fromHttpGet("/api/server/ping", {
        port: IMMICH_SERVER_PORT,
        initialDelaySeconds: Duration.seconds(10),
        periodSeconds: Duration.seconds(10),
        timeoutSeconds: Duration.seconds(1),
        failureThreshold: 3,
      }),
      readiness: Probe.fromHttpGet("/api/server/ping", {
        port: IMMICH_SERVER_PORT,
        failureThreshold: 3,
        initialDelaySeconds: Duration.seconds(10),
        periodSeconds: Duration.seconds(10),
        timeoutSeconds: Duration.seconds(1),
      }),
      startup: Probe.fromHttpGet("/api/server/ping", {
        port: IMMICH_SERVER_PORT,
        failureThreshold: 30,
        initialDelaySeconds: Duration.seconds(10),
        periodSeconds: Duration.seconds(10),
        timeoutSeconds: Duration.seconds(1),
      }),
      securityContext: {
        ensureNonRoot: false,
        privileged: true,
        readOnlyRootFilesystem: false,
        allowPrivilegeEscalation: true,
      },
    });

    const servicePorts = [
      {
        name: "http",
        port: IMMICH_SERVER_PORT,
        targetPort: IMMICH_SERVER_PORT,
      },
    ];
    if (monitoring) {
      servicePorts.push({
        name: "metrics",
        port: IMMICH_METRICS_PORT,
        targetPort: IMMICH_METRICS_PORT,
      });
    }
    const service = new Service(this, "server-service", {
      metadata: {
        labels: {
          "immich/monitoring": monitoring ? "true" : "false",
        },
      },
      type: options.ingress.type ?? ServiceType.CLUSTER_IP,
      selector: deployment,
      ports: servicePorts,
    });

    new HomelabIngress(this, "server-ingress", {
      certIssuer: options.ingress.certIssuer,
      service: service,
      port: IMMICH_SERVER_PORT,
      hostname: options.ingress.hostname,
      ingressClassName: options.ingress.ingressClass,
      annotations: [
        {
          // https://github.com/immich-app/immich/issues/8738
          key: "nginx.ingress.kubernetes.io/proxy-body-size",
          value: "50000M",
        },
        {
          key: "nginx.ingress.kubernetes.io/proxy-send-timeout",
          value: "600s",
        },
        {
          key: "nginx.ingress.kubernetes.io/proxy-read-timeout",
          value: "600s",
        },
      ],
    });

    return deployment;
  }

  private buildMachineLearning(
    options: ImmichMachineLearningOptions,
    env: Record<string, EnvValue>
  ): Deployment {
    const cache = new PersistantVolume(this, "ml-cache", {
      storageClass: options.cache?.storageClass,
      size: options.cache?.size ?? Size.gibibytes(10),
    });

    const deployment = new Deployment(this, "machine-learning-deployment", {
      replicas: 1,
      strategy: DeploymentStrategy.recreate(),
    });

    const image = `${IMMICH_MACHINE_LEARNING_IMAGE}:${
      options.imageTag ?? DEFAULT_IMAGE_TAG
    }`;

    deployment.addContainer({
      name: "immich-machine-learning",
      image: image,
      envVariables: env,
      ports: [{ name: "http", number: IMMICH_MACHINE_LEARNING_PORT }],
      volumeMounts: [
        {
          path: "/cache",
          volume: cache.volume,
        },
      ],
      resources: {
        cpu: {
          request: Cpu.millis(200),
          limit: Cpu.millis(2000),
        },
        memory: {
          request: Size.mebibytes(256),
          limit: Size.gibibytes(4),
        },
      },
      liveness: Probe.fromHttpGet("/ping", {
        port: IMMICH_MACHINE_LEARNING_PORT,
        initialDelaySeconds: Duration.seconds(0),
        periodSeconds: Duration.seconds(10),
        timeoutSeconds: Duration.seconds(1),
      }),
      readiness: Probe.fromHttpGet("/ping", {
        port: IMMICH_MACHINE_LEARNING_PORT,
        failureThreshold: 3,
        initialDelaySeconds: Duration.seconds(0),
        periodSeconds: Duration.seconds(10),
        timeoutSeconds: Duration.seconds(1),
      }),
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
}
