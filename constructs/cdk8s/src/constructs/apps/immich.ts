import { Duration, Size } from "cdk8s";
import {
  ConfigMap,
  Cpu,
  Deployment,
  DeploymentStrategy,
  EnvValue,
  Probe,
  Secret,
  Service,
  ServiceType,
  StatefulSet,
  StatefulSetUpdateStrategy,
  Volume,
  VolumeMount,
} from "cdk8s-plus-27";
import { Construct } from "constructs";
import { HomelabIngress, HomelabIngressOptions } from "../homelab/ingress";
import {
  PersistantVolume,
  PersistentVolumeClaimOptions,
} from "../homelab/storage";

const REDIS_PORT = 6379;
const POSTGRES_PORT = 5432;
const DEFAULT_IMAGE_TAG = "release";
const REDIS_IMAGE = "redis:6.2-alpine";
const POSTGRES_IMAGE = "tensorchord/pgvecto-rs:pg16-v0.1.11";

const IMMICH_SERVER_IMAGE = "ghcr.io/immich-app/immich-server";
const IMMICH_SERVER_PORT = 3001;

const IMMICH_MICROSERVICES_IMAGE = "ghcr.io/immich-app/immich-server";
const IMMICH_MICROSERVICES_PORT = 3002;

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
  readonly create: boolean;
  readonly imageTag?: string;
  readonly url?: string;
  readonly hostname?: string;
  readonly port?: number;
  readonly dbIndex?: number;
  readonly user?: string;
  readonly password?: string;
  readonly socket?: string;
}

export interface ImmichPostgresOptions {
  readonly user: string;
  readonly passwordSecret: string;
  readonly database: string;
  readonly image?: string;
  readonly port?: number;
  readonly storageClass: string;
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

export interface ImmichMicroservicesOptions {
  readonly imageTag?: string;
}

export interface ImmichProps {
  readonly uploadShare: Volume;
  readonly photoCollectionShares?: ImmichPhotoVolumeOptions[];
  readonly generalOptions?: ImmichGeneralOptions;
  readonly geocoding?: ImmichGeocodingOptions;
  readonly serverOptions: ImmichServerOptions;
  readonly microservicesOptions?: ImmichMicroservicesOptions;
  readonly redisOptions: ImmichRedisOptions;
  readonly postgresOptions: ImmichPostgresOptions;
  readonly machineLearningOptions?: ImmichMachineLearningOptions;
  readonly externalApiUrl?: string;
}

export class Immich extends Construct {
  readonly microservicesService: Service;
  readonly machineLearningService: Service;
  readonly redisService: Service;
  readonly postgresService: Service;

