import { Construct } from "constructs";
import { KubeStatefulSet, Quantity } from "../../imports/k8s";
import {
  ApiResource,
  Protocol,
  Role,
  SecretValue,
  ServiceAccount,
} from "cdk8s-plus-31";

export interface WoodpeckerCIAgentProps {
  readonly namespace: string;
  readonly imageTag: string;
  readonly storageClass: string;
  readonly serverAddress: string;
  readonly secret: SecretValue;
}

export class WoodpeckerCIAgent extends Construct {
  constructor(scope: Construct, id: string, props: WoodpeckerCIAgentProps) {
    super(scope, id);

    const serviceAccount = new ServiceAccount(this, "service-account", {
      automountToken: true,
    });

    const role = new Role(this, "role", {
      rules: [
        {
          verbs: ["create", "delete"],
          resources: [
            ApiResource.PERSISTENT_VOLUME_CLAIMS,
            ApiResource.SERVICES,
            ApiResource.SECRETS,
          ],
        },
        {
          verbs: ["get", "list", "watch", "create", "delete"],
          resources: [ApiResource.PODS],
        },
        {
          verbs: ["get"],
          resources: [
            {
              apiGroup: "",
              resourceType: "pods/logs",
            },
          ],
        },
      ],
    });

    role.bind(serviceAccount);

    // https://github.com/cdk8s-team/cdk8s/issues/2183
    const labels = {
      "app.kubernetes.io/instance": "woodpecker",
      "app.kubernetes.io/name": "agent",
    };
    new KubeStatefulSet(this, "agent", {
      spec: {
        replicas: 3,
        serviceName: serviceAccount.name,
        selector: {
          matchLabels: labels,
        },
        volumeClaimTemplates: [
          {
            metadata: { name: "agent-config" },
            spec: {
              storageClassName: props.storageClass,
              accessModes: ["ReadWriteOnce"],
              resources: {
                requests: {
                  storage: Quantity.fromString("1Gi"),
                },
              },
            },
          },
        ],
        template: {
          metadata: {
            labels: labels,
          },
          spec: {
            securityContext: {
              fsGroup: 1000,
            },
            serviceAccountName: serviceAccount.name,
            containers: [
              {
                image: `docker.io/woodpeckerci/woodpecker-agent:${props.imageTag}`,
                name: "agent",
                ports: [
                  {
                    containerPort: 3000,
                    protocol: Protocol.TCP,
                    name: "http",
                  },
                ],
                securityContext: {
                  runAsUser: 1000,
                  runAsGroup: 1000,
                },
                volumeMounts: [
                  {
                    name: "agent-config",
                    mountPath: "/etc/woodpecker",
                  },
                ],
                env: [
                  {
                    name: "WOODPECKER_BACKEND",
                    value: "kubernetes",
                  },
                  {
                    name: "WOODPECKER_KUBERNETES_NAMESPACE",
                    value: props.namespace,
                  },
                  {
                    name: "WOODPECKER_BACKEND_K8S_POD_ANNOTATIONS",
                    value: "",
                  },
                  {
                    name: "WOODPECKER_BACKEND_K8S_POD_LABELS",
                    value: "",
                  },
                  {
                    name: "WOODPECKER_BACKEND_K8S_STORAGE_CLASS",
                    value: props.storageClass,
                  },
                  {
                    name: "WOODPECKER_BACKEND_K8S_STORAGE_RWX",
                    value: "true",
                  },
                  {
                    name: "WOODPECKER_BACKEND_K8S_VOLUME_SIZE",
                    value: "10G",
                  },
                  {
                    name: "WOODPECKER_CONNECT_RETRY_COUNT",
                    value: "1",
                  },
                  {
                    name: "WOODPECKER_SERVER",
                    value: `${props.serverAddress}:9000`,
                  },
                  {
                    name: "WOODPECKER_AGENT_SECRET",
                    valueFrom: {
                      secretKeyRef: {
                        name: props.secret.secret.name,
                        key: props.secret.key,
                      },
                    },
                  },
                ],
              },
            ],
          },
        },
      },
    });
  }
}
