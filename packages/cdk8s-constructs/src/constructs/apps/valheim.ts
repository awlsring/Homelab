import { Size } from "cdk8s";
import {
  Cpu,
  Deployment,
  DeploymentStrategy,
  Protocol,
  Service,
  ServiceType,
  Volume,
} from "cdk8s-plus-27";
import {
  ContainerPort,
  ContainerResources,
  EnvValue,
  SecretValue,
} from "cdk8s-plus-minus";
import { Construct } from "constructs";

const IMAGE = "ghcr.io/lloesche/valheim-server";
const DEFAULT_IMAGE_TAG = "latest";
const DEFAULT_GAME_PORT = 2456;
const DEFAULT_SUPERVISOR_PORT = 9001;
const DEFAULT_WEB_PORT = 80;
const PUID = 0;
const GUID = 0;

export interface OptionalServiceOptions {
  /**
   * Should the service be enabled
   * @default false
   */
  readonly enable: boolean;
  /**
   * The port the service should listen on
   */
  readonly port?: number;
  /**
   * The service type for the status http server
   * @default ServiceType.CLUSTER_IP
   */
  readonly serviceType?: ServiceType;
}

export interface SupervisorServiceOptions extends OptionalServiceOptions {
  readonly username: string;
  readonly password: SecretValue;
}

/**
 * options for configuring the valheim server backups
 */
export interface BackupOptions {
  /**
   * Should backups be enabled
   * @default true
   */
  readonly enable: boolean;
  /**
   * The cron schedule for the backup job
   * @default 0 * * * *
   */
  readonly scheduleCron?: string;
  /**
   * The directory to store backups
   * @default /config/backups
   */
  readonly directory?: string;
  /**
   * The retention age for backups
   * @default 3
   */
  readonly retentionAge?: number;
  /**
   * The retention count for backups
   * @default unlimited
   */
  readonly maxBackups?: number;
  /**
   * Only backup if server idle
   * @default true
   */
  readonly performIfIdle?: boolean;
  /**
   * The grace period for the server to be idle
   * @default 3600s
   */
  readonly idleGracePeriod?: number;
  /**
   * Should the backups be zipped
   * @default true
   */
  readonly zip?: boolean;
  /**
   * Permission mask for the backup directory
   */
  readonly permissionUmask?: string;
}

/**
 * Options for configuring syslog
 */
export interface SysLogOptions {
  /**
   * The remote syslog host
   */
  readonly remoteHost?: string;
  /**
   * The remote syslog port
   * @default 514
   */
  readonly remotePort?: number;
  /**
   * Should logging be done local
   */
  readonly logLocal?: boolean;
}

/**
 * Props for configuring valheim plus
 */
export interface ValheimPlusOptions {
  /**
   * Should valheim plus be enabled
   * @default false
   */
  readonly enabled: boolean;
  /**
   * The version of valheim plus to use
   * @default latest
   */
  readonly release?: string;
}

export interface GameServerOptions {
  /**
   * The port the server runs on. This and the port + 1 must be open on the host
   * The specified port is used for game conncections, and the increment port is
   * used for the server query
   * @default 2456
   */
  readonly port?: number;
  /**
   * If the server is public
   * @default true
   */
  readonly public?: boolean;
  /**
   * Arguments to pass to the server on start
   */
  readonly launchArgs?: string;
  /**
   * Space separated list of admin SteamIDs in SteamID64 format. Overrides any existing adminlist.txt entries!
   */
  readonly adminList?: string[];
  /**
   * Space separated list of banned SteamIDs in SteamID64 format. Overrides any existing banlist.txt entries!
   */
  readonly blockList?: string[];
  /**
   * Space separated list of allowed SteamIDs in SteamID64 format. Overrides any existing permittedlist.txt entries!
   */
  readonly allowList?: string[];
  /**
   * Should enable crossplay
   */
  readonly crossplay?: boolean;
  /**
   * The server update schedule
   * @default "*\/15 * * * *"
   */
  readonly updateCron?: string;
  /**
   * The time window, in seconds, to wait for incoming UDP datagrams on non-public servers before determining if the server is idle
   */
  readonly idleDatagramWindow?: number;
  /**
   * The number of incoming UDP datagrams the container should tolerate (including useless datagrams such as mDNS, as well as useful datagrams like queries against the UDP query port and active connections by players) on non-public servers before deciding that the server is not idle
   */
  readonly idleDatagramMaxCount?: number;
  /**
   * Only run update check if no players are connected to the server (true or false)
   * @default true
   */
  readonly updateWhenIdle?: boolean;
  /**
   * The server restart schedule
   * @default "0 5 * * *"
   */
  readonly restartCron?: string;
  /**
   * Only restart the server if no players are connected to the server (true or false)
   * @default true
   */
  readonly restartIfIdle?: boolean;
  /**
   * The container timezone
   * @default "Etc/UTC
   */
  readonly timezone?: string;
  /**
   * If the beta server branch should be used
   */
  readonly publicBeta?: boolean;
  /**
   * The service type in the cluster to expose the server on
   * @default ServiceType.LOAD_BALANCER
   */
  readonly serviceType?: ServiceType;
  /**
   * The arguments to pass to the steamcmd command
   */
  readonly steamCmdArgs?: string;
  /**
   * Properties for ValheimPlus
   */
  readonly valheimPlus?: ValheimPlusOptions;
}

