import { Size } from "cdk8s";
import {
  ConfigMap,
  Cpu,
  Deployment,
  DeploymentStrategy,
  Env,
  ISecret,
  Protocol,
  Service,
  ServiceType,
  Volume,
} from "cdk8s-plus-27";
import { Construct } from "constructs";

const IMAGE = "thijsvanloef/palworld-server-docker";
const DEFAULT_IMAGE_TAG = "latest";
const DEFAULT_TIMEZONE = "Etc/UTC";
const DEFAULT_PLAYERS = 16;
const DEFAULT_PORT = 8211;
const DEFAULT_RCON_PORT = 25575;
const DEFAULT_QUERY_PORT = 27015;
const PUID = 1000;
const GUID = 1000;

export enum PalworldDifficulty {
  NONE = "None",
  NORMAL = "Normal",
  DIFFICULT = "Difficult",
}

export interface PalworldProps {
  readonly serverName: string;
  readonly serverPassword: ISecret;
  readonly serverAdminPassword: ISecret;
  readonly serverData: Volume;
  readonly serviceType?: ServiceType;
  readonly players?: number;
  readonly noUpdateOnStart?: boolean;
  readonly timezone?: string;
  readonly imageTag?: string;
  readonly isCommunity?: boolean;
  readonly disableRcon?: boolean;
  readonly rconPort?: number;
  readonly serverPort?: number;
  readonly queryPort?: number;
  readonly diificulty?: PalworldDifficulty;
  readonly isPvp?: boolean;
}

export class Palworld extends Construct {
  readonly deployment: Deployment;
  readonly service: Service;

