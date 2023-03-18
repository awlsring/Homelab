import { Size } from 'cdk8s';
import { ContainerPort, Cpu, CpuResources, Deployment, DeploymentStrategy, EnvValue, HostPathVolumeType, MemoryResources, PersistentVolumeAccessMode, PersistentVolumeClaim, PersistentVolumeClaimProps, Protocol, Secret, Service, ServiceType, Volume } from 'cdk8s-plus-25';
import { Construct } from 'constructs';
import { HomelabChart, HomelabChartProps } from '../../common/homelab-charts';

export interface BackupProps {
  enabled: boolean;
  scheduleCron?: string;
  directory?: string;
  retentionAge?: number;
  maxBackups?: number;
  performIfIdle?: boolean;
  idleGracePeriod?: number;
  zip?: boolean;
  permissionUmask?: string;
}

export interface ValheimPlusProps {
  enabled: boolean;
  release?: string;
}

export interface SupervisorHttpProps {
  enabled: boolean;
  port?: number;
  username?: string;
  password: PasswordProps;
  serviceType?: ServiceType;
}

export interface StatusHttpProps {
  enabled: boolean;
  port?: number;
  configPath?: string;
  htdocLocation?: string;
  serviceType?: ServiceType;
}

export interface SysLogProps {
  remoteHost?: string;
  remotePort?: number;
  logLocal?: boolean;
}

export interface PasswordProps {
  raw?: string;
  secret?: string;
}

export interface ServerProps {
  port?: number;
  name?: string;
  worldName?: string;
  password?: PasswordProps;
  public?: boolean;
  launchArgs?: string;
  adminList?: string[];
  blockList?: string[];
  allowList?: string[];
  crossplay?: boolean;
  updateCron?: string;
  idleDatagramWindow?: number;
  idleDatagramMaxCount?: number;
  updateWhenIdle?: boolean;
  restartIfIdle?: boolean;
  timezone?: string;
  publicBeta?: boolean;
  serviceType?: ServiceType;
  steamCmdArgs?: string;
  valheimPlus?: ValheimPlusProps;
}

export interface PersistanceProps {
  server?: PersistentVolumeClaimConfigProps;
  config?: PersistentVolumeClaimConfigProps;
}

export interface PersistentVolumeClaimConfigProps {
  storageClass: string;
  accessModes?: PersistentVolumeAccessMode[];
  storage?: Size;
}

export interface ResourceLimitsProps {
  cpu?: CpuResources;
  memory?: MemoryResources;
}

export interface SecurityProps {
  user?: number;
  group?: number;
  privileged?: boolean;
  readOnlyRootFilesystem?: boolean;
  allowPrivilegeEscalation?: boolean;
}

export interface ValheimChartProps extends HomelabChartProps {
  server?: ServerProps;
  persistence?: PersistanceProps;
  imageTag?: string;
  resourceLimits?: ResourceLimitsProps;
  backup?: BackupProps;
  supervisorHttp?: SupervisorHttpProps;
  statusHttp?: StatusHttpProps;
  sysLog?: SysLogProps;
  security?: SecurityProps;
}

export class ValheimChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: ValheimChartProps) {
    super(scope, name, props);

    const serverVol = this.formServerPersistance(props.persistence?.server);
    const configVol = this.formConfigPersistance(props.persistence?.config);

    const ports = this.formPortRecords(props);
    const deployment = new Deployment(this, 'deployment', {
      replicas: 1,
      strategy: DeploymentStrategy.recreate(),
      containers: [
        {
          image: this.formImage(props.imageTag),
          ports: Object.keys(ports).map((key) => ports[key]),
          envVariables: this.formEnvironment(props),
          volumeMounts: [
            {
              path: '/config',
              volume: configVol,
            },
            {
              path: '/opt/valheim',
              volume: serverVol,
            },
          ],
          securityContext: {
            ensureNonRoot: false,
            readOnlyRootFilesystem: props.security?.readOnlyRootFilesystem ?? false,
            privileged: props.security?.privileged,
            allowPrivilegeEscalation: props.security?.allowPrivilegeEscalation,
            group: props.security?.group,
            user: props.security?.user,
          },
          resources: {
            memory: props.resourceLimits?.memory ?? {
              request: Size.gibibytes(4),
            },
            cpu: props.resourceLimits?.cpu ?? {
              request: Cpu.millis(2000),
            },
          },
        },
      ],
      volumes: [configVol, serverVol],
    });

