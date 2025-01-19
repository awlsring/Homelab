import { Duration, Size, Yaml } from "cdk8s";
import {
  ConfigMap,
  Cpu,
  Deployment,
  EnvValue,
  Ingress,
  ISecret,
  Probe,
  Protocol,
  SecretValue,
  Service,
  ServiceType,
  Volume,
} from "cdk8s-plus-31";
import { Construct } from "constructs";
import { HomelabDeployment } from "../homelab/deployment";
import { HomelabIngress, HomelabIngressOptions } from "../homelab/ingress";
import { DurationToString } from "../kube/conversion";

const IMAGE = "twinproduction/gatus";
const DEFAULT_IMAGE_TAG = "latest";
const GROUP = 65534;
const WEB_PORT = 8080;

export enum GatusMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export enum GatusConditions {
  HTTP_STATUS_200 = "[STATUS] == 200",
  HTTP_STATUS_2XX = "[STATUS] < 300",
  CERTIFICATE_EXPIRY_CORE_THAN_48_HOURS = "[CERTIFICATE_EXPIRY] > 48h",
  RESPONSE_TIME_SUB_500 = "[RESPONSE_TIME] < 500",
  RESPONSE_TIME_SUB_1000 = "[RESPONSE_TIME] < 1000",
  RESPONSE_TIME_SUB_2000 = "[RESPONSE_TIME] < 2000",
  RESPONSE_TIME_SUB_5000 = "[RESPONSE_TIME] < 5000",
  RESPONSE_TIME_SUB_10000 = "[RESPONSE_TIME] < 10000",
}

export interface GatusEndpointAlert {}

export interface GatusEndpointSshOptions {
  readonly username: string;
  readonly password: string;
}

export interface GatusEndpointDnsOptions {
  readonly queryType?: string;
  readonly queryName?: string;
}

export enum GatusAlertType {
  DISCORD = "discord",
}

export interface GatusEndpointAlertOptions extends GatusDefaultAlertOptions {
  readonly type: GatusAlertType;
}

export interface GatusEndpointOptions {
  readonly name: string;
  readonly url: string;
  readonly conditions: string[];
  readonly alerts?: GatusEndpointAlertOptions[];
  readonly enabled?: boolean;
  readonly group?: string;
  readonly method?: GatusMethod;
  readonly interval?: Duration;
  readonly isGraphQl?: boolean;
  readonly body?: string;
  readonly headers?: Record<string, string>;
  readonly dns?: GatusEndpointDnsOptions;
  readonly ssh?: GatusEndpointSshOptions;
  readonly hideConditionsOnUi?: boolean;
  readonly hideHostnameOnUi?: boolean;
  readonly hideMethodOnUi?: boolean;
  readonly resolveFailedConditionsOnUi?: boolean;
  readonly uiResponseThresholds?: number[];
}

export class GatusEndpoint {
  readonly name: string;
  readonly url: string;
  readonly conditions: string[];
  readonly alerts?: GatusEndpointAlertOptions[];
  readonly enabled?: boolean;
  readonly group?: string;
  readonly method?: GatusMethod;
  readonly interval?: Duration;
  readonly isGraphQl?: boolean;
  readonly body?: string;
  readonly headers?: Record<string, string>;
  readonly dns?: GatusEndpointDnsOptions;
  readonly ssh?: GatusEndpointSshOptions;
  readonly hideConditionsOnUi?: boolean;
  readonly hideHostnameOnUi?: boolean;
  readonly hideMethodOnUi?: boolean;
  readonly resolveFailedConditionsOnUi?: boolean;
  readonly uiResponseThresholds?: number[];

  constructor(options: GatusEndpointOptions) {
    this.name = options.name;
    this.url = options.url;
    this.conditions = options.conditions;
    this.alerts = options?.alerts;
    this.enabled = options?.enabled;
    this.group = options?.group;
    this.method = options?.method;
    this.interval = options?.interval;
    this.isGraphQl = options?.isGraphQl;
    this.body = options?.body;
    this.headers = options?.headers;
    this.dns = options?.dns;
    this.ssh = options?.ssh;
    this.hideConditionsOnUi = options?.hideConditionsOnUi;
    this.hideHostnameOnUi = options?.hideHostnameOnUi;
    this.hideMethodOnUi = options?.hideMethodOnUi;
    this.resolveFailedConditionsOnUi = options?.resolveFailedConditionsOnUi;
    this.uiResponseThresholds = options?.uiResponseThresholds;
  }