  constructor(scope: Construct, id: string, props: PalworldProps) {
    super(scope, id);

    const serverPort = props.serverPort ?? DEFAULT_PORT;
    const rconPort = props.rconPort ?? DEFAULT_RCON_PORT;
    const queryPort = props.queryPort ?? DEFAULT_QUERY_PORT;
    const image = `${IMAGE}:${props.imageTag ?? DEFAULT_IMAGE_TAG}`;

    const cfg = new ConfigMap(this, "cfg", {
      data: {
        TZ: props.timezone ?? DEFAULT_TIMEZONE,
        PGUID: `${PUID}`,
        PGID: `${GUID}`,
        PORT: `${props.serverPort ?? DEFAULT_PORT}`,
        PLAYERS: `${props.players ?? DEFAULT_PLAYERS}`,
        RCON_ENABLED: `${props.disableRcon ? "false" : "true"}`,
        RCON_PORT: `${props.rconPort ?? DEFAULT_RCON_PORT}`,
        SERVER_NAME: props.serverName,
        QUERY_PORT: `${queryPort}`,
        UPDATE_ON_BOOT: `${props.noUpdateOnStart ? "false" : "true"}`,
        COMMUNITY: `${props.isCommunity ? "true" : "false"}`,
      },
    });

    const serverCfg = new ConfigMap(this, "server-cfg", {
      data: {
        "PalWorldSettings.ini": [
          "[/Script/Pal.PalGameWorldSettings]",
          "OptionSettings=(",
          `Difficulty=${props.diificulty ?? PalworldDifficulty.NORMAL},`,
          "DayTimeSpeedRate=1.000000,",
          "NightTimeSpeedRate=1.000000,",
          "ExpRate=1.000000,",
          "PalCaptureRate=1.000000,",
          "PalSpawnNumRate=1.000000,",
          "PalDamageRateAttack=1.000000,",
          "PalDamageRateDefense=1.000000,",
          "PlayerDamageRateAttack=1.000000,",
          "PlayerDamageRateDefense=1.000000,",
          "PlayerStomachDecreaceRate=1.000000,",
          "PlayerStaminaDecreaceRate=1.000000,",
          "PlayerAutoHPRegeneRate=1.000000,",
          "PlayerAutoHpRegeneRateInSleep=1.000000,",
          "PalStomachDecreaceRate=1.000000,",
          "PalStaminaDecreaceRate=1.000000,",
          "PalAutoHPRegeneRate=1.000000,",
          "PalAutoHpRegeneRateInSleep=1.000000,",
          "BuildObjectDamageRate=1.000000,",
          "BuildObjectDeteriorationDamageRate=1.000000,",
          "CollectionDropRate=1.000000,",
          "CollectionObjectHpRate=1.000000,",
          "CollectionObjectRespawnSpeedRate=1.000000,",
          "EnemyDropItemRate=1.000000,",
          "DeathPenalty=All,",
          "bEnablePlayerToPlayerDamage=False,",
          "bEnableFriendlyFire=False,",
          "bEnableInvaderEnemy=True,",
          "bActiveUNKO=False,",
          "bEnableAimAssistPad=True,",
          "bEnableAimAssistKeyboard=False,",
          "DropItemMaxNum=3000,",
          "DropItemMaxNum_UNKO=100,",
          "BaseCampMaxNum=128,",
          "BaseCampWorkerMaxNum=15,",
          "DropItemAliveMaxHours=1.000000,",
          "bAutoResetGuildNoOnlinePlayers=False,",
          "AutoResetGuildTimeNoOnlinePlayers=72.000000,",
          "GuildPlayerMaxNum=20,",
          "PalEggDefaultHatchingTime=72.000000,",
          "WorkSpeedRate=1.000000,",
          "bIsMultiplay=True,",
          `bIsPvP=${props.isPvp ? "True" : "False"},`,
          "bCanPickupOtherGuildDeathPenaltyDrop=False,",
          "bEnableNonLoginPenalty=True,",
          "bEnableFastTravel=True,",
          "bIsStartLocationSelectByMap=True,",
          "bExistPlayerAfterLogout=False,",
          "bEnableDefenseOtherGuildPlayer=False,",
          "CoopPlayerMaxNum=4,",
          "ServerPlayerMaxNum=32,",
          'ServerName="Default Palworld Server",',
          'ServerDescription="",',
          'AdminPassword="",',
          'ServerPassword="",',
          `PublicPort=${serverPort},`,
          'PublicIP="",',
          `RCONEnabled=${props.disableRcon ? "False" : "True"},`,
          `RCONPort=${rconPort},`,
          'Region="",',
          "bUseAuth=True,",
          'BanListURL="https://api.palworldgame.com/api/banlist.txt"',
        ].join("\n"),
      },
    });
    const serverCfgVol = Volume.fromConfigMap(
      this,
      "server-cfg-vol",
      serverCfg,
    );

    this.deployment = new Deployment(this, "deployment", {
      replicas: 1,
      strategy: DeploymentStrategy.recreate(),
      containers: [
        {
          securityContext: {
            privileged: true,
            ensureNonRoot: false,
            allowPrivilegeEscalation: true,
            readOnlyRootFilesystem: false,
          },
          image: image,
          envVariables: {
            ADMIN_PASSWORD: props.serverAdminPassword.envValue("password"),
            SERVER_PASSWORD: props.serverPassword.envValue("password"),
          },
          resources: {
            cpu: {
              limit: Cpu.millis(8000),
              request: Cpu.millis(4000),
            },
            memory: {
              limit: Size.gibibytes(16),
              request: Size.gibibytes(8),
            },
          },
          ports: [
            {
              number: serverPort,
              name: "server",
              protocol: Protocol.UDP,
            },
            {
              number: rconPort,
              name: "rcon",
              protocol: Protocol.TCP,
            },
            {
              number: queryPort,
              name: "query",
              protocol: Protocol.UDP,
            },
          ],
          volumeMounts: [
            {
              path: "/palworld",
              volume: props.serverData,
            },
            {
              volume: serverCfgVol,
              path: "/palworld/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini",
              subPath: "PalWorldSettings.ini",
            },
          ],
          envFrom: [Env.fromConfigMap(cfg)],
        },
      ],
    });

    this.service = new Service(this, "service", {
      type: props.serviceType ?? ServiceType.LOAD_BALANCER,
      ports: [
        {
          port: serverPort,
          name: "server",
          protocol: Protocol.UDP,
          targetPort: serverPort,
        },
        {
          port: rconPort,
          name: "rcon",
          protocol: Protocol.TCP,
          targetPort: rconPort,
        },
        {
          port: queryPort,
          name: "query",
          protocol: Protocol.UDP,
          targetPort: queryPort,
        },
      ],
      selector: this.deployment,
    });
  }
}