export interface ValheimProps {
  readonly serverName: string;
  readonly serverPassword: SecretValue;
  readonly configVolume: Volume;
  readonly serverVolume: Volume;
  readonly worldName?: string;
  readonly resources?: ContainerResources;
  readonly supervisorService?: SupervisorServiceOptions;
  readonly webService?: OptionalServiceOptions;
  readonly sysLog?: SysLogOptions;
  readonly imageTag?: string;
  readonly gameServer?: GameServerOptions;
  readonly backup?: BackupOptions;
}

export class Valheim extends Construct {
  readonly deployment: Deployment;
  readonly service: Service;

  private makePortMappings(props: ValheimProps): Record<string, ContainerPort> {
    const gamePort = props.gameServer?.port ?? DEFAULT_GAME_PORT;
    const queryPort = gamePort + 1;

    const ports: Record<string, ContainerPort> = {
      game: {
        number: gamePort,
        name: "server",
        protocol: Protocol.UDP,
      },
      query: {
        number: queryPort,
        name: "rcon",
        protocol: Protocol.UDP,
      },
    };

    if (props.supervisorService?.enable) {
      ports["supervisor"] = {
        number: props.supervisorService.port ?? DEFAULT_SUPERVISOR_PORT,
        name: "supervisor",
        protocol: Protocol.TCP,
      };
    }

    if (props.webService?.enable) {
      ports["web"] = {
        number: props.webService.port ?? DEFAULT_WEB_PORT,
        name: "web",
        protocol: Protocol.TCP,
      };
    }

    return ports;
  }

  constructor(scope: Construct, id: string, props: ValheimProps) {
    super(scope, id);

    const image = `${IMAGE}:${props.imageTag ?? DEFAULT_IMAGE_TAG}`;

    const portMappings = this.makePortMappings(props);

    this.deployment = new Deployment(this, "deployment", {
      replicas: 1,
      strategy: DeploymentStrategy.recreate(),
      containers: [
        {
          securityContext: {
            ensureNonRoot: false,
            readOnlyRootFilesystem: false,
            privileged: true,
            allowPrivilegeEscalation: true,
            group: GUID,
            user: PUID,
          },
          image: image,
          envVariables: this.formEnvironment(props),
          resources: {
            cpu: {
              limit: props.resources?.cpu?.limit ?? Cpu.millis(8000),
              request: props.resources?.cpu?.request ?? Cpu.millis(2000),
            },
            memory: {
              limit: props.resources?.memory?.limit ?? Size.gibibytes(16),
              request: props.resources?.memory?.request ?? Size.gibibytes(4),
            },
          },
          ports: Object.keys(portMappings).map((key) => portMappings[key]),
          volumeMounts: [
            {
              path: "/config",
              volume: props.configVolume,
            },
            {
              path: "/opt/valheim",
              volume: props.serverVolume,
            },
          ],
        },
      ],
      volumes: [props.configVolume, props.serverVolume],
    });

    this.service = new Service(this, "service", {
      type: ServiceType.LOAD_BALANCER,
      ports: [
        {
          name: portMappings.game.name,
          port: portMappings.game.number,
          targetPort: portMappings.game.number,
          protocol: Protocol.UDP,
        },
        {
          name: portMappings.query.name,
          port: portMappings.query.number,
          targetPort: portMappings.query.number,
          protocol: Protocol.UDP,
        },
      ],
      selector: this.deployment,
    });

    if (props.supervisorService?.enable) {
      this.formOptionalService(
        this.deployment,
        "supervisor",
        ServiceType.CLUSTER_IP,
        portMappings.supervisor,
      );
    }

    if (props.webService?.enable) {
      this.formOptionalService(
        this.deployment,
        "web",
        ServiceType.CLUSTER_IP,
        portMappings.web,
      );
    }
  }

