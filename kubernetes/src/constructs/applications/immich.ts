import { Duration, Size } from "cdk8s";
import {
  ConfigMap,
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

const IMMICH_API_METRICS_PORT = 8081;
const IMMICH_MICROSERVICES_METRICS_PORT = 8082;

const IMMICH_MACHINE_LEARNING_IMAGE =
  "ghcr.io/immich-app/immich-machine-learning";
const IMMICH_MACHINE_LEARNING_PORT = 3003;

// The server auto-detects its media location from `/data` and
// `/usr/src/app/upload`. We pin it so the detection heuristic can never move
// the library out from under an existing install.
// https://docs.immich.app/administration/system-integrity#folder-checks
const IMMICH_MEDIA_LOCATION = "/usr/src/app/upload";

export enum ImmichLogLevel {
  VERBOSE = "verbose",
  DEBUG = "debug",
  LOG = "log",
  WARN = "warning",
  ERROR = "error",
}

export interface ImmichGeneralOptions {
  readonly mediaLocation?: string;
  readonly timezone?: string;
  readonly nodeEnvironment?: string;
  readonly logLevel?: ImmichLogLevel;
  readonly loginMessage?: string;
}

export interface ImmichGeocodingOptions {
  readonly enabled?: boolean;
  readonly disable?: boolean;
  readonly precision?: number;
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

export interface ImmichMachineLearningPreloadOptions {
  readonly clipTextual?: string;
  readonly clipVisual?: string;
  readonly facialRecognitionDetection?: string;
  readonly facialRecognitionRecognition?: string;
  readonly ocrDetection?: string;
  readonly ocrRecognition?: string;
}

export interface ImmichMachineLearningOptions {
  readonly cache?: PersistentVolumeClaimOptions;
  readonly imageTag?: string;
  readonly urls?: string[];
  readonly clip?: {
    readonly modelName?: string;
  };
  readonly facialRecognition?: {
    readonly minScore?: number;
    readonly modelName?: string;
  };
  readonly duplicateDetection?: {
    readonly maxDistance?: number;
  };
  readonly availabilityChecks?: {
    readonly enabled?: boolean;
    readonly timeout?: number;
    readonly interval?: number;
  };
  readonly minimumFaceScore?: number;
  readonly faceRecognitionModel?: string;
  readonly clipTextModel?: string;
  readonly cacheFolder?: string;
  readonly modelTtl?: number;
  readonly preload?: ImmichMachineLearningPreloadOptions;
}

export interface ImmichPhotoVolumeOptions {
  readonly name: string;
  readonly volume: Volume;
}

export interface ImmichServerOptions {
  readonly imageTag?: string;
  readonly ingress: HomelabIngressOptions;
  readonly externalDomain?: string;
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
  readonly monitoring?: boolean;
}

// The api and microservices workers each expose their own metrics endpoint.
function metricsServicePorts() {
  return [
    {
      name: "metrics",
      port: IMMICH_API_METRICS_PORT,
      targetPort: IMMICH_API_METRICS_PORT,
    },
    {
      name: "metrics-jobs",
      port: IMMICH_MICROSERVICES_METRICS_PORT,
      targetPort: IMMICH_MICROSERVICES_METRICS_PORT,
    },
  ];
}

export class Immich extends Construct {
  readonly machineLearningService: Service;
  readonly serverService: Service;

  constructor(scope: Construct, name: string, props: ImmichProps) {
    super(scope, name);

    this.machineLearningService = this.configureService(
      "machine-learning",
      IMMICH_MACHINE_LEARNING_PORT
    );

    const serverEnv = this.formServerEnvironment(props);
    const machineLearningEnv = this.formMachineLearningEnvironment(props);
    const config = this.formConfig(props);

    const volumeMounts = [
      {
        path: props.generalOptions?.mediaLocation ?? IMMICH_MEDIA_LOCATION,
        volume: props.uploadShare,
      },
    ];
    props.photoCollectionShares?.forEach((collection) => {
      volumeMounts.push({
        path: collection.name,
        volume: collection.volume,
      });
    });

    this.serverService = this.buildServer(
      props.serverOptions,
      serverEnv,
      config,
      volumeMounts,
      props.monitoring ?? false
    );
    this.buildMachineLearning(
      props.machineLearningOptions ?? {},
      machineLearningEnv
    );

    if (props.monitoring) {
      new ServiceMonitor(this, "service-monitor", {
        matchLabels: {
          "immich/monitoring": "true",
        },
        endpoints: [
          {
            port: "metrics",
          },
          {
            port: "metrics-jobs",
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
      ports.push(...metricsServicePorts());
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

  /**
   * Environment for the server container.
   *
   * Only variables the server still reads are set here. Everything that used to
   * be configured through `MACHINE_LEARNING_*`, `REVERSE_GEOCODING_*`,
   * `PUBLIC_LOGIN_MESSAGE` and friends now lives in the config file written by
   * `formConfig`, and the remaining strays (`UPLOAD_LOCATION`, `IMMICH_VERSION`)
   * were only ever read by the upstream docker compose file.
   * https://docs.immich.app/install/environment-variables
   */
  private formServerEnvironment(
    options: ImmichProps
  ): Record<string, EnvValue> {
    const env: Record<string, EnvValue> = {
      IMMICH_MEDIA_LOCATION: EnvValue.fromValue(
        options.generalOptions?.mediaLocation ?? IMMICH_MEDIA_LOCATION
      ),
      DB_HOSTNAME: EnvValue.fromValue(options.postgresOptions.hostname),
      DB_USERNAME: EnvValue.fromValue(options.postgresOptions.user),
      DB_DATABASE_NAME: EnvValue.fromValue(options.postgresOptions.database),
      DB_PORT: EnvValue.fromValue(`${options.postgresOptions.port ?? 5432}`),
      DB_PASSWORD: EnvValue.fromSecretValue({
        secret: options.postgresOptions.passwordSecret,
        key: "password",
      }),
      REDIS_HOSTNAME: EnvValue.fromValue(options.redisOptions.hostname),
    };

    // `IMMICH_METRICS` was replaced by the telemetry include/exclude lists.
    if (options.monitoring) {
      env.IMMICH_TELEMETRY_INCLUDE = EnvValue.fromValue("all");
    }
    if (options.generalOptions?.nodeEnvironment) {
      env.IMMICH_ENV = EnvValue.fromValue(
        options.generalOptions.nodeEnvironment
      );
    }
    if (options.generalOptions?.logLevel) {
      env.IMMICH_LOG_LEVEL = EnvValue.fromValue(options.generalOptions.logLevel);
    }
    if (options.generalOptions?.timezone) {
      env.TZ = EnvValue.fromValue(options.generalOptions.timezone);
    }
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

    return env;
  }

  /**
   * Environment for the machine learning container. It shares no configuration
   * with the server, so it deliberately does not receive the database secret.
   */
  private formMachineLearningEnvironment(
    options: ImmichProps
  ): Record<string, EnvValue> {
    const ml = options.machineLearningOptions;
    const env: Record<string, EnvValue> = {};

    if (options.generalOptions?.logLevel) {
      env.IMMICH_LOG_LEVEL = EnvValue.fromValue(options.generalOptions.logLevel);
    }
    if (options.generalOptions?.timezone) {
      env.TZ = EnvValue.fromValue(options.generalOptions.timezone);
    }
    if (ml?.cacheFolder) {
      env.MACHINE_LEARNING_CACHE_FOLDER = EnvValue.fromValue(ml.cacheFolder);
    }
    if (ml?.modelTtl !== undefined) {
      env.MACHINE_LEARNING_MODEL_TTL = EnvValue.fromValue(`${ml.modelTtl}`);
    }
    // The unsplit `MACHINE_LEARNING_PRELOAD__CLIP` and
    // `MACHINE_LEARNING_PRELOAD__FACIAL_RECOGNITION` variables were removed in
    // v3.0.0 in favour of these per-model variants.
    if (ml?.preload?.clipTextual) {
      env.MACHINE_LEARNING_PRELOAD__CLIP__TEXTUAL = EnvValue.fromValue(
        ml.preload.clipTextual
      );
    }
    if (ml?.preload?.clipVisual) {
      env.MACHINE_LEARNING_PRELOAD__CLIP__VISUAL = EnvValue.fromValue(
        ml.preload.clipVisual
      );
    }
    if (ml?.preload?.facialRecognitionDetection) {
      env.MACHINE_LEARNING_PRELOAD__FACIAL_RECOGNITION__DETECTION =
        EnvValue.fromValue(ml.preload.facialRecognitionDetection);
    }
    if (ml?.preload?.facialRecognitionRecognition) {
      env.MACHINE_LEARNING_PRELOAD__FACIAL_RECOGNITION__RECOGNITION =
        EnvValue.fromValue(ml.preload.facialRecognitionRecognition);
    }
    if (ml?.preload?.ocrDetection) {
      env.MACHINE_LEARNING_PRELOAD__OCR__DETECTION = EnvValue.fromValue(
        ml.preload.ocrDetection
      );
    }
    if (ml?.preload?.ocrRecognition) {
      env.MACHINE_LEARNING_PRELOAD__OCR__RECOGNITION = EnvValue.fromValue(
        ml.preload.ocrRecognition
      );
    }

    return env;
  }

  private formConfig(options: ImmichProps): Record<string, unknown> {
    const config: Record<string, unknown> = {};

    const serverConfig: Record<string, unknown> = {};
    if (options.serverOptions.externalDomain) {
      serverConfig.externalDomain = options.serverOptions.externalDomain;
    }
    if (options.generalOptions?.loginMessage) {
      serverConfig.loginPageMessage = options.generalOptions.loginMessage;
    }
    if (Object.keys(serverConfig).length > 0) {
      config.server = serverConfig;
    }

    if (options.generalOptions?.logLevel) {
      config.logging = {
        level: options.generalOptions.logLevel,
      };
    }

    const reverseGeocodingEnabled =
      options.geocoding?.enabled ??
      (options.geocoding?.disable !== undefined
        ? !options.geocoding.disable
        : undefined);
    if (reverseGeocodingEnabled !== undefined) {
      config.reverseGeocoding = {
        enabled: reverseGeocodingEnabled,
      };
    }

    const machineLearningConfig: Record<string, unknown> = {
      urls: options.machineLearningOptions?.urls ?? [
        `http://${this.machineLearningService.name}:${this.machineLearningService.port}`,
      ],
    };

    const clipModelName =
      options.machineLearningOptions?.clip?.modelName ??
      options.machineLearningOptions?.clipTextModel;
    if (clipModelName) {
      machineLearningConfig.clip = {
        modelName: clipModelName,
      };
    }

    const minFaceScore =
      options.machineLearningOptions?.facialRecognition?.minScore ??
      options.machineLearningOptions?.minimumFaceScore;
    const faceModelName =
      options.machineLearningOptions?.facialRecognition?.modelName ??
      options.machineLearningOptions?.faceRecognitionModel;
    if (minFaceScore !== undefined || faceModelName) {
      const facialRecognition: Record<string, unknown> = {};
      if (minFaceScore !== undefined) {
        facialRecognition.minScore = minFaceScore;
      }
      if (faceModelName) {
        facialRecognition.modelName = faceModelName;
      }
      machineLearningConfig.facialRecognition = facialRecognition;
    }

    if (
      options.machineLearningOptions?.duplicateDetection?.maxDistance !==
      undefined
    ) {
      machineLearningConfig.duplicateDetection = {
        maxDistance: options.machineLearningOptions.duplicateDetection.maxDistance,
      };
    }

    // Replaces the removed `IMMICH_MACHINE_LEARNING_PING_TIMEOUT`.
    const availabilityChecks = options.machineLearningOptions?.availabilityChecks;
    if (availabilityChecks) {
      const checks: Record<string, unknown> = {};
      if (availabilityChecks.enabled !== undefined) {
        checks.enabled = availabilityChecks.enabled;
      }
      if (availabilityChecks.timeout !== undefined) {
        checks.timeout = availabilityChecks.timeout;
      }
      if (availabilityChecks.interval !== undefined) {
        checks.interval = availabilityChecks.interval;
      }
      if (Object.keys(checks).length > 0) {
        machineLearningConfig.availabilityChecks = checks;
      }
    }

    config.machineLearning = machineLearningConfig;

    return config;
  }

  private buildServer(
    options: ImmichServerOptions,
    env: Record<string, EnvValue>,
    config: Record<string, unknown>,
    mounts: VolumeMount[],
    monitoring: boolean
  ): Service {
    const envVariables = { ...env };
    const volumeMounts = [...mounts];
    if (Object.keys(config).length > 0) {
      const configMap = new ConfigMap(this, "server-config", {
        data: {
          "immich-config.json": JSON.stringify(config, null, 2),
        },
      });
      const configVolume = Volume.fromConfigMap(
        this,
        "server-config-volume",
        configMap
      );
      volumeMounts.push({
        path: "/immich-config.json",
        volume: configVolume,
        readOnly: true,
        subPath: "immich-config.json",
      });
      envVariables.IMMICH_CONFIG_FILE = EnvValue.fromValue(
        "/immich-config.json"
      );
    }

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
      envVariables: envVariables,
      volumeMounts: volumeMounts,
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
      servicePorts.push(...metricsServicePorts());
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

    return service;
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
