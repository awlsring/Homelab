import { Construct } from "constructs";
import {
  Certificate,
  CertificateProps,
} from "../../imports/certificates-cert-manager.io";

export interface HomelabCertificateProps {
  readonly name: string;
  readonly dnsNames: string[];
  readonly issuerName: string;
}

export class HomelabCertificate extends Construct {
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
          name: props.issuerName,
          kind: "ClusterIssuer",
        },
      },
    };
    super(scope, name);
    new Certificate(this, "certificate", certProps);
    this.secretName = props.name;
  }
}
