import { Construct } from "constructs";
import {
  ClusterIssuerSpecAcmeSolversDns01,
  ClusterIssuer as RawClusterIssuer,
} from "../../imports/cert-manager.io";
import { SecretReference } from "../secret-reference";

export enum LetsEncryptEndpoint {
  STAGING = "https://acme-staging-v02.api.letsencrypt.org/directory",
  PROD = "https://acme-v02.api.letsencrypt.org/directory",
}

export enum CertIssuerName {
  CLOUDFLARE = "cloudflare",
}

export interface CertIssuerProps {
  readonly name: string;
  readonly endpoint: LetsEncryptEndpoint;
  readonly email: string;
  readonly issuer: CertIssuerName;
  readonly issuerSecretReference: SecretReference;
  readonly dnsZones: string[];
}

export class CertIssuer extends Construct {
  readonly name: string;
  constructor(scope: Construct, name: string, props: CertIssuerProps) {
    super(scope, name);

    const solver = this.makeSolver(props);
    this.name = props.name;
    new RawClusterIssuer(scope, `${props.name}-cluster-issuer`, {
      metadata: {
        name: props.name,
      },
      spec: {
        acme: {
          email: props.email,
          server: props.endpoint,
          privateKeySecretRef: {
            name: `${props.name}-tls-key`,
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
  }

  private makeSolver(
    props: CertIssuerProps,
  ): ClusterIssuerSpecAcmeSolversDns01 {
    switch (props.issuer) {
      case CertIssuerName.CLOUDFLARE: {
        return {
          cloudflare: {
            email: props.email,
            apiTokenSecretRef: {
              name: props.issuerSecretReference.name,
              key: props.issuerSecretReference.key,
            },
          },
        };
      }
      default: {
        throw Error("invalid issuer");
      }
    }
  }
}
