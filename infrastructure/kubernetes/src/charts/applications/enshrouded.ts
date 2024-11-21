import { Size } from "cdk8s";
import {
  HomelabChart,
  HomelabChartProps,
  HomelabDeployment,
  OnepasswordSecretPassword,
  PersistentVolumeClaimOptions,
  SecretStore,
  SecretStoreType,
} from "cdk8s-constructs";
import {
  Cpu,
  DeploymentStrategy,
  EnvValue,
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  Protocol,
  Service,
  ServiceType,
  Volume,
} from "cdk8s-plus-minus";
import { Construct } from "constructs";

const SEVER_PORT = 15636;
const QUERY_PORT = 15637;

export interface EnshroudedChartProps extends HomelabChartProps {
  readonly serverName: string;
  readonly secretStore: string;
  readonly serverPersistence: PersistentVolumeClaimOptions;
}

export class EnshroudedChart extends HomelabChart {
  constructor(scope: Construct, id: string, props: EnshroudedChartProps) {
    super(scope, id, props);

    const serverDataPvc = new PersistentVolumeClaim(this, "server-data", {
      storageClassName: props.serverPersistence.storageClass,
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: props.serverPersistence.size ?? Size.gibibytes(20),
    });
    const serverDataVol = Volume.fromPersistentVolumeClaim(
      this,
      "server-vol",
      serverDataPvc,
    );

    const secretStore = SecretStore.fromName(
      this,
      props.secretStore,
      SecretStoreType.CLUSTER,
    );

    const serverPass = new OnepasswordSecretPassword(this, "server-secret", {
      store: secretStore,
      secretKey: "enshrouded-server-password",
    });

    const deployment = new HomelabDeployment(this, "deployment", {
      replicas: 1,
      strategy: DeploymentStrategy.recreate(),
      securityContext: {
        fsGroup: 10000,
      },
      containers: [
        {
          securityContext: {
            ensureNonRoot: false,
            readOnlyRootFilesystem: false,
            privileged: true,
            allowPrivilegeEscalation: true,
            group: 10000,
            user: 10000,
          },
          image: "sknnr/enshrouded-dedicated-server:latest",
          envVariables: {
            SERVER_NAME: EnvValue.fromValue(props.serverName),
            SERVER_PASSWORD: EnvValue.fromSecretValue(
              serverPass.asSecretValue("credential"),
            ),
            SERVER_SLOTS: EnvValue.fromValue("6"),
          },
          resources: {
            cpu: {
              limit: Cpu.millis(8000),
              request: Cpu.millis(4000),
            },
            memory: {
              limit: Size.gibibytes(16),
              request: Size.gibibytes(4),
            },
          },
          ports: [
            {
              name: "server",
              number: SEVER_PORT,
            },
            {
              name: "query",
              number: QUERY_PORT,
            },
          ],
          volumeMounts: [
            {
              path: "/home/steam/enshrouded/savegame",
              volume: serverDataVol,
            },
          ],
        },
      ],
      volumes: [serverDataVol],
    });

    new Service(this, "service", {
      type: ServiceType.LOAD_BALANCER,
      ports: [
        {
          name: "server",
          port: SEVER_PORT,
          targetPort: SEVER_PORT,
          protocol: Protocol.UDP,
        },
        {
          name: "query",
          port: QUERY_PORT,
          targetPort: QUERY_PORT,
          protocol: Protocol.UDP,
        },
      ],
      selector: deployment,
    });
  }
}
