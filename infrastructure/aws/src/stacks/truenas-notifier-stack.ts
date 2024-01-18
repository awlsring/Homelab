import { TrueNasAlertNotifier } from "@awlsring/cdk-aws-discord-notifiers";
import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

export interface TrueNasAlertNotifierStackProps extends StackProps {
  readonly webhook: string;
  readonly truenasUrl: string;
  readonly webhookUser?: string;
  readonly webhookAvatar?: string;
  readonly createIamRole?: boolean;
  readonly displayCurrentAlerts?: boolean;
}

export class TrueNasAlertNotifierStack extends Stack {
  constructor(
    scope: Construct,
    id: string,
    props: TrueNasAlertNotifierStackProps,
  ) {
    super(scope, id, props);

    new TrueNasAlertNotifier(this, "notifier", {
      webhook: props.webhook,
      truenasUrl: props.truenasUrl,
      webhookAvatar: props.webhookAvatar,
      webhookUser: props.webhookUser,
      createIamRole: props.createIamRole ?? true,
      displayCurrentAlerts: props.displayCurrentAlerts ?? false,
    });
  }
}