  private formOptionalService(
    scope: Deployment,
    name: string,
    serviceType: ServiceType,
    portOptions: ContainerPort,
  ) {
    return new Service(this, `${name}-service`, {
      type: serviceType ?? ServiceType.CLUSTER_IP,
      selector: scope,
      ports: [
        {
          port: portOptions.number,
          protocol: portOptions.protocol,
        },
      ],
    });
  }

  private formEnvironment(props: ValheimProps): {
    [name: string]: EnvValue;
  } {
    let env: { [name: string]: EnvValue } = {
      SERVER_NAME: EnvValue.fromValue(props.serverName),
      WORLD_NAME: EnvValue.fromValue(props.worldName ?? props.serverName),
      SERVER_PASS: EnvValue.fromSecretValue(props.serverPassword),
      PUID: EnvValue.fromValue(PUID.toString()),
      GUID: EnvValue.fromValue(GUID.toString()),
    };

    let launchArgs = "";
    if (props.gameServer?.launchArgs) {
      launchArgs = props.gameServer.launchArgs;
    }
    if (props.gameServer?.crossplay) {
      launchArgs += " -crossplay";
    }
    if (launchArgs !== "") {
      env.SERVER_ARGS = EnvValue.fromValue(launchArgs);
    }

    if (props.gameServer) {
      if (props.gameServer.port) {
        env.SERVER_PORT = EnvValue.fromValue(props.gameServer.port.toString());
      }
      if (props.gameServer.public !== undefined) {
        let isPublic = "false";
        if (props.gameServer.public) {
          isPublic = "true";
        }
        env.SERVER_PUBLIC = EnvValue.fromValue(isPublic);
      }
      if (props.gameServer.updateCron) {
        env.UPDATE_CRON = EnvValue.fromValue(props.gameServer.updateCron);
      }
      if (props.gameServer.idleDatagramWindow) {
        env.IDLE_DATAGRAM_WINDOW = EnvValue.fromValue(
          props.gameServer.idleDatagramWindow.toString(),
        );
      }
      if (props.gameServer.idleDatagramMaxCount) {
        env.IDLE_DATAGRAM_MAX_COUNT = EnvValue.fromValue(
          props.gameServer.idleDatagramMaxCount.toString(),
        );
      }
      if (props.gameServer.updateWhenIdle !== undefined) {
        let updateWhenIdle = "false";
        if (props.gameServer.updateWhenIdle) {
          updateWhenIdle = "true";
        }
        env.UPDATE_WHEN_IDLE = EnvValue.fromValue(updateWhenIdle);
      }
      if (props.gameServer.restartIfIdle !== undefined) {
        let restartIfIdle = "false";
        if (props.gameServer.restartIfIdle) {
          restartIfIdle = "true";
        }
        env.RESTART_IF_IDLE = EnvValue.fromValue(restartIfIdle);
      }
      if (props.gameServer.timezone) {
        env.TZ = EnvValue.fromValue(props.gameServer.timezone);
      }
      if (props.gameServer.adminList) {
        env.ADMINLIST_IDS = EnvValue.fromValue(
          props.gameServer.adminList.join(" "),
        );
      }
      if (props.gameServer.blockList) {
        env.BANNEDLIST_IDS = EnvValue.fromValue(
          props.gameServer.blockList.join(" "),
        );
      }
      if (props.gameServer.allowList) {
        env.PERMITTEDLIST_IDS = EnvValue.fromValue(
          props.gameServer.allowList.join(" "),
        );
      }
      if (props.gameServer.publicBeta !== undefined) {
        let publicBeta = "false";
        if (props.gameServer.publicBeta) {
          publicBeta = "true";
        }
        env.PUBLIC_BETA = EnvValue.fromValue(publicBeta);
      }
      if (props.gameServer.steamCmdArgs) {
        env.STEAMCMD_ARGS = EnvValue.fromValue(props.gameServer.steamCmdArgs);
      }

      if (props.gameServer.valheimPlus) {
        if (props.gameServer.valheimPlus.enabled !== undefined) {
          let valheimPlusEnabled = "false";
          if (props.gameServer.valheimPlus.enabled) {
            valheimPlusEnabled = "true";
          }
          env.VALHEIM_PLUS = EnvValue.fromValue(valheimPlusEnabled);
        }
        if (props.gameServer.valheimPlus.release) {
          env.VALHEIM_PLUS_RELEASE = EnvValue.fromValue(
            props.gameServer.valheimPlus.release,
          );
        }
      }
    }

    if (props?.backup) {
      if (props.backup.enable !== undefined) {
        let doBackups = "false";
        if (props.backup.enable) {
          doBackups = "true";
        }
        env.BACKUPS_ENABLED = EnvValue.fromValue(doBackups);
      }
      if (props.backup.scheduleCron) {
        env.BACKUPS_CRON = EnvValue.fromValue(props.backup.scheduleCron);
      }
      if (props.backup.directory) {
        env.BACKUPS_DIRECTORY = EnvValue.fromValue(props.backup.directory);
      }
      if (props.backup.retentionAge) {
        env.BACKUPS_MAX_AGE = EnvValue.fromValue(
          props.backup.retentionAge.toString(),
        );
      }
      if (props.backup.maxBackups) {
        env.BACKUPS_MAX_COUNT = EnvValue.fromValue(
          props.backup.maxBackups.toString(),
        );
      }
      if (props.backup.performIfIdle) {
        env.BACKUPS_IF_IDLE = EnvValue.fromValue(
          props.backup.performIfIdle.toString(),
        );
      }
      if (props.backup.idleGracePeriod) {
        env.BACKUPS_IDLE_GRACE_PERIOD = EnvValue.fromValue(
          props.backup.idleGracePeriod.toString(),
        );
      }
      if (props.backup.zip !== undefined) {
        let zipBackups = "false";
        if (props.backup.zip) {
          zipBackups = "true";
        }
        env.BACKUPS_ZIP = EnvValue.fromValue(zipBackups);
      }
      if (props.backup.permissionUmask) {
        env.PERMISSIONS_UMASK = EnvValue.fromValue(
          props.backup.permissionUmask.toString(),
        );
      }
    }

    if (props?.supervisorService) {
      if (props.supervisorService.enable !== undefined) {
        let supervisorServiceEnabled = "false";
        if (props.supervisorService.enable) {
          supervisorServiceEnabled = "true";
        }
        env.SUPERVISOR_HTTP = EnvValue.fromValue(supervisorServiceEnabled);
      }
      if (props.supervisorService.port) {
        env.SUPERVISOR_HTTP_PORT = EnvValue.fromValue(
          props.supervisorService.port.toString(),
        );
      }
      if (props.supervisorService.username) {
        env.SUPERVISOR_HTTP_USER = EnvValue.fromValue(
          props.supervisorService.username,
        );
      }
      if (props.supervisorService.password) {
        env.SUPERVISOR_HTTP_PASS = EnvValue.fromSecretValue(
          props.supervisorService.password,
        );
      }
    }

    if (props?.webService) {
      if (props.webService.enable !== undefined) {
        let webServiceEnabled = "false";
        if (props.webService.enable) {
          webServiceEnabled = "true";
        }
        env.STATUS_HTTP = EnvValue.fromValue(webServiceEnabled);
      }
      if (props.webService.port) {
        env.STATUS_HTTP_PORT = EnvValue.fromValue(
          props.webService.port.toString(),
        );
      }
    }

    if (props?.sysLog) {
      if (props.sysLog.remoteHost) {
        env.SYSLOG_HOST = EnvValue.fromValue(props.sysLog.remoteHost);
      }
      if (props.sysLog.remotePort) {
        env.SYSLOG_PORT = EnvValue.fromValue(
          props.sysLog.remotePort.toString(),
        );
      }
      if (props.sysLog.logLocal !== undefined) {
        let logLocal = "false";
        if (props.sysLog.logLocal) {
          logLocal = "true";
        }
        env.SYSLOG_LOCAL = EnvValue.fromValue(logLocal);
      }
    }

    return env;
  }
}
