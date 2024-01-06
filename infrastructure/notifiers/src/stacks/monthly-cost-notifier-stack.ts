import { MonthlyCostNotifier } from "@awlsring/cdk-aws-discord-notifiers";
import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

export interface MonthlyCostNotifierStackProps extends StackProps {
  readonly webhook: string;
  readonly accountId: string;
  readonly webhookAvatar?: string;
}

export class MonthlyCostNotifierStack extends Stack {
  constructor(
    scope: Construct,
    id: string,
    props: MonthlyCostNotifierStackProps,
  ) {
    super(scope, id, props);

    new MonthlyCostNotifier(this, "MonthlyCostNotifier", {
      webhook: props.webhook,
      accountId: props.accountId,
      webhookAvatar: props.webhookAvatar,
    });
  }
}
