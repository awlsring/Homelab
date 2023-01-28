import { Construct } from "constructs";
import { Certificate, CertificateProps } from "../imports/certmanager-cert-manager.io";

export interface HomelabCertificateProps {
  name: string
  dnsNames: string[]
  issuer: string
}

export class HomelabCertificate extends Certificate {
  readonly secretName: string
  constructor(scope: Construct, name: string, props: HomelabCertificateProps) {
    const certProps: CertificateProps = {
      metadata: {
        name: props.name
      },
      spec: {
        secretName: props.name,
        dnsNames: props.dnsNames,
        issuerRef: {
          name: props.issuer,
          kind: "ClusterIssuer"
        }
      }
    }
    super(scope, name, certProps)
    this.secretName = props.name
  }
}