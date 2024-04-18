import { Duration, Size } from "cdk8s";
import {
  ApiResource,
  ClusterRole,
  ClusterRoleBinding,
  ConfigMap,
  Cpu,
  Deployment,
  NonApiResource,
  Probe,
  Protocol,
  Role,
  RoleBinding,
  Service,
  ServiceAccount,
} from "cdk8s-plus-minus";
import { Construct } from "constructs";

const NAMESPACE = "cloudflare-operator-system";
const ALL_VERBS = [
  "get",
  "list",
  "watch",
  "create",
  "update",
  "patch",
  "delete",
];
const NETWORKING_GROUP = "networking.cfargotunnel.com";

// Unused, keeping for reference
export class CloudflareOperator extends Construct {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    const serviceAccount = new ServiceAccount(this, "service-account", {
      metadata: {
        name: "cloudflare-operator-controller-manager",
        namespace: NAMESPACE,
      },
    });

    const leaderElectionRole = new Role(
      this,
      "cloudflare-operator-leader-election-role",
      {
        metadata: {
          name: "cloudflare-operator-leader-election-role",
          namespace: NAMESPACE,
        },
        rules: [
          {
            resources: [ApiResource.CONFIG_MAPS, ApiResource.LEASES],
            verbs: ALL_VERBS,
          },
          {
            resources: [ApiResource.EVENTS],
            verbs: ["create", "patch"],
          },
        ],
      },
    );

    const operatorManagerRole = new ClusterRole(
      this,
      "cloudflare-operator-manager-role",
      {
        metadata: {
          name: "cloudflare-operator-manager-role",
          namespace: NAMESPACE,
        },
        rules: [
          {
            endpoints: [ApiResource.EVENTS],
            verbs: ["create", "patch"],
          },
          {
            endpoints: [ApiResource.DEPLOYMENTS],
            verbs: ALL_VERBS,
          },
          {
            endpoints: [ApiResource.CONFIG_MAPS],
            verbs: ALL_VERBS,
          },
          {
            endpoints: [ApiResource.SECRETS],
            verbs: ALL_VERBS,
          },
          {
            endpoints: [ApiResource.SERVICES],
            verbs: ["get", "list", "watch"],
          },
          {
            endpoints: [
              ApiResource.custom({
                apiGroup: NETWORKING_GROUP,
                resourceType: "clustertunnels",
              }),
            ],
            verbs: ALL_VERBS,
          },
          {
            endpoints: [
              ApiResource.custom({
                apiGroup: NETWORKING_GROUP,
                resourceType: "clustertunnels/finalizers",
              }),
            ],
            verbs: ["update"],
          },
          {
            endpoints: [
              ApiResource.custom({
                apiGroup: NETWORKING_GROUP,
                resourceType: "clustertunnels/status",
              }),
            ],
            verbs: ["get", "patch", "update"],
          },
          {
            endpoints: [
              ApiResource.custom({
                apiGroup: NETWORKING_GROUP,
                resourceType: "tunnelbindings",
              }),
            ],
            verbs: ALL_VERBS,
          },
          {
            endpoints: [
              ApiResource.custom({
                apiGroup: NETWORKING_GROUP,
                resourceType: "tunnelbindings/finalizers",
              }),
            ],
            verbs: ["update"],
          },
          {
            endpoints: [
              ApiResource.custom({
                apiGroup: NETWORKING_GROUP,
                resourceType: "tunnelbindings/status",
              }),
            ],
            verbs: ["get", "patch", "update"],
          },
          {
            endpoints: [
              ApiResource.custom({
                apiGroup: NETWORKING_GROUP,
                resourceType: "tunnels",
              }),
            ],
            verbs: ALL_VERBS,
          },
          {
            endpoints: [
              ApiResource.custom({
                apiGroup: NETWORKING_GROUP,
                resourceType: "tunnels/finalizers",
              }),
            ],
            verbs: ["update"],
          },
          {
            endpoints: [
              ApiResource.custom({
                apiGroup: NETWORKING_GROUP,
                resourceType: "tunnels/status",
              }),
            ],
            verbs: ["get", "patch", "update"],
          },
        ],
      },
    );

