import { Size } from "cdk8s";
import {
  ConfigMap,
  Cpu,
  PersistentVolumeAccessMode,
  PersistentVolumeClaim,
  Service,
  StatefulSet,
  Volume,
} from "cdk8s-plus-minus";
import { Construct } from "constructs";
import { HomelabIngress } from "../homelab/ingress";
import { CERT_ISSUER_NAME_STAGING } from "../cert-manager/issuers";
import { NginxIngressAnnotations } from "../annotations/nginx-ingress-annotations";

export class KanidmProps {}

export class Kanidm extends Construct {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    const configLine = [
      'bindaddress = "[::]:8443"',
      'db_path = "/data/kanidm.db"',
      'tls_chain = "/cert/tls.crt"',
      'tls_key = "/cert/tls.key"',
      'domain = "auth.us-drig-1.drigs.org"',
      'origin = "https://auth.us-drig-1.drigs.org"',
    ];
    const configMap = new ConfigMap(this, "server-config", {
      data: {
        "server.toml": configLine.join("\n"),
      },
    });
    const configVol = Volume.fromConfigMap(
      scope,
      "server-config-vol",
      configMap,
    );

    const persistence = new PersistentVolumeClaim(this, "persistence", {
      storageClassName: "ceph-block",
      storage: Size.gibibytes(1),
      accessModes: [PersistentVolumeAccessMode.READ_WRITE_ONCE],
    });
    const persistenceVol = Volume.fromPersistentVolumeClaim(
      this,
      "persistence-vol",
      persistence,
    );

    const service = new Service(this, "service", {
      ports: [
        {
          name: "https",
          port: 443,
          targetPort: 8443,
        },
      ],
    });

    const ingress = new HomelabIngress(this, "ingress", {
      hostname: "auth.us-drig-1.drigs.org",
      ingressClassName: "nginx",
      service: service,
      certIssuer: CERT_ISSUER_NAME_STAGING,
      annotations: [NginxIngressAnnotations.backendProtocolHTTPS()],
    });

    const certVol = Volume.fromSecret(this, "cert-vol", ingress.certSecret);

    const set = new StatefulSet(this, "state-set", {
      securityContext: {
        fsGroup: 1000,
        user: 1000,
        group: 1000,
      },
      volumes: [configVol, persistenceVol, certVol],
      containers: [
        {
          args: ["kanidmd", "server", "-c", "/config/server.toml"],
          name: "kanidm",
          image: "docker.io/kanidm/server:1.1.0-rc.15",
          ports: [
            {
              name: "https",
              number: 8443,
            },
          ],
          securityContext: {
            user: 1000,
            group: 1000,
          },
          resources: {
            cpu: {
              limit: Cpu.millis(1000),
              request: Cpu.millis(200),
            },
            memory: {
              limit: Size.gibibytes(1),
              request: Size.mebibytes(256),
            },
          },
          volumeMounts: [
            {
              volume: configVol,
              path: "/config",
            },
            {
              volume: persistenceVol,
              path: "/data",
            },
            {
              volume: certVol,
              path: "/cert",
            },
          ],
        },
      ],
    });

    service.select(set);
  }
}
