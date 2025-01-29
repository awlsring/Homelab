import { Construct } from "constructs";
import { HelmChart } from "../../constructs/charts/helm-chart";
import {
  IpAddressPool,
  L2Advertisement,
} from "../../imports/metallb-metallb.io";

const NAMESPACE = "metallb-system";

export interface MetalLBChartProps {
  readonly addressRanges: string[];
}

export class MetalLBChart extends HelmChart {
  constructor(scope: Construct, name: string, props: MetalLBChartProps) {
    super(scope, name, {
      namespace: NAMESPACE,
      createNamespace: true,
      chart: "metallb",
      repo: "https://metallb.github.io/metallb",
      version: "0.14.9",
    });

    const pool = new IpAddressPool(this, "address-pool", {
      spec: {
        addresses: props.addressRanges,
        autoAssign: true,
        avoidBuggyIPs: true,
      },
    });

    new L2Advertisement(this, "l2-advertisement", {
      spec: {
        ipAddressPools: [pool.name],
      },
    });
  }
}