    new ClusterRole(this, "cloudflare-operator-metrics-reader", {
      metadata: {
        name: "cloudflare-operator-metrics-reader",
        namespace: NAMESPACE,
      },
      rules: [
        {
          endpoints: [NonApiResource.of("/metrics")],
          verbs: ["get"],
        },
      ],
    });

    const proxyRole = new ClusterRole(this, "cloudflare-operator-proxy-role", {
      metadata: {
        name: "cloudflare-operator-proxy-role",
      },
      rules: [
        {
          endpoints: [ApiResource.TOKEN_REVIEWS],
          verbs: ["create"],
        },
        {
          endpoints: [ApiResource.SUBJECT_ACCESS_REVIEWS],
          verbs: ["create"],
        },
      ],
    });

    new RoleBinding(this, "cloudflare-operator-leader-election-rolebinding", {
      role: leaderElectionRole,
    }).addSubjects(serviceAccount);

    new ClusterRoleBinding(this, "cloudflare-operator-manager-rolebinding", {
      role: operatorManagerRole,
    }).addSubjects(serviceAccount);

    new ClusterRoleBinding(this, "proxy-rolebinding", {
      role: proxyRole,
    }).addSubjects(serviceAccount);

    new ConfigMap(this, "cloudflare-operator-manager-config", {
      metadata: {
        name: "cloudflare-operator-manager-config",
        namespace: NAMESPACE,
      },
      data: {
        "controller_manager_config.yaml": [
          "apiVersion: controller-runtime.sigs.k8s.io/v1alpha1",
          "kind: ControllerManagerConfiguration",
          "health:",
          "  healthProbeBindAddress: :8081",
          "metrics:",
          "  bindAddress: 127.0.0.1:8080",
          "webhook:",
          "  port: 9443",
          "leaderElection:",
          "  leaderElect: true",
          "  resourceName: 9f193cf8.cfargotunnel.com",
        ].join("\n"),
      },
    });

    const deployment = new Deployment(
      this,
      "cloudflare-operator-controller-manager",
      {
        metadata: {
          labels: {
            "control-plane": "controller-manager",
          },
          name: "cloudflare-operator-controller-manager",
          namespace: NAMESPACE,
        },
        replicas: 1,
        select: true,
        podMetadata: {
          labels: {
            "control-plane": "controller-manager",
          },
        },
        serviceAccount: serviceAccount,
        terminationGracePeriod: Duration.seconds(10),
        containers: [
          {
            args: [
              "--health-probe-bind-address=:8081",
              "--metrics-bind-address=127.0.0.1:8080",
              "--logtostderr=true",
              "--v=10",
            ],
            image: "gcr.io/kubebuilder/kube-rbac-proxy:v0.8.0",
            name: "kube-rbac-proxy",
            ports: [
              {
                number: 8443,
                name: "https",
              },
            ],
          },
          {
            args: [
              "--health-probe-bind-address=:8081",
              "--metrics-bind-address=127.0.0.1:8080",
              "--leader-elect",
            ],
            command: ["/manager"],
            image: "adyanth/cloudflare-operator:0.10.1",
            name: "manager",
            ports: [
              {
                number: 8443,
                name: "https",
              },
            ],
            liveness: Probe.fromHttpGet("/healthz", {
              port: 8081,
              initialDelaySeconds: Duration.seconds(15),
              periodSeconds: Duration.seconds(20),
            }),
            readiness: Probe.fromHttpGet("/readyz", {
              port: 8081,
              initialDelaySeconds: Duration.seconds(5),
              periodSeconds: Duration.seconds(10),
            }),
            resources: {
              cpu: {
                limit: Cpu.millis(200),
                request: Cpu.millis(100),
              },
              memory: {
                limit: Size.mebibytes(100),
                request: Size.mebibytes(20),
              },
            },
          },
        ],
      },
    );

    new Service(
      this,
      "cloudflare-operator-controller-manager-metrics-service",
      {
        metadata: {
          labels: {
            "control-plane": "controller-manager",
          },
          name: "cloudflare-operator-controller-manager-metrics-service",
          namespace: NAMESPACE,
        },
        ports: [
          {
            name: "https",
            port: 8443,
            protocol: Protocol.TCP,
            targetPort: 8443,
          },
        ],
      },
    ).select(deployment);
  }
}
