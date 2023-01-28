import { Chart, ChartProps, Helm } from 'cdk8s';
import { Namespace, Secret } from 'cdk8s-plus-25';
import { Construct } from 'constructs';
import { ClusterIssuer, ClusterIssuerSpecAcmeSolversDns01 } from '../../../imports/certmanager-cert-manager.io';

export enum LetsEncryptEndpoint {
  STAGING = 'https://acme-staging-v02.api.letsencrypt.org/directory',
  PROD = 'https://acme-v02.api.letsencrypt.org/directory'
}

export enum CertIssuers {
  CLOUDFLARE = 'cloudflare'
}

export interface CertIssuerProps {
  name: string;
  endpoint: LetsEncryptEndpoint;
  email: string;
  issuer: CertIssuers;
}

export interface CertManagerChartProps extends ChartProps {
  createNamespace: boolean;
  replicas?: number;
  nameservers: string[];
  cloudflareToken: string;
  certIssuers: CertIssuerProps[];
  dnsZones: string[];
}

export class CertManagerChart extends Chart {
  readonly issuers: Map<string, ClusterIssuer>;
  constructor(scope: Construct, name: string, props: CertManagerChartProps) {
    super(scope, name, props);

    if (props.createNamespace) {
      new Namespace(this, 'namespace', {
        metadata: {
          name: this.namespace,
        },
      });
    }

    const tokenName = 'apiToken';
    const cloudflareToken = new Secret(this, 'cloudflare-token', {
      type: 'Opaque',
    });
    cloudflareToken.addStringData(tokenName, props.cloudflareToken);

    let recursiveNameservers = '--dns01-recursive-nameservers=';
    props.nameservers.forEach(n => {
      recursiveNameservers = `${recursiveNameservers}${n}:53,`;
    });
    recursiveNameservers = recursiveNameservers.slice(0, -1);

    new Helm(this, 'helm', {
      chart: 'jetstack/cert-manager',
      values: {
        namespace: this.namespace,
        installCRDs: false,
        replicaCount: props.replicas ?? 1,
        podDnsPolicy: 'None',
        podDnsConfig: {
          nameservers: [
            '1.1.1.1',
            '9.9.9.9',
          ],
        },
        extraArgs: [
          recursiveNameservers,
          '--dns01-recursive-nameservers-only',
        ],
      },
    });


    // This may need to move out
    this.issuers = new Map<string, ClusterIssuer>();
    props.certIssuers.forEach(issuer => {

      let solver: ClusterIssuerSpecAcmeSolversDns01;
      switch (issuer.issuer) {
        case CertIssuers.CLOUDFLARE: {
          solver = this.createCloudflareSolver(issuer.email, cloudflareToken.name, tokenName);
          break;
        }
        default: {
          throw Error('Need issuer');
        }
      }

      const issuerName = `${issuer.name}-issuer`;
      const clusterIssuer = new ClusterIssuer(this, `${issuer.name}-cluster-issuer`, {
        metadata: {
          name: issuerName,
        },
        spec: {
          acme: {
            server: issuer.endpoint,
            email: issuer.email,
            privateKeySecretRef: {
              name: issuerName,
            },
            solvers: [
              {
                dns01: solver,
                selector: {
                  dnsZones: props.dnsZones,
                },
              },
            ],
          },
        },
      });
      this.issuers.set(issuer.name, clusterIssuer);
    });
  }

  createCloudflareSolver(email: string, secretName: string, secretKey: string): ClusterIssuerSpecAcmeSolversDns01 {
    return {
      cloudflare: {
        email: email,
        apiTokenSecretRef: {
          name: secretName,
          key: secretKey,
        },
      },
    };
  }
}