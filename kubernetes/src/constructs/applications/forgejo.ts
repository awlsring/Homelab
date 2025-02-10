import { Duration, Size } from "cdk8s";
import {
  Cpu,
  Deployment,
  DeploymentStrategy,
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

const IMAGE = "codeberg.org/forgejo/forgejo";
const HTTP_PORT = 3000;
const SSH_PORT = 2222;

export interface ForgejoPostgresOptions {
  readonly hostname: string;
  readonly user: string;
  readonly passwordSecret: SecretValue;
  readonly database: string;
}

export interface ForegjoProps {
  readonly hostname: string;
  readonly imageTag: string;
  readonly volume: Volume;
  readonly database: ForgejoPostgresOptions;
}

export class Forgejo extends Construct {
  readonly deployment: Deployment;
  readonly service: Service;
  readonly sshService: Service;

  constructor(scope: Construct, id: string, props: ForegjoProps) {
    super(scope, id);
    const image = `${IMAGE}:${props.imageTag}`;

    const serviceAccount = new ServiceAccount(this, "service-account", {
      automountToken: true,
    });

    this.deployment = new Deployment(this, "deployment", {
      replicas: 1,
      serviceAccount: serviceAccount,
      automountServiceAccountToken: true,
      securityContext: {
        fsGroup: 1000,
      },
      strategy: DeploymentStrategy.recreate(),
      terminationGracePeriod: Duration.seconds(60),
      containers: [
        {
          name: "forgejo",
          image: image,
          ports: [
            { number: HTTP_PORT, name: "http" },
            { number: SSH_PORT, name: "ssh", protocol: Protocol.TCP },
          ],
          envVariables: {
            APP_NAME: EnvValue.fromValue("Code"),
            FORGEJO__server__SSH_LISTEN_PORT: EnvValue.fromValue(
              SSH_PORT.toString()
            ),
            FORGEJO__server__ROOT_URL: EnvValue.fromValue(
              `https://${props.hostname}/`
            ),
            FORGEJO__server__DOMAIN: EnvValue.fromValue(props.hostname),
            FORGEJO__server__SSH_DOMAIN: EnvValue.fromValue(props.hostname),
            FORGEJO__service__DISABLE_REGISTRATION: EnvValue.fromValue("true"),
            FORGEJO__database__DB_TYPE: EnvValue.fromValue("postgres"),
            FORGEJO__metrics__ENABLED: EnvValue.fromValue("true"),
            FORGEJO__database__HOST: EnvValue.fromValue(
              props.database.hostname
            ),
            FORGEJO__database__NAME: EnvValue.fromValue(
              props.database.database
            ),
            FORGEJO__database__USER: EnvValue.fromValue(props.database.user),
            FORGEJO__database__PASSWD: EnvValue.fromSecretValue(
              props.database.passwordSecret
            ),
          },
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
          liveness: Probe.fromTcpSocket({
            port: HTTP_PORT,
            failureThreshold: 10,
            initialDelaySeconds: Duration.seconds(200),
            periodSeconds: Duration.seconds(10),
            successThreshold: 1,
            timeoutSeconds: Duration.seconds(1),
          }),
          readiness: Probe.fromHttpGet("/api/healthz", {
            port: HTTP_PORT,
            failureThreshold: 3,
            initialDelaySeconds: Duration.seconds(5),
            periodSeconds: Duration.seconds(10),
            successThreshold: 1,
            timeoutSeconds: Duration.seconds(5),
          }),
          securityContext: {
            user: 1000,
            group: 1000,
            readOnlyRootFilesystem: false,
          },
          volumeMounts: [
            {
              volume: props.volume,
              path: "/var/lib/gitea",
            },
            // {
            //   volume: props.repositoriesVolume,
            //   path: "/var/lib/gitea/git/repositories",
            // },
          ],
        },
      ],
    });

    this.service = new Service(this, "http-service", {
      type: ServiceType.CLUSTER_IP,
      ports: [
        {
          name: "http",
          port: HTTP_PORT,
          targetPort: HTTP_PORT,
        },
      ],
      selector: this.deployment,
    });

    this.sshService = new Service(this, "ssh-service", {
      type: ServiceType.CLUSTER_IP,
      ports: [
        {
          name: "ssh",
          port: 22,
          targetPort: HTTP_PORT,
          protocol: Protocol.TCP,
        },
      ],
      selector: this.deployment,
    });
  }
}
