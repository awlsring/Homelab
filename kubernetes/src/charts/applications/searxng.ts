import { Size } from "cdk8s";
import {
  Capability,
  Cpu,
  Deployment,
  DeploymentStrategy,
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  Service,
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
import { OnepasswordSecretPassword } from "../../constructs/external-secrets/onepassword-secret-password";
import {
  SecretStore,
  SecretStoreType,
} from "../../constructs/external-secrets/secret-store";
import { SearXNG } from "../../constructs/applications/searxng";

const VALKEY_PORT = 6379;
const VALKEY_IMAGE = "docker.io/valkey/valkey:8-alpine";

export interface SearxngChartProps extends HomelabChartProps {
  readonly imageTag: string;
  readonly storageClassName: string;
  readonly ingress: HomelabIngressOptions;
  readonly secretStore: string;
}

export class SearxngChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: SearxngChartProps) {
    super(scope, name, props);

    const secretStore = SecretStore.fromName(
      this,
      props.secretStore,
      SecretStoreType.CLUSTER_SECRET_STORE
    );

    const valkey = this.createValkeyInstance(props);

    const secretKey = new OnepasswordSecretPassword(
      this,
      "searxng-secret-key",
      {
        store: secretStore,
        secretKey: "searxng-secret-key",
      }
    );

    const searxng = new SearXNG(this, "app", {
      secret: secretKey.asSecretValue(),
      imageTag: props.imageTag,
      hostname: props.ingress.hostname,
      valkeyHostname: valkey.service.name,
    });

    new HomelabIngress(this, "ingress", {
      ingressClassName: props.ingress.ingressClass,
      service: searxng.service,
      hostname: props.ingress.hostname,
      certIssuer: props.ingress.certIssuer,
    });
  }

  private createValkeyInstance(props: SearxngChartProps) {
    const pvc = new PersistentVolumeClaim(this, "valkey-pvc", {
      storageClassName: props.storageClassName,
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: Size.gibibytes(10),
    });
    const volume = Volume.fromPersistentVolumeClaim(this, "valkey-volume", pvc);
    const deployment = new Deployment(this, "valkey-deployment", {
      replicas: 1,
      strategy: DeploymentStrategy.recreate(),
      containers: [
        {
          name: "valkey",
          image: VALKEY_IMAGE,
          command: [
            "valkey-server",
            "--save",
            "30",
            "1",
            "--loglevel",
            "warning",
          ],
          ports: [{ name: "valkey", number: VALKEY_PORT }],
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
          volumeMounts: [
            {
              volume: volume,
              path: "/data",
            },
          ],
          securityContext: {
            ensureNonRoot: false,
            privileged: true,
            readOnlyRootFilesystem: false,
            allowPrivilegeEscalation: true,
            capabilities: {
              drop: [Capability.ALL],
              add: [
                Capability.SETGID,
                Capability.SETUID,
                Capability.DAC_OVERRIDE,
              ],
            },
          },
        },
      ],
    });

    const service = new Service(this, "valkey-service", {
      ports: [
        {
          name: "http",
          port: VALKEY_PORT,
          targetPort: VALKEY_PORT,
        },
      ],
      selector: deployment,
    });

    return {
      deployment: deployment,
      service: service,
    };
  }
}
