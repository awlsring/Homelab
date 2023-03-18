import { ValheimChart as BaseValheimChart, ValheimChartProps as BaseValheimChartProps } from '@awlsring/cdk8s-valheim';
import { Construct } from 'constructs';
import { HomelabChart, HomelabChartProps } from '../../common/homelab-charts';

export interface ValheimChartProps extends HomelabChartProps {
  readonly chart: BaseValheimChartProps;
}

export class ValheimChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: ValheimChartProps) {
    super(scope, name, props);
    new BaseValheimChart(this, 'valheim', props.chart);
  }
}