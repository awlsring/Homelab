import { ApiObject, Duration } from "cdk8s";
import { Construct } from "constructs";
import {
  PrometheusRule as RawPrometheusRule,
  PrometheusRuleSpecGroupsRulesExpr,
} from "../../imports/prometheusrules-monitoring.coreos.com";
import { DurationToString } from "../kube/conversion";

export interface PrometheusRuleGroupRuleOptions {
  readonly alert: string;
  readonly annotations?: Record<string, string>;
  readonly expression: string;
  readonly for: Duration;
  readonly labels?: Record<string, string>;
}

export interface PrometheusRuleGroupOptions {
  readonly name: string;
  readonly rules: PrometheusRuleGroupRuleOptions[];
}

export interface PrometheusRuleProps {
  readonly groups: PrometheusRuleGroupOptions[];
}

function ruleToRaw(rule: PrometheusRuleGroupRuleOptions) {
  return {
    alert: rule.alert,
    annotations: rule.annotations,
    expr: PrometheusRuleSpecGroupsRulesExpr.fromString(rule.expression),
    for: DurationToString(rule.for),
    labels: rule.labels,
  };
}

function groupToRaw(group: PrometheusRuleGroupOptions) {
  const rules = group.rules.map(ruleToRaw);
  return {
    name: group.name,
    rules: rules,
  };
}

export class PrometheusRule extends Construct {
  protected readonly apiObject: ApiObject;

  constructor(scope: Construct, name: string, props: PrometheusRuleProps) {
    super(scope, name);
    const groups = props.groups.map(groupToRaw);
    this.apiObject = new RawPrometheusRule(this, `resource`, {
      spec: {
        groups: groups,
      },
    });
  }
}
