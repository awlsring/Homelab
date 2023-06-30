import { Size } from 'cdk8s';
import { Deployment, EnvValue, ISecret, PersistentVolumeAccessMode, PersistentVolumeClaim, PersistentVolumeClaimProps, Secret, ServiceType, Volume } from 'cdk8s-plus-25';
import { Construct } from 'constructs';
import { HomelabChart, HomelabChartProps } from '../../common/homelab-charts';
import { HomelabService } from '../../common/homelab-service';
import { NfsShareVolumeOptions, NfsVolume } from '../../constructs/nfs-volume';

export interface PhotoPrismChartProps extends HomelabChartProps {
  readonly database?: DatabaseOptions;
  readonly passwordSecret: string;
  readonly photosNfsOptions: NfsShareVolumeOptions;
  readonly auth?: {
    authMode?: AuthMode;
    adminUser?: string;
    sessionMaxAge?: number;
    sessionTimeout?: number;
    registerUri?: string;
    passwordResetUri?: string;
    minimumPasswordLength?: number;
  };
  readonly storage?: {
    configPath?: string;
    defaultsYaml?: string;
    originalsPath?: string;
    originalsSizeLimit?: number;
    resolutionLimit?: number;
    usersPath?: string;
    sidecarPath?: string;
    storagePath?: string;
    backupPath?: string;
    cachePath?: string;
    importPath?: string;
    importDest?: string;
    assetsPath?: string;
    tempPath?: string;
  };
  readonly idexing?: {
    workers?: number;
    wakeupInterval?: number;
    autoIndexDelay?: number;
    autoImportDelay?: number;
  };
  logLevel?: LogLevel;
  readonly features?: {
    readonly?: boolean;
    experimental?: boolean;
    disableSettings?: boolean;
    disableRestart?: boolean;
    disableBackups?: boolean;
    disableWebDav?: boolean;
    disablePlaces?: boolean;
    disableTensorFlow?: boolean;
    disableFaces?: boolean;
    disableClassification?: boolean;
    disableSips?: boolean;
    disableFfmpeg?: boolean;
    disableExifTool?: boolean;
    disableDarkTable?: boolean;
    disableRawTherapee?: boolean;
    disableImageMagick?: boolean;
    disableHeifConvert?: boolean;
    disableRsvgConvert?: boolean;
    disableVectors?: boolean;
    disableJpegXl?: boolean;
    disableRaw?: boolean;
    rawPresets?: boolean;
    exifBruteForce?: boolean;
    disableChown?: boolean;
    detectNsfw?: boolean;
    uploadNsfw?: boolean;
  };
  readonly customization?: {
    defaultLocale?: string;
    defaultTheme?: string;
    pwaName?: string;
    pwaMode?: string;
    icon?: string;
    color?: string;
    footerLegalInfo?: string;
    legalUrl?: string;
    wallpaperUri?: string;
  };
  readonly site?: {
    cdnUrl?: string;
    cdnVideoStreaming?: boolean;
    siteUrl?: string;
    siteAuthor?: string;
    siteTitle?: string;
    siteCaption?: string;
    siteDescription?: string;
    sitePreview?: string;
  };
  readonly proxy?: {
    httpsProxyUrl?: string;
    httpsProxyInsecure?: boolean;
    trustedProxy?: string;
    protoHeader?: string;
    protoHttps?: string;
  };
  readonly webServer?: {
    disableTls?: boolean;
    tlsCert?: string;
    tlsKey?: string;
    disableSts?: boolean;
    stsSeconds?: number;
    stsSubDomains?: boolean;
    stsPreload?: boolean;
    maxLoginAttempts?: number;
    loginAttemptInterval?: string;
    ipsLimit?: number;
    ipsInterval?: string;
    csp?: string;
    cto?: string;
    coop?: string;
    referrerPolicy?: string;
    frameOptions?: string;
    xssProtection?: string;
    mode?: HttpMode;
    compression?: HttpCompression;
    cacheMaxAge?: number;
    cachePublic?: boolean;
    host?: string;
    hostPort?: number;
    hostname?: string;
  };
  readonly fileConverters?: {
    sipsBin?: string;
    sipsBlocklist?: string;
    ffmpegBin?: string;
    ffmpegEncoder?: string;
    ffmpegBitrate?: number;
    ffmpegMapVideo?: string;
    ffmpegMapAudio?: string;
    exifToolBin?: string;
    darkTableBin?: string;
    darkTableBlocklist?: string;
    darkTableConfigPath?: string;
    darkTableCachePath?: string;
    rawTherapeeBin?: string;
    rawTherapeeBlocklist?: string;
    imageMagickBin?: string;
    imageMagickBlocklist?: string;
    heifConvertBin?: string;
    rsvgConvertBin?: string;
  };
  readonly imageQuality?: {
    thumbnailColor?: string;
    thumbnailFilter?: string;
    thumbnailSize?: number;
    thumbnailSizeUncached?: number;
    createMissingThumbnails?: boolean;
    jpegQuality?: number;
    jpegSize?: number;
    pngSize?: number;
  };
  readonly facialRecognition?: {
    minimumFaceSize?: number;
    faceScore?: number;
    faceOverlapPercentage?: number;
    clusterSize?: number;
    clusterScore?: number;
    clusterCore?: number;
    clusterDistance?: number;
    matchDistance?: number;
  };
}