  asObject() {
    const obj: Record<string, any> = {
      name: this.name,
      url: this.url,
    };

    if (this.alerts) {
      const alerts: Record<string, any>[] = [];
      this.alerts.forEach((alert) => {
        const alertObj: Record<string, any> = {
          type: alert.type,
        };

        if (alert.enabled !== undefined) {
          alertObj.enabled = alert.enabled;
        }

        if (alert.description !== undefined) {
          alertObj.description = alert.description;
        }

        if (alert.failureThreshold !== undefined) {
          alertObj["failure-threshold"] = alert.failureThreshold;
        }

        if (alert.successThreshold !== undefined) {
          alertObj["success-threshold"] = alert.successThreshold;
        }

        if (alert.sendOnResolved !== undefined) {
          alertObj["send-on-resolved"] = alert.sendOnResolved;
        }

        alerts.push(alertObj);
      });
      obj.alerts = alerts;
    }

    if (this.conditions) {
      obj.conditions = this.conditions;
    }

    if (this.enabled !== undefined) {
      obj.enabled = this.enabled;
    }

    if (this.group !== undefined) {
      obj.group = this.group;
    }

    if (this.method !== undefined) {
      obj.method = this.method;
    }

    if (this.interval !== undefined) {
      obj.interval = DurationToString(this.interval);
    }

    if (this.isGraphQl !== undefined) {
      obj.isGraphQl = this.isGraphQl;
    }

    if (this.body !== undefined) {
      obj.body = this.body;
    }

    if (this.headers !== undefined) {
      obj.headers = this.headers;
    }

    if (this.dns !== undefined) {
      obj.dns = {};
      if (this.dns.queryType !== undefined) {
        obj.dns["query-type"] = this.dns.queryType;
      }
      if (this.dns.queryName !== undefined) {
        obj.dns["query-name"] = this.dns.queryName;
      }
    }

    if (this.ssh !== undefined) {
      obj.ssh = {
        username: this.ssh.username,
        password: this.ssh.password,
      };
    }

    return obj;
  }
}

export interface GatusAlertingOptions {
  readonly discord?: GatusAlertingDiscordOptions;
}

export interface GatusDefaultAlertOptions {
  readonly enabled?: boolean;
  readonly description?: string;
  readonly failureThreshold?: number;
  readonly successThreshold?: number;
  readonly sendOnResolved?: boolean;
}

export interface GatusAlertingDiscordOptions {
  readonly webhookSecret: SecretValue;
  readonly title?: string;
  readonly defaultAlert?: GatusDefaultAlertOptions;
}

export enum GatusDatabaseEngine {
  POSTGRES = "postgres",
  SQLITE = "sqlite",
  MEMORY = "memory",
}

export interface GatusDatabaseOptions {
  readonly engine?: GatusDatabaseEngine;
  readonly host?: string;
  readonly port?: number;
  readonly user: string;
  readonly password?: ISecret;
  readonly database?: string;
  readonly path?: string;
  readonly caching?: boolean;
}

export interface PostgresDatabaseOptions {
  readonly host: string;
  readonly port?: number;
  readonly user: string;
  readonly password: ISecret;
  readonly database: string;
}

export interface GatusProps {
  readonly endpoints: GatusEndpoint[];
  readonly alerting?: GatusAlertingOptions;
  readonly database?: GatusDatabaseOptions;
  readonly imageTag?: string;
  readonly ingress?: HomelabIngressOptions;
}

// TODO: sub webhooks with https://stackoverflow.com/questions/50452665/import-data-to-config-map-from-kubernetes-secret
export class Gatus extends Construct {
  readonly deployment: Deployment;
  readonly service: Service;
  readonly ingress?: Ingress;

