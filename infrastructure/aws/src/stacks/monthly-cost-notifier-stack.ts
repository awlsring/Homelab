import { Environment, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LogLevel, MonthlyCostNotifier } from '@awlsring/cdk-aws-discord-notifiers';

export interface MonthlyCostNotifierStackProps extends StackProps {
  webhook?: string;
  accountId: string;
}

export class MonthlyCostNotifierStack extends Stack {
  constructor(scope: Construct, id: string, props: MonthlyCostNotifierStackProps) {
    super(scope, id, props);

    if (!props.webhook) {
      throw new Error("Missing webhook token")
    }

    new MonthlyCostNotifier(this, "MonthlyCostNotifier", {
      webhook: props.webhook,
      accountId: props.accountId,
      lambdaLogLevel: LogLevel.INFO,
    });
  }
}
