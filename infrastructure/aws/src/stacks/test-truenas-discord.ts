import { Environment, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LogLevel, MonthlyCostNotifier } from '@awlsring/cdk-aws-discord-notifiers';
import { Topic } from 'aws-cdk-lib/aws-sns';
import { Policy, Role, User } from 'aws-cdk-lib/aws-iam';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { SqsSubscription } from 'aws-cdk-lib/aws-sns-subscriptions';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as path from 'path';
import { Architecture, Runtime } from 'aws-cdk-lib/aws-lambda';
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';

export interface TrueNasAlertNotifierStackProps extends StackProps {
  readonly webhook: string;
  readonly truenasUrl?: string;
  readonly lambdaOptions?: {
    /**
   * The lambda runtime
   *
   * @default NODES_LATEST
   */
  readonly runtime?: Runtime;
    /**
   * The lambda name
   *
   * @default TrueNasAlertNotifier
   */
  readonly name?: string;
  /**
   * The lambda log level
   *
   * @default INFO
   */
  readonly logLevel?: LogLevel;
  /**
   * The lambda architecture
   *
   * @default ARM_64
   */
  readonly architecture?: Architecture;
  }
}

export class TrueNasAlertNotifierStack extends Stack {
  constructor(scope: Construct, id: string, props: TrueNasAlertNotifierStackProps) {
    super(scope, id, props);

    const iamRole = new User(this, "user");

    const topic = new Topic(this, "topic", {
      topicName: "TrueNasAlertTopic"
    });
    topic.grantPublish(iamRole);

    const queue = new Queue(this, "queue");
    topic.addSubscription(new SqsSubscription(queue));

    const discordWebhook = new NodejsFunction(this, 'lambda', {
      entry: path.join(__dirname, '../lambdas/truenas-notifier-lambda.ts'),
      handler: 'lambdaHandler',
      runtime: Runtime.NODEJS_LATEST,
      functionName: props?.lambdaOptions?.name ?? 'TrueNasAlertNotifier',
      architecture: props?.lambdaOptions?.architecture ?? Architecture.ARM_64,
      environment: {
        WEBHOOK: props.webhook,
        LOG_LEVEL: props?.lambdaOptions?.logLevel ?? LogLevel.INFO,
        TRUENAS_URL: props.truenasUrl ?? "",
      },
      bundling: {
        externalModules: ['@aws-sdk', 'aws-lambda'],
      },
      logRetention: RetentionDays.ONE_MONTH,
    });
    discordWebhook.addEventSource(new SqsEventSource(queue));
  }
}
