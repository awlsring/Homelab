import { ApiResource, ClusterRole, ClusterRoleBinding, NonApiResource, ServiceAccount } from 'cdk8s-plus-25';
import { Construct } from 'constructs';
import { HomelabChart, HomelabChartProps } from '../../common/homelab-charts';

export class PrometheusOperatorChart extends HomelabChart {
  constructor(scope: Construct, name: string, props: HomelabChartProps) {
    super(scope, name, props);

    const account = ServiceAccount.fromServiceAccountName(this, 'account', 'prometheus-k8s', {
      namespaceName: this.namespace,
    });

    const role = new ClusterRole(this, 'prometheus-k8s-super-role', {
      rules: [
        {
          verbs: ['get', 'list', 'watch'],
          endpoints: [
            ApiResource.NODES,
            ApiResource.ENDPOINTS,
            ApiResource.SERVICES,
            ApiResource.PODS,
            ApiResource.custom({
              apiGroup: '',
              resourceType: 'nodes/metrics',
            }),
          ],
        },
        {
          verbs: ['get'],
          endpoints: [
            NonApiResource.of('/metrics'),
            ApiResource.INGRESSES,
            ApiResource.CONFIG_MAPS,
          ],
        },
      ],
    });

    const binding = new ClusterRoleBinding(this, 'bind', {
      role: role,
    });

    binding.addSubjects(account);

  }
}