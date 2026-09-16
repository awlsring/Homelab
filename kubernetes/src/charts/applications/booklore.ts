import { Duration, Size } from "cdk8s";
import {
  Cpu,
  Deployment,
  DeploymentStrategy,
  EnvValue,
  ImagePullPolicy,
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  Probe,
  Protocol,
  Service,
  ServiceType,
  Volume,
} from "cdk8s-plus-31";
import { Construct } from "constructs";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
import {
  HomelabIngress,
  HomelabIngressOptions,
} from "../../constructs/homelab/ingress";
import { PersistentVolumeClaimOptions } from "../../constructs/homelab/storage";
import { OnepasswordSecretPassword } from "../../constructs/external-secrets/onepassword-secret-password";
import {
  SecretStore,
  SecretStoreType,
} from "../../constructs/external-secrets/secret-store";
import { CloudflareClusterTunnel } from "../../constructs/cloudflare/tunnel/cluster-tunnel";

const BOOKLORE_IMAGE = "ghcr.io/booklore-app/booklore";
const BOOKLORE_PORT = 6060;
const BOOKLORE_DATA_PATH = "/app/data";
const BOOKS_PATH = "/books";

const MARIADB_IMAGE = "lscr.io/linuxserver/mariadb";
const MARIADB_PORT = 3306;
const MARIADB_CONFIG_PATH = "/config";
const DATABASE_NAME = "booklore";
const DATABASE_USER = "booklore";

export interface BookloreChartProps extends HomelabChartProps {
  readonly imageTag: string;
  readonly mariadbImageTag: string;
  readonly secretStore: string;
  readonly ingress: HomelabIngressOptions;
  readonly tunnel?: {
    readonly email: string;
    readonly domain: string;
    readonly cloudflareSecret: string;
    readonly accountId: string;
    readonly fqdn: string;
  };
  readonly storage: {
    readonly data: PersistentVolumeClaimOptions;
    readonly database: PersistentVolumeClaimOptions;
    readonly books: {
      readonly server: string;
      readonly serverPath: string;
    };
  };
}

export class BookloreChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: BookloreChartProps) {
    super(scope, name, props);

    const secretStore = SecretStore.fromName(
      this,
      props.secretStore,
      SecretStoreType.CLUSTER_SECRET_STORE,
    );
    const databasePassword = new OnepasswordSecretPassword(
      this,
      "database-password",
      {
        store: secretStore,
        secretKey: "booklore-database-password",
      },
    );
    const databaseRootPassword = new OnepasswordSecretPassword(
      this,
      "database-root-password",
      {
        store: secretStore,
        secretKey: "booklore-database-root-password",
      },
    );
    const databasePasswordValue = databasePassword.asSecretValue();
    const databaseRootPasswordValue = databaseRootPassword.asSecretValue();

    const databasePvc = new PersistentVolumeClaim(this, "database-pvc", {
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storageClassName: props.storage.database.storageClass,
      storage: props.storage.database.size ?? Size.gibibytes(10),
    });
    const databaseVolume = Volume.fromPersistentVolumeClaim(
      this,
      "database-volume",
      databasePvc,
    );

    const database = new Deployment(this, "database", {
      replicas: 1,
      strategy: DeploymentStrategy.recreate(),
      containers: [
        {
          name: "mariadb",
          image: `${MARIADB_IMAGE}:${props.mariadbImageTag}`,
          imagePullPolicy: ImagePullPolicy.IF_NOT_PRESENT,
          ports: [
            {
              name: "mysql",
              number: MARIADB_PORT,
              protocol: Protocol.TCP,
            },
          ],
          envVariables: {
            PUID: EnvValue.fromValue("1000"),
            PGID: EnvValue.fromValue("1000"),
            TZ: EnvValue.fromValue("America/Los_Angeles"),
            MYSQL_DATABASE: EnvValue.fromValue(DATABASE_NAME),
            MYSQL_USER: EnvValue.fromValue(DATABASE_USER),
            MYSQL_PASSWORD: EnvValue.fromSecretValue(databasePasswordValue),
            MYSQL_ROOT_PASSWORD: EnvValue.fromSecretValue(
              databaseRootPasswordValue,
            ),
          },
          resources: {
            cpu: {
              request: Cpu.millis(200),
              limit: Cpu.millis(2000),
            },
            memory: {
              request: Size.mebibytes(512),
              limit: Size.gibibytes(2),
            },
          },
          startup: Probe.fromCommand(
            ["/bin/sh", "-c", "mariadb-admin ping -h 127.0.0.1 --silent"],
            {
              failureThreshold: 30,
              periodSeconds: Duration.seconds(5),
              timeoutSeconds: Duration.seconds(5),
            },
          ),
          liveness: Probe.fromCommand(
            ["/bin/sh", "-c", "mariadb-admin ping -h 127.0.0.1 --silent"],
            {
              failureThreshold: 5,
              periodSeconds: Duration.seconds(10),
              timeoutSeconds: Duration.seconds(5),
            },
          ),
          readiness: Probe.fromCommand(
            ["/bin/sh", "-c", "mariadb-admin ping -h 127.0.0.1 --silent"],
            {
              failureThreshold: 3,
              periodSeconds: Duration.seconds(5),
              timeoutSeconds: Duration.seconds(5),
            },
          ),
          securityContext: {
            ensureNonRoot: false,
            readOnlyRootFilesystem: false,
          },
          volumeMounts: [
            {
              volume: databaseVolume,
              path: MARIADB_CONFIG_PATH,
            },
          ],
        },
      ],
    });

