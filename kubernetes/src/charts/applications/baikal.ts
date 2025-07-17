import { Size } from "cdk8s";
import {
  Cpu,
  DeploymentStrategy,
  EnvValue,
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  Protocol,
  Service,
  Volume,
} from "cdk8s-plus-31";
import { Construct } from "constructs";
import {
  HomelabChart,
  HomelabChartProps,
} from "../../constructs/charts/homelab-chart";
import { HomelabDeployment } from "../../constructs/homelab/deployment";
import {
  HomelabIngress,
  HomelabIngressOptions,
} from "../../constructs/homelab/ingress";
import { PersistentVolumeClaimOptions } from "../../constructs/homelab/storage";
import {
  SecretStore,
  SecretStoreType,
} from "../../constructs/external-secrets/secret-store";
import { OnepasswordSecretPassword } from "../../constructs/external-secrets/onepassword-secret-password";

export interface BaikailChartProps extends HomelabChartProps {
  readonly ingress: HomelabIngressOptions;
  readonly secretStore: string;
  readonly storage: {
    readonly data: PersistentVolumeClaimOptions;
    readonly config: PersistentVolumeClaimOptions;
  };
}

export class BaikalChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: BaikailChartProps) {
    super(scope, name, props);

    const configPVC = new PersistentVolumeClaim(this, "config-pvc", {
      storageClassName: props.storage.config.storageClass,
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: props.storage.config.size ?? Size.gibibytes(1),
    });
    const configVol = Volume.fromPersistentVolumeClaim(
      this,
      "config-vol",
      configPVC
    );

    const dataPVC = new PersistentVolumeClaim(this, "data-pvc", {
      storageClassName: props.storage.data.storageClass,
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
      storage: props.storage.data.size ?? Size.gibibytes(1),
    });
    const dataVol = Volume.fromPersistentVolumeClaim(this, "data-vol", dataPVC);

    const secretStore = SecretStore.fromName(
      this,
      props.secretStore,
      SecretStoreType.CLUSTER_SECRET_STORE
    );

    const smtpSecret = new OnepasswordSecretPassword(this, "smtp-secret", {
      store: secretStore,
      secretKey: "baikal-smtp-key",
    });

    const deployment = new HomelabDeployment(this, "app", {
      replicas: 1,
      strategy: DeploymentStrategy.recreate(),
      volumes: [dataVol],
      containers: [
        {
          image: "ckulka/baikal:nginx",
          ports: [{ name: "http", number: 80, protocol: Protocol.TCP }],
          securityContext: {
            readOnlyRootFilesystem: false,
            ensureNonRoot: false,
          },
          envVariables: {
            SMTP_PASSWORD: EnvValue.fromSecretValue(smtpSecret.asSecretValue()),
            MSMTPRC: EnvValue.fromValue(
              `defaults
auth           on
tls            on
tls_trust_file /etc/ssl/certs/ca-certificates.crt
account        default
host           smtp.resend.com
port           587
from           admin@drigs.org
user           resend
password       \${PASSWORD}
`
            ),
          },
          resources: {
            cpu: {
              request: Cpu.millis(100),
              limit: Cpu.millis(500),
            },
            memory: {
              request: Size.mebibytes(128),
              limit: Size.gibibytes(512),
            },
          },
          volumeMounts: [
            {
              volume: configVol,
              path: "/var/www/baikal/config",
            },
            {
              volume: dataVol,
              path: "/var/www/baikal/Specific",
            },
          ],
        },
      ],
    });

    const service = new Service(this, "service", {
      selector: deployment,
      ports: [
        {
          port: 80,
          name: "http",
          targetPort: 80,
        },
      ],
    });

    new HomelabIngress(this, "ingress", {
      ingressClassName: props.ingress.ingressClass,
      service: service,
      port: 80,
      hostname: props.ingress.hostname,
      certIssuer: props.ingress.certIssuer,
    });
  }
}
