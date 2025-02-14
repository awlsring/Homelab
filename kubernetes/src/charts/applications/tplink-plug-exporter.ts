import { Size } from "cdk8s";
import { Cpu, Protocol, Service } from "cdk8s-plus-31";
import { Construct } from "constructs";
import { HomelabChart, HomelabChartProps } from "../../constructs/charts/homelab-chart";
import { HomelabDeployment } from "../../constructs/homelab/deployment";

export interface TPLinkPlugExporterChartProps extends HomelabChartProps {}

export class TPLinkPlugExporterChart extends HomelabChart {
  constructor(
    scope: Construct,
    name: string,
    props: TPLinkPlugExporterChartProps,
  ) {
    super(scope, name, props);

    const deployment = new HomelabDeployment(this, "app", {
      replicas: 1,
      containers: [
        {
          image: "fffonion/tplink-plug-exporter",
          ports: [{ name: "metrics", number: 9233, protocol: Protocol.TCP }],
          securityContext: {
            readOnlyRootFilesystem: false,
            ensureNonRoot: false,
          },
          resources: {
            cpu: {
              request: Cpu.millis(100),
              limit: Cpu.millis(500),
            },
            memory: {
              request: Size.mebibytes(256),
              limit: Size.gibibytes(512),
            },
          },
        },
      ],
    });

    new Service(this, "service", {
      selector: deployment,
      ports: [
        {
          port: 9233,
          name: "metrics",
          targetPort: 9233,
        },
      ],
    });
  }
}
