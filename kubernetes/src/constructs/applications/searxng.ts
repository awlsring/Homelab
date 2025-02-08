import { Duration, Size } from "cdk8s";
import {
  ConfigMap,
  Cpu,
  Deployment,
  EnvValue,
  Probe,
  Protocol,
  SecretValue,
  Service,
  ServiceAccount,
  ServiceType,
  Volume,
} from "cdk8s-plus-31";
import { Construct } from "constructs";

const SEARXNG_IMAGE = "searxng/searxng";

export interface SearXNGProps {
  readonly secret: SecretValue;
  readonly imageTag: string;
  readonly hostname: string;
  readonly valkeyHostname: string;
}

export class SearXNG extends Construct {
  readonly deployment: Deployment;
  readonly service: Service;
  readonly serviceAccount: ServiceAccount;

  constructor(scope: Construct, id: string, props: SearXNGProps) {
    super(scope, id);

    // https://docs.searxng.org/admin/installation-searxng.html
    const settingsConfigMap = new ConfigMap(this, "settings", {
      data: {
        "settings.yml": `use_default_settings: true

server:
    limiter: false
    image_proxy: true
    port: 8080
    bind_address: "0.0.0.0"

ui:
    static_use_hash: true

search:
    safe_search: 0
    autocomplete: ""
    default_lang: ""
    formats:
    - html
    - json
`,
      },
    });
    const settingsVolume = Volume.fromConfigMap(
      this,
      "settings-vol",
      settingsConfigMap
    );

    const limiterConfigMap = new ConfigMap(this, "limiter", {
      data: {
        "limiter.toml": `[botdetection.ip_limit]
# activate link_token method in the ip_limit method
link_token = true
`,
      },
    });
    const limiterVolume = Volume.fromConfigMap(
      this,
      "limiter-vol",
      limiterConfigMap
    );

    const uwsgiConfigMap = new ConfigMap(this, "uwsgi", {
      data: {
        "uwsgi.ini": `[uwsgi]
# Who will run the code
uid = searxng
gid = searxng

# Number of workers (usually CPU count)
# default value: %k (= number of CPU core, see Dockerfile)
workers = %k

# Number of threads per worker
# default value: 4 (see Dockerfile)
threads = 4

# The right granted on the created socket
chmod-socket = 666

# Plugin to use and interpreter config
single-interpreter = true
master = true
plugin = python3
lazy-apps = true
enable-threads = 4

# Module to import
module = searx.webapp

# Virtualenv and python path
pythonpath = /usr/local/searxng/
chdir = /usr/local/searxng/searx/

# automatically set processes name to something meaningful
auto-procname = true

# Disable request logging for privacy
disable-logging = true
log-5xx = true

# Set the max size of a request (request-body excluded)
buffer-size = 8192

# No keep alive
# See https://github.com/searx/searx-docker/issues/24
add-header = Connection: close

# uwsgi serves the static files
static-map = /static=/usr/local/searxng/searx/static
# expires set to one day
static-expires = /* 86400
static-gzip-all = True
offload-threads = 4
`,
      },
    });
    const uwsgiVolume = Volume.fromConfigMap(this, "uwsgi-vol", uwsgiConfigMap);

    const image = `${SEARXNG_IMAGE}:${props.imageTag}`;

    this.serviceAccount = new ServiceAccount(this, "service-account", {
      automountToken: true,
    });

    this.deployment = new Deployment(this, "deployment", {
      replicas: 1,
      serviceAccount: this.serviceAccount,
      automountServiceAccountToken: true,
      containers: [
        {
          name: "searxng",
          image: image,
          ports: [{ number: 8080, protocol: Protocol.TCP }],
          envVariables: {
            SEARXNG_REDIS_URL: EnvValue.fromValue(
              `redis://${props.valkeyHostname}:6379/0`
            ),
            SEARXNG_URL: EnvValue.fromValue(props.hostname),
            SEARXNG_SECRET: EnvValue.fromSecretValue(props.secret),
          },
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
          liveness: Probe.fromHttpGet("/", {
            port: 8080,
            failureThreshold: 3,
            initialDelaySeconds: Duration.seconds(30),
            periodSeconds: Duration.seconds(10),
            timeoutSeconds: Duration.seconds(5),
          }),
          readiness: Probe.fromHttpGet("/", {
            port: 8080,
            failureThreshold: 3,
            initialDelaySeconds: Duration.seconds(30),
            periodSeconds: Duration.seconds(10),
            timeoutSeconds: Duration.seconds(5),
          }),
          securityContext: {
            ensureNonRoot: false,
            privileged: true,
            readOnlyRootFilesystem: false,
            allowPrivilegeEscalation: true,
          },
          volumeMounts: [
            {
              volume: settingsVolume,
              path: "/etc/searxng/settings.yml",
              readOnly: true,
              subPath: "settings.yml",
            },
            {
              volume: limiterVolume,
              path: "/etc/searxng/limiter.toml",
              readOnly: true,
              subPath: "limiter.toml",
            },
            {
              volume: uwsgiVolume,
              path: "/etc/searxng/uwsgi.ini",
              readOnly: true,
              subPath: "uwsgi.ini",
            },
          ],
        },
      ],
    });

    this.service = new Service(this, "service", {
      type: ServiceType.CLUSTER_IP,
      ports: [
        {
          name: "http",
          port: 8080,
          protocol: Protocol.TCP,
        },
      ],
      selector: this.deployment,
    });
  }
}