    new Service(this, 'service', {
      type: props.server?.serviceType ?? ServiceType.LOAD_BALANCER,
      selector: deployment,
      ports: [
        {
          name: ports.game.name,
          port: ports.game.number,
          targetPort: ports.game.number,
          protocol: Protocol.UDP,
        },
        {
          name: ports.query.name,
          port: ports.query.number,
          targetPort: ports.query.number,
          protocol: Protocol.UDP,
        },
      ],
    });

    if (props.supervisorHttp?.enabled) {
      this.formService(deployment, ports.supervisor, props.supervisorHttp.serviceType);
    }

    if (props.statusHttp?.enabled) {
      this.formService(deployment, ports.status, props.statusHttp.serviceType);
    }

  }

  private formImage(tag?: string) {
    return `ghcr.io/lloesche/valheim-server:${tag ?? 'latest'}`;
  }

  private formPortRecords(props: ValheimChartProps): Record<string, ContainerPort> {
    const gamePort = props.server?.port ?? 2456;
    const queryPort = gamePort + 1;

    let portRecords: Record<string, ContainerPort> = {
      game: {
        number: gamePort,
        name: 'server',
        protocol: Protocol.UDP,
      },
      query: {
        number: queryPort,
        name: 'query',
        protocol: Protocol.UDP,
      },
    };

    if (props.supervisorHttp?.enabled) {
      portRecords.supervisor = {
        number: props.supervisorHttp.port ?? 9001,
        name: 'supervisor',
        protocol: Protocol.TCP,
      };
    }

    if (props.statusHttp?.enabled) {
      portRecords.status = {
        number: props.statusHttp.port ?? 80,
        name: 'status',
        protocol: Protocol.TCP,
      };
    }
    return portRecords;
  }

  private formService(scope: Deployment, port: ContainerPort, type?: ServiceType): Service {
    let name = port.name;
    return new Service(this, `${name}-service`, {
      type: type ?? ServiceType.CLUSTER_IP,
      selector: scope,
      ports: [
        {
          port: port.number,
          targetPort: port.number,
          protocol: port.protocol,
        },
      ],
    });
  }

  private formHostVolume(name: string, path: string): Volume {
    return Volume.fromHostPath(this, `${name}-volume`, path, {
      path: `/data/valheim/${path}`,
      type: HostPathVolumeType.DIRECTORY_OR_CREATE,
    });
  }

  private formPersistanceVolume(name: string, props: PersistentVolumeClaimProps): Volume {
    let pvc = new PersistentVolumeClaim(this, `${name}-pvc`, props);
    return Volume.fromPersistentVolumeClaim(this, `${name}-volume`, pvc);
  }

  private formServerPersistance(props?: PersistentVolumeClaimConfigProps): Volume {
    let volume: Volume;
    if (props) {
      let pvcProps: PersistentVolumeClaimProps = {
        storageClassName: props?.storageClass ?? 'local-path',
        accessModes: props?.accessModes ?? [PersistentVolumeAccessMode.READ_WRITE_ONCE],
        storage: props?.storage ?? Size.gibibytes(10),
      };
      volume = this.formPersistanceVolume('server', pvcProps);
    } else {
      volume = this.formHostVolume('server', 'valheim-server');
    }
    return volume;
  }

  private formConfigPersistance(props?: PersistentVolumeClaimConfigProps): Volume {
    let volume: Volume;
    if (props) {
      let pvcProps: PersistentVolumeClaimProps = {
        storageClassName: props.storageClass,
        accessModes: props?.accessModes ?? [PersistentVolumeAccessMode.READ_WRITE_ONCE],
        storage: props?.storage ?? Size.gibibytes(1),
      };
      volume = this.formPersistanceVolume('config', pvcProps);
    } else {
      volume = this.formHostVolume('config', 'valheim-config');
    }
    return volume;
  }

  private formPasswordEnvValue(name:string, props: PasswordProps) {
    let envValue: EnvValue;
    if (props.secret) {
      const secret = Secret.fromSecretName(this, `${name}-password`, props.secret);
      envValue = EnvValue.fromSecretValue(
        {
          secret: secret,
          key: 'password',
        },
      );
    } else if (props.raw) {
      envValue = EnvValue.fromValue(props.raw);
    } else {
      throw new Error('Invalid password configuration');
    }
    return envValue;
  }

  private formEnvironment(props: ValheimChartProps): {[name: string]: EnvValue} {
    let env: {[name: string]: EnvValue} = {};

    let launchArgs = '';
    if (props.server?.launchArgs) {
      launchArgs = props.server.launchArgs;
    }
    if (props.server?.crossplay) {
      launchArgs += ' -crossplay';
    }
    if (launchArgs !== '') {
      env.SERVER_ARGS = EnvValue.fromValue(launchArgs);
    }

    if (props.server) {
      if (props.server.port) {
        env.SERVER_PORT = EnvValue.fromValue(props.server.port.toString());
      }
      if (props.server.name) {
        env.SERVER_NAME = EnvValue.fromValue(props.server.name);
      }
      if (props.server.worldName) {
        env.WORLD_NAME = EnvValue.fromValue(props.server.worldName);
      }
      if (props.server.password) {
        env.SERVER_PASS = this.formPasswordEnvValue('server', props.server.password);
      }
      if (props.server.public !== undefined) {
        let isPublic = 'false';
        if (props.server.public) {
          isPublic = 'true';
        }
        env.SERVER_PUBLIC = EnvValue.fromValue(isPublic);
      }
      if (props.server.updateCron) {
        env.UPDATE_CRON = EnvValue.fromValue(props.server.updateCron);
      }
      if (props.server.idleDatagramWindow) {
        env.IDLE_DATAGRAM_WINDOW = EnvValue.fromValue(props.server.idleDatagramWindow.toString());
      }
      if (props.server.idleDatagramMaxCount) {
        env.IDLE_DATAGRAM_MAX_COUNT = EnvValue.fromValue(props.server.idleDatagramMaxCount.toString());
      }
      if (props.server.updateWhenIdle !== undefined) {
        let updateWhenIdle = 'false';
        if (props.server.updateWhenIdle) {
          updateWhenIdle = 'true';
        }
        env.UPDATE_WHEN_IDLE = EnvValue.fromValue(updateWhenIdle);
      }
      if (props.server.restartIfIdle !== undefined) {
        let restartIfIdle = 'false';
        if (props.server.restartIfIdle) {
          restartIfIdle = 'true';
        }
        env.RESTART_IF_IDLE = EnvValue.fromValue(restartIfIdle);
      }
      if (props.server.timezone) {
        env.TZ = EnvValue.fromValue(props.server.timezone);
      }
      if (props.server.adminList) {
        env.ADMINLIST_IDS = EnvValue.fromValue(props.server.adminList.join(' '));
      }
      if (props.server.blockList) {
        env.BANNEDLIST_IDS = EnvValue.fromValue(props.server.blockList.join(' '));
      }
      if (props.server.allowList) {
        env.PERMITTEDLIST_IDS = EnvValue.fromValue(props.server.allowList.join(' '));
      }
      if (props.server.publicBeta !== undefined) {
        let publicBeta = 'false';
        if (props.server.publicBeta) {
          publicBeta = 'true';
        }
        env.PUBLIC_BETA = EnvValue.fromValue(publicBeta);
      }
      if (props.server.steamCmdArgs) {
        env.STEAMCMD_ARGS = EnvValue.fromValue(props.server.steamCmdArgs);
      }

      if (props.server.valheimPlus) {
        if (props.server.valheimPlus.enabled !== undefined) {
          let valheimPlusEnabled = 'false';
          if (props.server.valheimPlus.enabled) {
            valheimPlusEnabled = 'true';
          }
          env.VALHEIM_PLUS = EnvValue.fromValue(valheimPlusEnabled);
        }
        if (props.server.valheimPlus.release) {
          env.VALHEIM_PLUS_RELEASE = EnvValue.fromValue(props.server.valheimPlus.release);
        }
      }
    }

    if (props.backup) {
      if (props.backup.enabled !== undefined) {
        let doBackups = 'false';
        if (props.backup.enabled) {
          doBackups = 'true';
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
        env.BACKUPS_MAX_AGE = EnvValue.fromValue(props.backup.retentionAge.toString());
      }
      if (props.backup.maxBackups) {
        env.BACKUPS_MAX_COUNT = EnvValue.fromValue(props.backup.maxBackups.toString());
      }
      if (props.backup.performIfIdle) {
        env.BACKUPS_IF_IDLE = EnvValue.fromValue(props.backup.performIfIdle.toString());
      }
      if (props.backup.idleGracePeriod) {
        env.BACKUPS_IDLE_GRACE_PERIOD = EnvValue.fromValue(props.backup.idleGracePeriod.toString());
      }
      if (props.backup.zip !== undefined) {
        let zipBackups = 'false';
        if (props.backup.zip) {
          zipBackups = 'true';
        }
        env.BACKUPS_ZIP = EnvValue.fromValue(zipBackups);
      }
      if (props.backup.permissionUmask) {
        env.PERMISSIONS_UMASK = EnvValue.fromValue(props.backup.permissionUmask.toString());
      }
    }

    if (props.supervisorHttp) {
      if (props.supervisorHttp.enabled !== undefined) {
        let supervisorHttpEnabled = 'false';
        if (props.supervisorHttp.enabled) {
          supervisorHttpEnabled = 'true';
        }
        env.SUPERVISOR_HTTP = EnvValue.fromValue(supervisorHttpEnabled);
      }
      if (props.supervisorHttp.port) {
        env.SUPERVISOR_HTTP_PORT = EnvValue.fromValue(props.supervisorHttp.port.toString());
      }
      if (props.supervisorHttp.username) {
        env.SUPERVISOR_HTTP_USER = EnvValue.fromValue(props.supervisorHttp.username);
      }
      if (props.supervisorHttp.password) {
        env.SUPERVISOR_HTTP_PASS = this.formPasswordEnvValue('server', props.supervisorHttp.password);;
      }
    }

    if (props.statusHttp) {
      if (props.statusHttp.enabled !== undefined) {
        let statusHttpEnabled = 'false';
        if (props.statusHttp.enabled) {
          statusHttpEnabled = 'true';
        }
        env.STATUS_HTTP = EnvValue.fromValue(statusHttpEnabled);
      }
      if (props.statusHttp.port) {
        env.STATUS_HTTP_PORT = EnvValue.fromValue(props.statusHttp.port.toString());
      }
      if (props.statusHttp.configPath) {
        env.STATUS_HTTP_CONF = EnvValue.fromValue(props.statusHttp.configPath);
      }
      if (props.statusHttp.htdocLocation) {
        env.STATUS_HTTP_HTDOCS = EnvValue.fromValue(props.statusHttp.htdocLocation);
      }
    }

    if (props.sysLog) {
      if (props.sysLog.remoteHost) {
        env.SYSLOG_HOST = EnvValue.fromValue(props.sysLog.remoteHost);
      }
      if (props.sysLog.remotePort) {
        env.SYSLOG_PORT = EnvValue.fromValue(props.sysLog.remotePort.toString());
      }
      if (props.sysLog.logLocal !== undefined) {
        let logLocal = 'false';
        if (props.sysLog.logLocal) {
          logLocal = 'true';
        }
        env.SYSLOG_LOCAL = EnvValue.fromValue(logLocal);
      }
    }

    if (props.security?.user) {
      env.PGID = EnvValue.fromValue(props.security?.user.toString());
    }
    if (props.security?.group) {
      env.PUID = EnvValue.fromValue(props.security?.group.toString());
    }

    return env;
  }
}