export interface DatabaseOptions {
  driver: DatabaseDriver;
  name: string;
  server: string;
  user: string;
  dsn?: string;
  maxConnections?: number;
  maxIdleConnections?: number;
}

export enum AuthMode {
  PASSWORD = 'password',
  PUBLIC = 'public',
}

export enum HttpCompression {
  GZIP = 'gzip',
  NONE = 'none',
}

export enum HttpMode {
  DEBUG = 'debug',
  RELEASE = 'release',
  TEST = 'test',
}

export enum LogLevel {
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warning',
  ERROR = 'error',
  FATAL = 'fatal',
  PANIC = 'panic',
  TRACE = 'trace',
}

export enum DatabaseDriver {
  MYSQL = 'mysql',
  SQLITE = 'sqlite',
}

export interface PhotoPrismOptions {
  readonly photosNfsOptions: NfsShareVolumeOptions;
  readonly auth?: {
    authMode?: AuthMode;
    adminUser?: string;
    adminPassword?: ISecret;
    sessionMaxAge?: number;
    sessionTimeout?: number;
    registerUri?: string;
    passwordResetUri?: string;
    minimumPasswordLength?: number;
  };
  readonly storage?: {
    configPath?: string;
    defaultsYaml?: string;
    originalsPath?: string;
    originalsSizeLimit?: number;
    resolutionLimit?: number;
    usersPath?: string;
    sidecarPath?: string;
    storagePath?: string;
    backupPath?: string;
    cachePath?: string;
    importPath?: string;
    importDest?: string;
    assetsPath?: string;
    tempPath?: string;
  };
  readonly idexing?: {
    workers?: number;
    wakeupInterval?: number;
    autoIndexDelay?: number;
    autoImportDelay?: number;
  };
  logLevel?: LogLevel;
  readonly features?: {
    readonly?: boolean;
    experimental?: boolean;
    disableSettings?: boolean;
    disableRestart?: boolean;
    disableBackups?: boolean;
    disableWebDav?: boolean;
    disablePlaces?: boolean;
    disableTensorFlow?: boolean;
    disableFaces?: boolean;
    disableClassification?: boolean;
    disableSips?: boolean;
    disableFfmpeg?: boolean;
    disableExifTool?: boolean;
    disableDarkTable?: boolean;
    disableRawTherapee?: boolean;
    disableImageMagick?: boolean;
    disableHeifConvert?: boolean;
    disableRsvgConvert?: boolean;
    disableVectors?: boolean;
    disableJpegXl?: boolean;
    disableRaw?: boolean;
    rawPresets?: boolean;
    exifBruteForce?: boolean;
    disableChown?: boolean;
    detectNsfw?: boolean;
    uploadNsfw?: boolean;
  };
  readonly customization?: {
    defaultLocale?: string;
    defaultTheme?: string;
    pwaName?: string;
    pwaMode?: string;
    icon?: string;
    color?: string;
    footerLegalInfo?: string;
    legalUrl?: string;
    wallpaperUri?: string;
  };
  readonly site?: {
    cdnUrl?: string;
    cdnVideoStreaming?: boolean;
    siteUrl?: string;
    siteAuthor?: string;
    siteTitle?: string;
    siteCaption?: string;
    siteDescription?: string;
    sitePreview?: string;
  };
  readonly proxy?: {
    httpsProxyUrl?: string;
    httpsProxyInsecure?: boolean;
    trustedProxy?: string;
    protoHeader?: string;
    protoHttps?: string;
  };
  readonly webServer?: {
    disableTls?: boolean;
    tlsCert?: string;
    tlsKey?: string;
    disableSts?: boolean;
    stsSeconds?: number;
    stsSubDomains?: boolean;
    stsPreload?: boolean;
    maxLoginAttempts?: number;
    loginAttemptInterval?: string;
    ipsLimit?: number;
    ipsInterval?: string;
    csp?: string;
    cto?: string;
    coop?: string;
    referrerPolicy?: string;
    frameOptions?: string;
    xssProtection?: string;
    mode?: HttpMode;
    compression?: HttpCompression;
    cacheMaxAge?: number;
    cachePublic?: boolean;
    host?: string;
    hostPort?: number;
    hostname?: string;
  };
  readonly fileConverters?: {
    sipsBin?: string;
    sipsBlocklist?: string;
    ffmpegBin?: string;
    ffmpegEncoder?: string;
    ffmpegBitrate?: number;
    ffmpegMapVideo?: string;
    ffmpegMapAudio?: string;
    exifToolBin?: string;
    darkTableBin?: string;
    darkTableBlocklist?: string;
    darkTableConfigPath?: string;
    darkTableCachePath?: string;
    rawTherapeeBin?: string;
    rawTherapeeBlocklist?: string;
    imageMagickBin?: string;
    imageMagickBlocklist?: string;
    heifConvertBin?: string;
    rsvgConvertBin?: string;
  };
  readonly imageQuality?: {
    thumbnailColor?: string;
    thumbnailFilter?: string;
    thumbnailSize?: number;
    thumbnailSizeUncached?: number;
    createMissingThumbnails?: boolean;
    jpegQuality?: number;
    jpegSize?: number;
    pngSize?: number;
  };
  readonly facialRecognition?: {
    minimumFaceSize?: number;
    faceScore?: number;
    faceOverlapPercentage?: number;
    clusterSize?: number;
    clusterScore?: number;
    clusterCore?: number;
    clusterDistance?: number;
    matchDistance?: number;
  };
}

