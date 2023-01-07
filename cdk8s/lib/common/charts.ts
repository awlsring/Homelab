import { Chart, ChartProps } from "cdk8s";
import { Namespace } from "cdk8s-plus-25";
import { Construct } from "constructs";
import { GenerateCertForService, GenerateGenericRoute, GenerateIngressRoute, TlsExposedProps } from "../service-utils/service-utils";

export interface HomelabChartProps extends ChartProps {
  namespace: string,
  createNamespace?: boolean
  tls?: TlsExposedProps,
}

export class HomelabChart extends Chart {
  namespace: string
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
    if (props.tls) {
      GenerateCertForService({
        scope: this,
        name: `${props.tls.name}-cert`,
        namespace: props.namespace,
        issuer: props.tls.certIssuer,
        commonName: props.tls.dnsName
      })
  
      GenerateIngressRoute({
        scope: this,
        name: `${props.tls.name}-route`,
        namespace: props.namespace,
        routes: [
          GenerateGenericRoute(
            props.tls.dnsName,
            props.tls.service,
          )
        ],
        certName: `${props.tls.name}-cert`
      })
    }
  }
}