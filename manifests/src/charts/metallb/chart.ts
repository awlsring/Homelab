import { Chart, Include } from 'cdk8s';
import { Construct } from 'constructs/lib/construct';
import { BgpAdvertisement, BgpPeer, IpAddressPool, L2Advertisement } from '../../imports/metallb-metallb.io';

export enum MetalLBType {
  NATIVE = 'native',
  FRR = 'frr',
}

export enum MetalLBMode {
  LAYER2 = 'layer2',
  BGP = 'bgp',
}

export interface MetalLBBGPConfig {
  readonly myASN: number;
  readonly peerASN: number;
  readonly peerAddress: string;
}

export interface MetalLBChartProps {
  readonly version: string;
  readonly addresses: string[];
  readonly mode?: MetalLBMode;
  readonly type?: MetalLBType;
  readonly bgpConfig?: MetalLBBGPConfig;
}

/**
 * A construct to install MetalLB via the default manifest and configure an IP Address pool.
 */
export class MetalLBChart extends Chart {
  readonly namespace = 'metallb-system';

  constructor(scope: Construct, id: string, props: MetalLBChartProps) {
    super(scope, id);

    this.validateProps(props);

    const mode = props.mode ?? MetalLBMode.LAYER2;
    const type = props.type ?? MetalLBType.NATIVE;
    const url = `https://raw.githubusercontent.com/metallb/metallb/${props.version}/config/manifests/metallb-${type}.yaml`;

    new Include(this, 'metallb', { url });

    new IpAddressPool(this, 'ip-address-pool', {
      metadata: {
        name: 'ip-address-pool',
        namespace: this.namespace,
      },
      spec: {
        addresses: props.addresses,
      },
    });

    switch (mode) {
      case MetalLBMode.BGP:
        if (!props.bgpConfig) {
          throw new Error('BGP mode requires bgpConfig to be set');
        }
        this.generateBgpConfig(props.bgpConfig);
        break;
      case MetalLBMode.LAYER2:
        this.generateLayer2Config();
        break;
      default:
        throw new Error(`Unknown mode: ${mode}`);
    }
  }

  private validateProps(props: MetalLBChartProps) {
    if (props.mode === MetalLBMode.BGP && !props.bgpConfig) {
      throw new Error('BGP mode requires bgpConfig to be set');
    }
  }

  private generateBgpConfig(config: MetalLBBGPConfig) {
    new BgpPeer(this, 'bgp-peer', {
      metadata: {
        name: 'default',
        namespace: this.namespace,
      },
      spec: {
        myAsn: config.myASN,
        peerAsn: config.peerASN,
        peerAddress: config.peerAddress,
      },
    });

    new BgpAdvertisement(this, 'bgp-advertisement', {
      metadata: {
        name: 'default',
        namespace: this.namespace,
      },
    });
  }

  private generateLayer2Config() {
    new L2Advertisement(this, 'l2-advertisement', {
      metadata: {
        name: 'default',
        namespace: this.namespace,
      },
    });
  }
}