  constructor(scope: Construct, name: string, props: ImmichProps) {
    super(scope, name);

    this.microservicesService = this.configureService(
      "microservices",
      IMMICH_MICROSERVICES_PORT,
    );

    this.machineLearningService = this.configureService(
      "machine-learning",
      IMMICH_MACHINE_LEARNING_PORT,
    );

    this.redisService = this.configureService("redis", REDIS_PORT);

    this.postgresService = this.configureService("postgres", POSTGRES_PORT);

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

    this.buildServer(props.serverOptions, env, volumeMounts);
    this.buildMicroservices(
      props.microservicesOptions ?? {},
      env,
      volumeMounts,
    );
    this.buildMachineLearning(props.machineLearningOptions ?? {}, env);
    this.buildDb(props.postgresOptions, env);
    this.buildRedis(env);
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

  private formEnvironment(options: ImmichProps): Record<string, EnvValue> {
    const secret = Secret.fromSecretName(
      this,
      "immich-secret",
      options.postgresOptions.passwordSecret,
    );
    const env: Record<string, EnvValue> = {
      UPLOAD_LOCATION: EnvValue.fromValue(
        options.serverOptions.uploadLocation ?? IMMICH_UPLOAD_LOCATION,
      ),
      DB_HOSTNAME: EnvValue.fromValue(this.postgresService.name),
      DB_USERNAME: EnvValue.fromValue(options.postgresOptions.user),
      DB_DATABASE_NAME: EnvValue.fromValue(options.postgresOptions.database),
      DB_PORT: EnvValue.fromValue(`${options.postgresOptions.port ?? 5432}`),
      DB_PASSWORD: EnvValue.fromSecretValue({
        secret: secret,
        key: "DATABASE_PASSWORD",
      }),
      POSTGRES_PASSWORD: EnvValue.fromSecretValue({
        secret: secret,
        key: "DATABASE_PASSWORD",
      }),
    };

    env.IMMICH_MACHINE_LEARNING_URL = EnvValue.fromValue(
      `http://${this.machineLearningService.name}:${this.machineLearningService.port}`,
    );
    env.PUBLIC_IMMICH_SERVER_URL = EnvValue.fromValue(
      options.serverOptions.ingress.hostname,
    );
    env.REDIS_HOSTNAME = EnvValue.fromValue(this.redisService.name);

    if (options.generalOptions?.mediaLocation) {
      env.IMMICH_MEDIA_LOCATION = EnvValue.fromValue(
        options.generalOptions.mediaLocation,
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
        options.generalOptions.loginMessage,
      );
    }
    if (options.generalOptions?.immichVersion) {
      env.IMMICH_VERSION = EnvValue.fromValue(
        options.generalOptions.immichVersion,
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
        `${options.geocoding.percision}`,
      );
    }
    if (options.geocoding?.dumpDir) {
      env.REVERSE_GEOCODING_DUMP_DIRECTORY = EnvValue.fromValue(
        options.geocoding.dumpDir,
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
          `${options.redisOptions.dbIndex}`,
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
        `${options.machineLearningOptions.minimumFaceScore}`,
      );
    }
    if (options.machineLearningOptions?.modelTtl) {
      env.MACHINE_LEARNING_MODEL_TTL = EnvValue.fromValue(
        `${options.machineLearningOptions.modelTtl}`,
      );
    }
    if (!options.machineLearningOptions?.eagerStartup) {
      env.MACHINE_LEARNING_EAGER_STARTUP = EnvValue.fromValue("false");
    }
    if (options.machineLearningOptions?.minimumTagScore) {
      env.MACHINE_LEARNING_MIN_TAG_SCORE = EnvValue.fromValue(
        `${options.machineLearningOptions.minimumTagScore}`,
      );
    }
    if (options.machineLearningOptions?.faceRecognitionModel) {
      env.MACHINE_LEARNING_FACIAL_RECOGNITION_MODEL = EnvValue.fromValue(
        `${options.machineLearningOptions.faceRecognitionModel}`,
      );
    }
    if (options.machineLearningOptions?.clipTextModel) {
      env.MACHINE_LEARNING_CLIP_TEXT_MODEL = EnvValue.fromValue(
        `${options.machineLearningOptions.clipTextModel}`,
      );
    }
    if (options.machineLearningOptions?.clipImageModel) {
      env.MACHINE_LEARNING_CLIP_IMAGE_MODEL = EnvValue.fromValue(
        `${options.machineLearningOptions.clipImageModel}`,
      );
    }
    if (options.machineLearningOptions?.classificationModel) {
      env.MACHINE_LEARNING_CLASSIFICATION_MODEL = EnvValue.fromValue(
        `${options.machineLearningOptions.classificationModel}`,
      );
    }
    if (options.machineLearningOptions?.cacheFolder) {
      env.MACHINE_LEARNING_CACHE_FOLDER = EnvValue.fromValue(
        `${options.machineLearningOptions.cacheFolder}`,
      );
    }
    if (options.machineLearningOptions?.transformerCache) {
      env.TRANSFORMER_CACHE = EnvValue.fromValue(
        `${options.machineLearningOptions.transformerCache}`,
      );
    }
    return env;
  }

  private buildDb(
    props: ImmichPostgresOptions,
    env: Record<string, EnvValue>,
  ): StatefulSet {
    const datapath = "/var/lib/postgresql/data/";
    const data = new PersistantVolume(this, "postgres-data", {
      storageClass: props.storageClass,
      size: Size.gibibytes(50),
    });

    const initScript = new ConfigMap(this, "InitScript", {
      data: {
        "create-extensions.sql": `
      CREATE EXTENSION cube;
      CREATE EXTENSION earthdistance;
      CREATE EXTENSION vectors;
    `,
      },
    });
    const initVol = Volume.fromConfigMap(this, "init-vol", initScript);

    const ss = new StatefulSet(this, "immich-database", {
      replicas: 1,
      service: this.postgresService,
      strategy: StatefulSetUpdateStrategy.rollingUpdate(),
      containers: [
        {
          volumeMounts: [
            {
              path: datapath,
              volume: data.volume,
              subPath: "data",
            },
            {
              path: "/docker-entrypoint-initdb.d",
              volume: initVol,
            },
          ],
          name: "immich-database",
          image: props.image ?? POSTGRES_IMAGE,
          envVariables: {
            ...env,
            POSTGRES_USER: EnvValue.fromValue(props.user),
            POSTGRES_DB: EnvValue.fromValue(props.database),
            PGDATA: EnvValue.fromValue(datapath),
          },
          resources: {
            cpu: {
              request: Cpu.millis(250),
              limit: Cpu.millis(2000),
            },
            memory: {
              request: Size.mebibytes(256),
              limit: Size.gibibytes(4),
            },
          },
          liveness: Probe.fromCommand(
            [
              "/bin/sh",
              "-c",
              `exec pg_isready -U "${props.user}" -d "dbname=${props.database}" -h 127.0.0.1 -p 5432`,
            ],
            {
              failureThreshold: 6,
              initialDelaySeconds: Duration.seconds(30),
              periodSeconds: Duration.seconds(10),
              successThreshold: 1,
              timeoutSeconds: Duration.seconds(5),
            },
          ),
          readiness: Probe.fromCommand(
            [
              "/bin/sh",
              "-c",
              "-e",
              `exec pg_isready -U "${props.user}" -d "dbname=${props.database}" -h 127.0.0.1 -p 5432`,
            ],
            {
              failureThreshold: 6,
              initialDelaySeconds: Duration.seconds(5),
              periodSeconds: Duration.seconds(10),
              successThreshold: 1,
              timeoutSeconds: Duration.seconds(5),
            },
          ),
          securityContext: {
            ensureNonRoot: false,
            privileged: true,
            readOnlyRootFilesystem: false,
            allowPrivilegeEscalation: true,
          },
        },
      ],
    });

    return ss;
  }

  private buildServer(
    options: ImmichServerOptions,
    env: Record<string, EnvValue>,
    mounts: VolumeMount[],
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
      command: ["/bin/sh"],
      args: ["./start-server.sh"],
      ports: [{ name: "http", number: IMMICH_SERVER_PORT }],
      resources: {
        cpu: {
          request: Cpu.millis(200),
          limit: Cpu.millis(1000),
        },
        memory: {
          request: Size.mebibytes(256),
          limit: Size.gibibytes(1),
        },
      },
      liveness: Probe.fromHttpGet("/server-info/ping", {
        port: IMMICH_SERVER_PORT,
        initialDelaySeconds: Duration.seconds(0),
        periodSeconds: Duration.seconds(10),
        timeoutSeconds: Duration.seconds(1),
      }),
      readiness: Probe.fromHttpGet("/server-info/ping", {
        port: IMMICH_SERVER_PORT,
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

    const service = new Service(this, "server-service", {
      type: options.ingress.type ?? ServiceType.CLUSTER_IP,
      selector: deployment,
      ports: [
        {
          name: "http",
          port: IMMICH_SERVER_PORT,
          targetPort: IMMICH_SERVER_PORT,
        },
      ],
    });

    new HomelabIngress(this, "server-ingress", {
      certIssuer: options.ingress.certIssuer,
      service: service,
      hostname: options.ingress.hostname,
      ingressClassName: options.ingress.ingressClass,
    });

    return deployment;
  }

  private buildMicroservices(
    options: ImmichMicroservicesOptions,
    env: Record<string, EnvValue>,
    mounts: VolumeMount[],
  ): Deployment {
    const deployment = new Deployment(this, "microservices-deployment", {
      replicas: 1,
      strategy: DeploymentStrategy.recreate(),
    });

    const image = `${IMMICH_MICROSERVICES_IMAGE}:${
      options.imageTag ?? DEFAULT_IMAGE_TAG
    }`;

    deployment.addContainer({
      name: "immich-microservices",
      image: image,
      envVariables: env,
      command: ["/bin/sh"],
      args: ["./start-microservices.sh"],
      volumeMounts: mounts,
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
    options: ImmichMachineLearningOptions,
    env: Record<string, EnvValue>,
  ): Deployment {
    const cache = new PersistantVolume(this, "cache", {
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

  // TODO: make this a stateful set and configure a bit better.
  // potentially pass this in
  private buildRedis(env: Record<string, EnvValue>): Deployment {
    const deployment = new Deployment(this, "redis-deployment", {
      replicas: 1,
    });

    deployment.addContainer({
      name: "redis",
      image: REDIS_IMAGE,
      envVariables: env,
      ports: [{ name: "redis", number: REDIS_PORT }],
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
}