  constructor(scope: Construct, name: string, props: GatusProps) {
    super(scope, name);

    const env: Record<string, EnvValue> = {};

    const image = `${IMAGE}:${props.imageTag ?? DEFAULT_IMAGE_TAG}`;

    const endpoints = props.endpoints.map((endpoint) => endpoint.asObject());

    const cfgObj: Record<string, any> = {
      storage: {
        type: props.database?.engine ?? GatusDatabaseEngine.POSTGRES,
        caching: props.database?.caching ?? false,
      },
      endpoints: endpoints,
    };

    if (props.database) {
      if (props.database.engine === GatusDatabaseEngine.POSTGRES) {
        if (
          !props.database.host ||
          !props.database.user ||
          !props.database.database ||
          !props.database.password
        ) {
          throw new Error("Missing required database options");
        }

        env["POSTGRES_USER"] = EnvValue.fromValue(props.database.user);
        env["POSTGRES_DB"] = EnvValue.fromValue(props.database.database);
        env["POSTGRES_HOST"] = EnvValue.fromValue(props.database.host);
        env["POSTGRES_PASSWORD"] = EnvValue.fromSecretValue({
          secret: props.database.password,
          key: "password",
        });

        cfgObj.storage.path =
          "postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DB}?sslmode=disable";
      }
    }

    if (props.alerting) {
      const alerting: Record<string, any> = {};
      if (props.alerting.discord) {
        alerting["discord"] = {
          "webhook-url": "${DISCORD_WEBHOOK}",
        };
        env["DISCORD_WEBHOOK"] = EnvValue.fromSecretValue(
          props.alerting.discord.webhookSecret
        );
        if (props.alerting.discord.title) {
          alerting["discord"]["title"] = props.alerting.discord.title;
        }
        if (props.alerting.discord.defaultAlert) {
          alerting["discord"]["default-alert"] = {
            enabled: props.alerting.discord.defaultAlert.enabled,
            description: props.alerting.discord.defaultAlert.description,
            "failure-threshold":
              props.alerting.discord.defaultAlert.failureThreshold,
            "success-threshold":
              props.alerting.discord.defaultAlert.successThreshold,
            "send-on-resolved":
              props.alerting.discord.defaultAlert.sendOnResolved,
          };
        }
      }

      cfgObj["alerting"] = alerting;
    }

    const cfg = new ConfigMap(this, "config");
    cfg.addData("config.yml", Yaml.stringify(cfgObj));

    const cfgVol = Volume.fromConfigMap(this, "config-vol", cfg);

    this.deployment = new HomelabDeployment(this, "deployment", {
      replicas: 1,
      securityContext: {
        fsGroup: GROUP,
      },
      containers: [
        {
          securityContext: {
            readOnlyRootFilesystem: true,
            user: GROUP,
            group: GROUP,
          },
          resources: {
            cpu: {
              request: Cpu.millis(100),
              limit: Cpu.millis(1000),
            },
            memory: {
              request: Size.mebibytes(256),
              limit: Size.gibibytes(1),
            },
          },
          envVariables: env,
          name: "gatus",
          image: image,
          ports: [{ name: "http", number: WEB_PORT, protocol: Protocol.TCP }],
          volumeMounts: [
            {
              volume: cfgVol,
              path: "/config",
              readOnly: true,
            },
          ],
          readiness: Probe.fromTcpSocket({
            port: WEB_PORT,
            initialDelaySeconds: Duration.seconds(0),
            failureThreshold: 3,
            timeoutSeconds: Duration.seconds(1),
            periodSeconds: Duration.seconds(10),
          }),
          startup: Probe.fromTcpSocket({
            port: WEB_PORT,
            initialDelaySeconds: Duration.seconds(0),
            failureThreshold: 30,
            timeoutSeconds: Duration.seconds(1),
            periodSeconds: Duration.seconds(5),
          }),
        },
      ],
    });

    this.service = new Service(this, "service", {
      type: props.ingress?.type ?? ServiceType.CLUSTER_IP,
      selector: this.deployment,
      ports: [
        {
          port: WEB_PORT,
          name: "http",
        },
      ],
    });

    if (props.ingress) {
      this.ingress = new HomelabIngress(this, "ingress", {
        ingressClassName: props.ingress?.ingressClass,
        service: this.service,
        port: WEB_PORT,
        hostname: props.ingress.hostname,
        certIssuer: props.ingress.certIssuer,
      });
    }
  }
}
