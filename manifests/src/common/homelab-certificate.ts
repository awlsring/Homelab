import { Construct } from 'constructs';
import { Certificate, CertificateProps, ClusterIssuer } from '../imports/certmanager-cert-manager.io';

export interface HomelabCertificateProps {
  name: string;
  dnsNames: string[];
  issuer: ClusterIssuer;
}

export class HomelabCertificate extends Certificate {
  readonly secretName: string;
  constructor(scope: Construct, name: string, props: HomelabCertificateProps) {
    const certProps: CertificateProps = {
      metadata: {
        name: props.name,
      },
      spec: {
        secretName: props.name,
        dnsNames: props.dnsNames,
        issuerRef: {
          name: props.issuer.name,
          kind: 'ClusterIssuer',
        },
      },
    };
    super(scope, name, certProps);
    this.secretName = props.name;
  }
}