    const databaseService = new Service(this, "database-service", {
      selector: database,
      ports: [
        {
          name: "mysql",
          port: MARIADB_PORT,
          targetPort: MARIADB_PORT,
          protocol: Protocol.TCP,
        },
      ],
    });

    const dataPvc = new PersistentVolumeClaim(this, "data-pvc", {
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storageClassName: props.storage.data.storageClass,
      storage: props.storage.data.size ?? Size.gibibytes(10),
    });
    const dataVolume = Volume.fromPersistentVolumeClaim(
      this,
      "data-volume",
      dataPvc,
    );
    const booksVolume = Volume.fromNfs(this, "books-volume", "books", {
      server: props.storage.books.server,
      path: props.storage.books.serverPath,
    });
    const allowedOrigins = [
      `https://${props.ingress.hostname}`,
      ...(props.tunnel ? [`https://${props.tunnel.fqdn}`] : []),
    ];

    const booklore = new Deployment(this, "app", {
      replicas: 1,
      strategy: DeploymentStrategy.recreate(),
      initContainers: [
        {
          name: "wait-for-database",
          image: "docker.io/library/busybox:1.37",
          imagePullPolicy: ImagePullPolicy.IF_NOT_PRESENT,
          command: ["/bin/sh", "-c"],
          args: [
            `until nc -z -w 2 ${databaseService.name} ${MARIADB_PORT}; do sleep 2; done`,
          ],
          resources: {
            cpu: {
              request: Cpu.millis(10),
              limit: Cpu.millis(50),
            },
            memory: {
              request: Size.mebibytes(16),
              limit: Size.mebibytes(32),
            },
          },
          securityContext: {
            ensureNonRoot: false,
            readOnlyRootFilesystem: true,
          },
        },
      ],
      containers: [
        {
          name: "booklore",
          image: `${BOOKLORE_IMAGE}:${props.imageTag}`,
          imagePullPolicy: ImagePullPolicy.IF_NOT_PRESENT,
          ports: [
            {
              name: "http",
              number: BOOKLORE_PORT,
              protocol: Protocol.TCP,
            },
          ],
          envVariables: {
            USER_ID: EnvValue.fromValue("1000"),
            GROUP_ID: EnvValue.fromValue("1000"),
            TZ: EnvValue.fromValue("America/Los_Angeles"),
            ALLOWED_ORIGINS: EnvValue.fromValue(allowedOrigins.join(",")),
            DATABASE_URL: EnvValue.fromValue(
              `jdbc:mariadb://${databaseService.name}:${MARIADB_PORT}/${DATABASE_NAME}`,
            ),
            DATABASE_USERNAME: EnvValue.fromValue(DATABASE_USER),
            DATABASE_PASSWORD: EnvValue.fromSecretValue(databasePasswordValue),
            // BookLore only supports NAS storage when file writes and
            // reorganization are disabled.
            DISK_TYPE: EnvValue.fromValue("NETWORK"),
          },
          resources: {
            cpu: {
              request: Cpu.millis(500),
              limit: Cpu.millis(2000),
            },
            memory: {
              request: Size.gibibytes(1),
              limit: Size.gibibytes(4),
            },
          },
          startup: Probe.fromHttpGet("/api/v1/healthcheck", {
            port: BOOKLORE_PORT,
            failureThreshold: 30,
            periodSeconds: Duration.seconds(10),
            timeoutSeconds: Duration.seconds(5),
          }),
          liveness: Probe.fromHttpGet("/api/v1/healthcheck", {
            port: BOOKLORE_PORT,
            failureThreshold: 5,
            periodSeconds: Duration.seconds(30),
            timeoutSeconds: Duration.seconds(10),
          }),
          readiness: Probe.fromHttpGet("/api/v1/healthcheck", {
            port: BOOKLORE_PORT,
            failureThreshold: 3,
            periodSeconds: Duration.seconds(10),
            timeoutSeconds: Duration.seconds(5),
          }),
          securityContext: {
            ensureNonRoot: false,
            readOnlyRootFilesystem: false,
          },
          volumeMounts: [
            {
              volume: dataVolume,
              path: BOOKLORE_DATA_PATH,
            },
            {
              volume: booksVolume,
              path: BOOKS_PATH,
              readOnly: true,
            },
          ],
        },
      ],
    });

    const service = new Service(this, "service", {
      selector: booklore,
      type: props.ingress.type ?? ServiceType.CLUSTER_IP,
      ports: [
        {
          name: "http",
          port: BOOKLORE_PORT,
          targetPort: BOOKLORE_PORT,
          protocol: Protocol.TCP,
        },
      ],
    });

    new HomelabIngress(this, "ingress", {
      ingressClassName: props.ingress.ingressClass,
      annotations: props.ingress.annotations,
      service,
      port: BOOKLORE_PORT,
      hostname: props.ingress.hostname,
      certIssuer: props.ingress.certIssuer,
    });

    if (props.tunnel) {
      const tunnel = new CloudflareClusterTunnel(this, "tunnel", {
        tunnelName: "booklore",
        email: props.tunnel.email,
        domain: props.tunnel.domain,
        cloudflareSecret: props.tunnel.cloudflareSecret,
        accountId: props.tunnel.accountId,
      });
      tunnel.bindToService(service, {
        domainName: props.tunnel.fqdn,
      });
    }
  }
}
