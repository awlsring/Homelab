import { Chart, ChartProps } from "cdk8s";
import { Namespace } from "cdk8s-plus-25";
import { Construct } from "constructs";
import { ClusterIssuer } from "../../imports/certmanager-cert-manager.io";
import { GenerateCertForService, GenerateGenericRoute, GenerateIngressRoute, TlsExposedProps } from "../service-utils/service-utils";

export interface HomelabChartProps extends ChartProps {
  namespace: string,
  createNamespace?: boolean
  tls?: TlsExposedProps,
}

export interface ServiceData {
  name: string,
  port: number
}

export class HomelabChart extends Chart {
  readonly namespace: string
  service?: ServiceData

  configureTls(name: string, certIssuer: ClusterIssuer, dnsName: string, service: ServiceData) {
    const certName = `${name}-cert`;
    GenerateCertForService(this, {
      name: certName,
      namespace: this.namespace,
      issuer: certIssuer,
      commonName: dnsName
    })

    GenerateIngressRoute(this, {
      name: `${name}-route`,
      namespace: this.namespace,
      routes: [
        GenerateGenericRoute(
          dnsName,
          service,
        )
      ],
      certName: certName
    })
  }

  constructor(scope: Construct, name: string, props: HomelabChartProps) {
    super(scope, name, props)
    this.namespace = props.namespace
    if (props.createNamespace) {
      new Namespace(this, "namespace", {
        metadata: {
          name: props.namespace
        }
      })
    }
  }
}