export class PhotoPrismChart extends HomelabChart {
  readonly image = 'photoprism/photoprism:latest';
  readonly dbImage = 'mariadb:10.11';
  readonly deployment: Deployment;

  constructor(scope: Construct, name: string, props: PhotoPrismChartProps) {
    super(scope, name, props);

    this.deployment = new Deployment(this, 'deployment', {
      replicas: 1,
    });

    this.buildPhotoPrism(props);
  }

  private formPersistanceVolume(name: string, props: PersistentVolumeClaimProps): Volume {
    let pvc = new PersistentVolumeClaim(this, `${name}-pvc`, props);
    return Volume.fromPersistentVolumeClaim(this, `${name}-volume`, pvc);
  }

  private formPhotoPrismEnv(options: PhotoPrismChartProps): Record<string, EnvValue> {
    const secret = Secret.fromSecretName(this, 'photoprism-secret', options.passwordSecret);
    // default settings in docker compose
    const env: Record<string, EnvValue> = {
      PHOTOPRISM_ADMIN_USER: EnvValue.fromValue(options.auth?.adminUser ?? 'admin'),
      PHOTOPRISM_ADMIN_PASSWORD: EnvValue.fromSecretValue({ secret: secret, key: 'PASSWORD' }),
      PHOTOPRISM_AUTH_MODE: EnvValue.fromValue(options.auth?.authMode ?? AuthMode.PASSWORD), //password or public
      PHOTOPRISM_SITE_URL: EnvValue.fromValue(options.site?.siteUrl ?? 'http://photoprism.me:2342/'),
      PHOTOPRISM_ORIGINALSLIMIT: EnvValue.fromValue(`${options.storage?.originalsSizeLimit}` ?? '5000'),
      PHOTOPRISM_HTTP_COMPRESSION: EnvValue.fromValue(options.webServer?.compression ?? HttpCompression.GZIP),
      PHOTOPRISM_LOG_LEVEL: EnvValue.fromValue(options.logLevel ?? LogLevel.INFO),
      PHOTOPRISM_READONLY: EnvValue.fromValue(`${options.features?.readonly ?? false}`),
      PHOTOPRISM_EXPERIMENTAL: EnvValue.fromValue(`${options.features?.experimental ?? false}`),
      PHOTOPRISM_DISABLE_CHOWN: EnvValue.fromValue(`${options.features?.disableChown ?? false}`),
      PHOTOPRISM_DISABLE_WEBDAV: EnvValue.fromValue(`${options.features?.disableWebDav ?? false}`),
      PHOTOPRISM_DISABLE_SETTINGS: EnvValue.fromValue(`${options.features?.disableSettings ?? false}`),
      PHOTOPRISM_DISABLE_TENSORFLOW: EnvValue.fromValue(`${options.features?.disableTensorFlow ?? false}`),
      PHOTOPRISM_DISABLE_FACES: EnvValue.fromValue(`${options.features?.disableFaces ?? false}`),
      PHOTOPRISM_DISABLE_CLASSIFICATION: EnvValue.fromValue(`${options.features?.disableClassification ?? false}`),
      PHOTOPRISM_DISABLE_VECTORS: EnvValue.fromValue(`${options.features?.disableVectors ?? false}`),
      PHOTOPRISM_DISABLE_RAW: EnvValue.fromValue(`${options.features?.disableRaw ?? false}`),
      PHOTOPRISM_RAW_PRESETS: EnvValue.fromValue(`${options.features?.rawPresets ?? false}`),
      PHOTOPRISM_JPEG_QUALITY: EnvValue.fromValue(`${options.imageQuality?.jpegQuality ?? 90}`),
      PHOTOPRISM_DETECT_NSFW: EnvValue.fromValue(`${options.features?.detectNsfw ?? false}`),
      PHOTOPRISM_UPLOAD_NSFW: EnvValue.fromValue(`${options.features?.uploadNsfw ?? false}`),
      PHOTOPRISM_SITE_CAPTION: EnvValue.fromValue(options.site?.siteCaption ?? 'AI-Powered Photos App'),
      PHOTOPRISM_SITE_DESCRIPTION: EnvValue.fromValue(options.site?.siteDescription ?? 'Browse, organize, and share your personal photo collection.'),
      PHOTOPRISM_SITE_AUTHOR: EnvValue.fromValue(options.site?.siteAuthor ?? 'Photoprism'),
      PHOTOPRISM_DATABASE_SERVER: EnvValue.fromValue(options.database?.server ?? 'mariadb:3306'),
      PHOTOPRISM_DATABASE_DRIVER: EnvValue.fromValue(options.database?.driver ?? DatabaseDriver.MYSQL),
      PHOTOPRISM_DATABASE_NAME: EnvValue.fromValue(options.database?.name ?? 'photoprism'),
      PHOTOPRISM_DATABASE_USER: EnvValue.fromValue(options.database?.user ?? 'photoprism'),
      PHOTOPRISM_DATABASE_PASSWORD: EnvValue.fromSecretValue({ secret: secret, key: 'PASSWORD' }),
    };

    if (options.auth) {
      if (options.auth.sessionMaxAge) {
        env.PHOTOPRISM_SESSION_MAXAGE = EnvValue.fromValue(`${options.auth.sessionMaxAge}`);
      }
      if (options.auth.sessionTimeout) {
        env.PHOTOPRISM_SESSION_TIMEOUT = EnvValue.fromValue(`${options.auth.sessionTimeout}`);
      }
      if (options.auth.registerUri) {
        env.PHOTOPRISM_REGISTER_URI = EnvValue.fromValue(options.auth.registerUri);
      }
      if (options.auth.passwordResetUri) {
        env.PHOTOPRISM_PASSWORD_RESET_URI = EnvValue.fromValue(options.auth.passwordResetUri);
      }
      if (options.auth.minimumPasswordLength) {
        env.PHOTOPRISM_PASSWORD_LENGTH = EnvValue.fromValue(`${options.auth.minimumPasswordLength}`);
      }
    }

    if (options.storage) {
      if (options.storage.configPath) {
        env.PHOTOPRISM_CONFIG_PATH = EnvValue.fromValue(options.storage.configPath);
      }
      if (options.storage.defaultsYaml) {
        env.PHOTOPRISM_DEFAULTS_YAML = EnvValue.fromValue(options.storage.defaultsYaml);
      }
      if (options.storage.originalsPath) {
        env.PHOTOPRISM_ORIGINALS_PATH = EnvValue.fromValue(options.storage.originalsPath);
      }
      if (options.storage.originalsSizeLimit) {
        env.PHOTOPRISM_ORIGINALS_LIMIT = EnvValue.fromValue(`${options.storage.originalsSizeLimit}`);
      }
      if (options.storage.resolutionLimit) {
        env.PHOTOPRISM_RESOLUTION_LIMIT = EnvValue.fromValue(`${options.storage.resolutionLimit}`);
      }
      if (options.storage.importPath) {
        env.PHOTOPRISM_IMPORT_PATH = EnvValue.fromValue(options.storage.importPath);
      }
      if (options.storage.usersPath) {
        env.PHOTOPRISM_USERS_PATH = EnvValue.fromValue(options.storage.usersPath);
      }
      if (options.storage.storagePath) {
        env.PHOTOPRISM_STORAGE_PATH = EnvValue.fromValue(options.storage.storagePath);
      }
      if (options.storage.sidecarPath) {
        env.PHOTOPRISM_SIDECAR_PATH = EnvValue.fromValue(options.storage.sidecarPath);
      }
      if (options.storage.backupPath) {
        env.PHOTOPRISM_BACKUP_PATH = EnvValue.fromValue(options.storage.backupPath);
      }
      if (options.storage.cachePath) {
        env.PHOTOPRISM_CACHE_PATH = EnvValue.fromValue(options.storage.cachePath);
      }
      if (options.storage.importDest) {
        env.PHOTOPRISM_IMPORT_DEST = EnvValue.fromValue(options.storage.importDest);
      }
      if (options.storage.assetsPath) {
        env.PHOTOPRISM_ASSETS_PATH = EnvValue.fromValue(options.storage.assetsPath);
      }
      if (options.storage.tempPath) {
        env.PHOTOPRISM_TEMP_PATH = EnvValue.fromValue(options.storage.tempPath);
      }
    }

    if (options.idexing) {
      if (options.idexing.workers) {
        env.PHOTOPRISM_WORKERS = EnvValue.fromValue(`${options.idexing.workers}`);
      }
      if (options.idexing.wakeupInterval) {
        env.PHOTOPRISM_WAKEUP_INTERVAL = EnvValue.fromValue(`${options.idexing.wakeupInterval}`);
      }
      if (options.idexing.autoIndexDelay) {
        env.PHOTOPRISM_AUTO_INDEX_DELAY = EnvValue.fromValue(`${options.idexing.autoIndexDelay}`);
      }
      if (options.idexing.autoImportDelay) {
        env.PHOTOPRISM_AUTO_IMPORT_DELAY = EnvValue.fromValue(`${options.idexing.autoImportDelay}`);
      }
    }

    if (options.features) {
      if (options.features.disableRestart) {
        env.PHOTOPRISM_DISABLE_RESTART = EnvValue.fromValue(`${options.features.disableRestart}`);
      }
      if (options.features.disableBackups) {
        env.PHOTOPRISM_DISABLE_BACKUPS = EnvValue.fromValue(`${options.features.disableBackups}`);
      }
      if (options.features.disablePlaces) {
        env.PHOTOPRISM_DISABLE_PLACES = EnvValue.fromValue(`${options.features.disablePlaces}`);
      }
      if (options.features.disableSips) {
        env.PHOTOPRISM_DISABLE_SIPS = EnvValue.fromValue(`${options.features.disableSips}`);
      }
      if (options.features.disableFfmpeg) {
        env.PHOTOPRISM_DISABLE_FFMPEG = EnvValue.fromValue(`${options.features.disableFfmpeg}`);
      }
      if (options.features.disableExifTool) {
        env.PHOTOPRISM_DISABLE_EXIFTOOL = EnvValue.fromValue(`${options.features.disableExifTool}`);
      }
      if (options.features.disableDarkTable) {
        env.PHOTOPRISM_DISABLE_DARKTABLE = EnvValue.fromValue(`${options.features.disableDarkTable}`);
      }
      if (options.features.disableRawTherapee) {
        env.PHOTOPRISM_DISABLE_RAWTHERAPEE = EnvValue.fromValue(`${options.features.disableRawTherapee}`);
      }
      if (options.features.disableImageMagick) {
        env.PHOTOPRISM_DISABLE_IMAGEMAGICK = EnvValue.fromValue(`${options.features.disableImageMagick}`);
      }
      if (options.features.disableHeifConvert) {
        env.PHOTOPRISM_DISABLE_HEIFCONVERT = EnvValue.fromValue(`${options.features.disableHeifConvert}`);
      }
      if (options.features.disableRsvgConvert) {
        env.PHOTOPRISM_DISABLE_RSVGCONVERT = EnvValue.fromValue(`${options.features.disableRsvgConvert}`);
      }
      if (options.features.disableJpegXl) {
        env.PHOTOPRISM_DISABLE_JPEGXL = EnvValue.fromValue(`${options.features.disableJpegXl}`);
      }
      if (options.features.exifBruteForce) {
        env.PHOTOPRISM_EXIFBRUTEFORCE = EnvValue.fromValue(`${options.features.exifBruteForce}`);
      }
    }

    if (options.customization) {
      if (options.customization.defaultLocale) {
        env.PHOTOPRISM_DEFAULT_LOCALE = EnvValue.fromValue(options.customization.defaultLocale);
      }
      if (options.customization.defaultTheme) {
        env.PHOTOPRISM_DEFAULT_THEME = EnvValue.fromValue(options.customization.defaultTheme);
      }
      if (options.customization.pwaName) {
        env.PHOTOPRISM_APP_NAME = EnvValue.fromValue(options.customization.pwaName);
      }
      if (options.customization.pwaMode) {
        env.PHOTOPRISM_APP_MODE = EnvValue.fromValue(options.customization.pwaMode);
      }
      if (options.customization.icon) {
        env.PHOTOPRISM_APP_ICON = EnvValue.fromValue(options.customization.icon);
      }
      if (options.customization.color) {
        env.PHOTOPRISM_APP_COLOR = EnvValue.fromValue(options.customization.color);
      }
      if (options.customization.legalUrl) {
        env.PHOTOPRISM_LEGAL_URL = EnvValue.fromValue(options.customization.legalUrl);
      }
      if (options.customization.footerLegalInfo) {
        env.PHOTOPRISM_LEGAL_INFO = EnvValue.fromValue(options.customization.footerLegalInfo);
      }
      if (options.customization.wallpaperUri) {
        env.PHOTOPRISM_WALLPAPER_URI = EnvValue.fromValue(options.customization.wallpaperUri);
      }
    }

    if (options.site) {
      if (options.site.cdnUrl) {
        env.PHOTOPRISM_CDN_URL = EnvValue.fromValue(options.site.cdnUrl);
      }
      if (options.site.cdnVideoStreaming) {
        env.PHOTOPRISM_CDN_VIDEO_STREAMING = EnvValue.fromValue(`${options.site.cdnVideoStreaming}`);
      }
      if (options.site.siteTitle) {
        env.PHOTOPRISM_SITE_TITLE = EnvValue.fromValue(options.site.siteTitle);
      }
      if (options.site.sitePreview) {
        env.PHOTOPRISM_SITE_PREVIEW = EnvValue.fromValue(`${options.site.sitePreview}`);
      }
    }

    if (options.proxy) {
      if (options.proxy.httpsProxyInsecure) {
        env.PHOTOPRISM_HTTPS_PROXY_INSECURE = EnvValue.fromValue(`${options.proxy.httpsProxyInsecure}`);
      }
      if (options.proxy.httpsProxyUrl) {
        env.PHOTOPRISM_HTTPS_PROXY = EnvValue.fromValue(options.proxy.httpsProxyUrl);
      }
      if (options.proxy.trustedProxy) {
        env.PHOTOPRISM_TRUSTED_PROXY = EnvValue.fromValue(options.proxy.trustedProxy);
      }
      if (options.proxy.protoHeader) {
        env.PHOTOPRISM_PROXY_PROTO_HEADER = EnvValue.fromValue(options.proxy.protoHeader);
      }
      if (options.proxy.protoHttps) {
        env.PHOTOPRISM_PROXY_PROTO_HTTPS = EnvValue.fromValue(`${options.proxy.protoHttps}`);
      }
    }

    if (options.webServer) {
      if (options.webServer.host) {
        env.PHOTOPRISM_HTTP_HOST = EnvValue.fromValue(options.webServer.host);
      }
      if (options.webServer.hostPort) {
        env.PHOTOPRISM_HTTP_PORT = EnvValue.fromValue(`${options.webServer.hostPort}`);
      }
      if (options.webServer.hostname) {
        env.PHOTOPRISM_HTTP_HOSTNAME = EnvValue.fromValue(options.webServer.hostname);
      }
      if (options.webServer.disableTls) {
        env.PHOTOPRISM_DISABLE_TLS = EnvValue.fromValue(`${options.webServer.disableTls}`);
      }
      if (options.webServer.tlsCert) {
        env.PHOTOPRISM_TLS_CERT = EnvValue.fromValue(options.webServer.tlsCert);
      }
      if (options.webServer.tlsKey) {
        env.PHOTOPRISM_TLS_KEY = EnvValue.fromValue(options.webServer.tlsKey);
      }
      if (options.webServer.disableSts) {
        env.PHOTOPRISM_DISABLE_STS = EnvValue.fromValue(`${options.webServer.disableSts}`);
      }
      if (options.webServer.stsSeconds) {
        env.PHOTOPRISM_STS_SECONDS = EnvValue.fromValue(`${options.webServer.stsSeconds}`);
      }
      if (options.webServer.stsSubDomains) {
        env.PHOTOPRISM_STS_SUBDOMAINS = EnvValue.fromValue(`${options.webServer.stsSubDomains}`);
      }
      if (options.webServer.stsPreload) {
        env.PHOTOPRISM_STS_PRELOAD = EnvValue.fromValue(`${options.webServer.stsPreload}`);
      }
      if (options.webServer.loginAttemptInterval) {
        env.PHOTOPRISM_LOGIN_INTERVAL = EnvValue.fromValue(`${options.webServer.loginAttemptInterval}`);
      }
      if (options.webServer.maxLoginAttempts) {
        env.PHOTOPRISM_LOGIN_LIMIT = EnvValue.fromValue(`${options.webServer.maxLoginAttempts}`);
      }
      if (options.webServer.ipsLimit) {
        env.PHOTOPRISM_IPS_LIMIT = EnvValue.fromValue(`${options.webServer.ipsLimit}`);
      }
      if (options.webServer.ipsInterval) {
        env.PHOTOPRISM_IPS_INTERVAL = EnvValue.fromValue(`${options.webServer.ipsInterval}`);
      }
      if (options.webServer.csp) {
        env.PHOTOPRISM_HTTP_CSP = EnvValue.fromValue(options.webServer.csp);
      }
      if (options.webServer.cto) {
        env.PHOTOPRISM_HTTP_CTO = EnvValue.fromValue(options.webServer.cto);
      }
      if (options.webServer.coop) {
        env.PHOTOPRISM_HTTP_COOP = EnvValue.fromValue(options.webServer.coop);
      }
      if (options.webServer.referrerPolicy) {
        env.PHOTOPRISM_HTTP_REFERRER_POLICY = EnvValue.fromValue(options.webServer.referrerPolicy);
      }
      if (options.webServer.frameOptions) {
        env.PHOTOPRISM_HTTP_FRAME_OPTIONS = EnvValue.fromValue(options.webServer.frameOptions);
      }
      if (options.webServer.mode) {
        env.PHOTOPRISM_HTTP_MODE = EnvValue.fromValue(options.webServer.mode);
      }
      if (options.webServer.xssProtection) {
        env.PHOTOPRISM_HTTP_XSS_PROTECTION = EnvValue.fromValue(options.webServer.xssProtection);
      }
      if (options.webServer.cacheMaxAge) {
        env.PHOTOPRISM_HTTP_CACHE_MAXAGE = EnvValue.fromValue(`${options.webServer.cacheMaxAge}`);
      }
      if (options.webServer.cachePublic) {
        env.PHOTOPRISM_HTTP_CACHE_PUBLIC = EnvValue.fromValue(`${options.webServer.cachePublic}`);
      }
    }

    if (options.database) {
      if (options.database.dsn) {
        env.PHOTOPRISM_DATABASE_DSN = EnvValue.fromValue(options.database.dsn);
      }
      if (options.database.maxConnections) {
        env.PHOTOPRISM_DATABASE_CONNS = EnvValue.fromValue(`${options.database.maxConnections}`);
      }
      if (options.database.maxIdleConnections) {
        env.PHOTOPRISM_DATABASE_CONNS_IDLE = EnvValue.fromValue(`${options.database.maxIdleConnections}`);
      }
    }

    if (options.fileConverters) {
      if (options.fileConverters.sipsBin) {
        env.PHOTOPRISM_SIPS_BIN = EnvValue.fromValue(options.fileConverters.sipsBin);
      }
      if (options.fileConverters.sipsBlocklist) {
        env.PHOTOPRISM_SIPS_BLACKLIST = EnvValue.fromValue(options.fileConverters.sipsBlocklist);
      }
      if (options.fileConverters.ffmpegBin) {
        env.PHOTOPRISM_FFMPEG_BIN = EnvValue.fromValue(options.fileConverters.ffmpegBin);
      }
      if (options.fileConverters.ffmpegBitrate) {
        env.PHOTOPRISM_FFMPEG_BITRATE = EnvValue.fromValue(`${options.fileConverters.ffmpegBitrate}`);
      }
      if (options.fileConverters.ffmpegEncoder) {
        env.PHOTOPRISM_FFMPEG_ENCODER = EnvValue.fromValue(options.fileConverters.ffmpegEncoder);
      }
      if (options.fileConverters.ffmpegMapAudio) {
        env.PHOTOPRISM_FFMPEG_MAP_AUDIO = EnvValue.fromValue(`${options.fileConverters.ffmpegMapAudio}`);
      }
      if (options.fileConverters.ffmpegMapVideo) {
        env.PHOTOPRISM_FFMPEG_MAP_VIDEO = EnvValue.fromValue(`${options.fileConverters.ffmpegMapVideo}`);
      }
      if (options.fileConverters.exifToolBin) {
        env.PHOTOPRISM_EXIFTOOL_BIN = EnvValue.fromValue(options.fileConverters.exifToolBin);
      }
      if (options.fileConverters.darkTableBin) {
        env.PHOTOPRISM_DARKTABLE_BIN = EnvValue.fromValue(options.fileConverters.darkTableBin);
      }
      if (options.fileConverters.darkTableBlocklist) {
        env.PHOTOPRISM_DARKTABLE_BLACKLIST = EnvValue.fromValue(options.fileConverters.darkTableBlocklist);
      }
      if (options.fileConverters.darkTableConfigPath) {
        env.PHOTOPRISM_DARKTABLE_CONFIG_PATGH = EnvValue.fromValue(options.fileConverters.darkTableConfigPath);
      }
      if (options.fileConverters.darkTableCachePath) {
        env.PHOTOPRISM_DARKTABLE_CACHE_PATH = EnvValue.fromValue(options.fileConverters.darkTableCachePath);
      }
      if (options.fileConverters.rawTherapeeBin) {
        env.PHOTOPRISM_RAWTHERAPEE_BIN = EnvValue.fromValue(options.fileConverters.rawTherapeeBin);
      }
      if (options.fileConverters.rawTherapeeBlocklist) {
        env.PHOTOPRISM_RAWTHERAPEE_BLACKLIST = EnvValue.fromValue(options.fileConverters.rawTherapeeBlocklist);
      }
      if (options.fileConverters.imageMagickBin) {
        env.PHOTOPRISM_IMAGEMAGICK_BIN = EnvValue.fromValue(options.fileConverters.imageMagickBin);
      }
      if (options.fileConverters.imageMagickBlocklist) {
        env.PHOTOPRISM_IMAGEMAGICK_BLACKLIST = EnvValue.fromValue(options.fileConverters.imageMagickBlocklist);
      }
      if (options.fileConverters.heifConvertBin) {
        env.PHOTOPRISM_HEIFCONVERT_BIN = EnvValue.fromValue(options.fileConverters.heifConvertBin);
      }
      if (options.fileConverters.rsvgConvertBin) {
        env.PHOTOPRISM_RSVGCONVERT_BIN = EnvValue.fromValue(options.fileConverters.rsvgConvertBin);
      }
    }

    if (options.imageQuality) {
      if (options.imageQuality.jpegQuality) {
        env.PHOTOPRISM_JPEG_QUALITY = EnvValue.fromValue(`${options.imageQuality.jpegQuality}`);
      }
      if (options.imageQuality.thumbnailColor) {
        env.PHOTOPRISM_THUMB_COLOR = EnvValue.fromValue(options.imageQuality.thumbnailColor);
      }
      if (options.imageQuality.thumbnailFilter) {
        env.PHOTOPRISM_THUMB_FILTER = EnvValue.fromValue(options.imageQuality.thumbnailFilter);
      }
      if (options.imageQuality.thumbnailSize) {
        env.PHOTOPRISM_THUMB_SIZE = EnvValue.fromValue(`${options.imageQuality.thumbnailSize}`);
      }
      if (options.imageQuality.thumbnailSizeUncached) {
        env.PHOTOPRISM_THUMB_SIZE_UNCACHED = EnvValue.fromValue(`${options.imageQuality.thumbnailSizeUncached}`);
      }
      if (options.imageQuality.createMissingThumbnails) {
        env.PHOTOPRISM_THUMB_UNCACHED = EnvValue.fromValue(`${options.imageQuality.createMissingThumbnails}`);
      }
      if (options.imageQuality.jpegSize) {
        env.PHOTOPRISM_JPEG_SIZE = EnvValue.fromValue(`${options.imageQuality.jpegSize}`);
      }
      if (options.imageQuality.pngSize) {
        env.PHOTOPRISM_PNG_SIZE = EnvValue.fromValue(`${options.imageQuality.pngSize}`);
      }
    }

    if (options.facialRecognition) {
      if (options.facialRecognition.minimumFaceSize) {
        env.PHOTOPRISM_FACE_SIZE = EnvValue.fromValue(`${options.facialRecognition.minimumFaceSize}`);
      }
      if (options.facialRecognition.faceScore) {
        env.PHOTOPRISM_FACE_SCORE = EnvValue.fromValue(`${options.facialRecognition.faceScore}`);
      }
      if (options.facialRecognition.faceOverlapPercentage) {
        env.PHOTOPRISM_FACE_OVERLAP = EnvValue.fromValue(`${options.facialRecognition.faceOverlapPercentage}`);
      }
      if (options.facialRecognition.clusterSize) {
        env.PHOTOPRISM_FACE_CLUSTER_SIZE = EnvValue.fromValue(`${options.facialRecognition.clusterSize}`);
      }
      if (options.facialRecognition.clusterScore) {
        env.PHOTOPRISM_FACE_CLUSTER_SCORE = EnvValue.fromValue(`${options.facialRecognition.clusterScore}`);
      }
      if (options.facialRecognition.clusterCore) {
        env.PHOTOPRISM_FACE_CLUSTER_CORE = EnvValue.fromValue(`${options.facialRecognition.clusterCore}`);
      }
      if (options.facialRecognition.clusterDistance) {
        env.PHOTOPRISM_FACE_CLUSTER_DIST = EnvValue.fromValue(`${options.facialRecognition.clusterDistance}`);
      }
      if (options.facialRecognition.matchDistance) {
        env.PHOTOPRISM_FACE_MATCH_DIST = EnvValue.fromValue(`${options.facialRecognition.matchDistance}`);
      }
    }
    return env;
  }

