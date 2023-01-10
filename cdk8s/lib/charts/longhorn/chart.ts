import { Helm } from "cdk8s"
import { ServiceType } from "cdk8s-plus-25"
import { Construct } from "constructs"
import { HomelabChart, HomelabChartProps } from "../../common/charts"

export interface LonghornChartProps extends HomelabChartProps {
  serviceType: ServiceType
}

export class LonghornChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: LonghornChartProps) {
    super(scope, name, props)
    new Helm(this, "helm", {
      chart: "longhorn/longhorn",
      helmFlags: [
        '--namespace', props.namespace
      ],
      values: {
        service: {
          ui: {
            type: props.serviceType,
          },
        },
      }
    })
  }
}