  private buildPhotoPrism(options: PhotoPrismChartProps) {
    const photosVolume = NfsVolume.fromShare(this, 'photos-share', options.photosNfsOptions);

    const storageVolume = this.formPersistanceVolume('storage', {
      storageClassName: 'longhorn',
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_MANY],
      storage: Size.gibibytes(50),
    });

    const port = 2342;

    this.deployment.addContainer({
      name: 'photoprism',
      image: this.image,
      port: port,
      envVariables: this.formPhotoPrismEnv(options),
      workingDir: '/photoprism',
      volumeMounts: [
        {
          path: '/photoprism/originals',
          volume: photosVolume,
        },
        {
          path: '/photoprism/storage',
          volume: storageVolume,
        },
      ],
      resources: {},
      securityContext: {
        ensureNonRoot: false,
        privileged: true,
        readOnlyRootFilesystem: false,
        allowPrivilegeEscalation: true,
        user: 1000,
        group: 1000,
      },
    });

    const service = new HomelabService(this, 'photoprism-service', {
      type: ServiceType.CLUSTER_IP,
      selector: this.deployment,
      ports: [
        {
          name: 'http',
          port: port,
          targetPort: port,
        },
      ],
    });

    if (options.tls) {
      const cert = service.createSSLCertificate({
        name: options.tls.name,
        issuer: options.tls.certIssuer,
        dnsNames: options.tls.dnsNames,
      });
      service.exposeViaTraefikIngressRoute({
        dnsNames: options.tls.dnsNames,
        certificate: cert,
      });
    }
  }
}