#!/usr/bin/env node
import 'source-map-support/register';
import { App, Environment } from 'aws-cdk-lib';
import { MonthlyCostNotifierStack } from './stacks/monthly-cost-notifier-stack';
import { TrueNasAlertNotifierStack } from './stacks/test-truenas-discord';
import { LogLevel } from '@awlsring/cdk-aws-discord-notifiers';

const app = new App();

const account = "787585406569"

const env: Environment = {
  account: account,
  region: "us-west-2"
}

const defaultProps = {
  env: env,
}

new MonthlyCostNotifierStack(app, 'MonthlyCostNotifier', {
  ...defaultProps,
  accountId: account,
  webhook: process.env.DISCORD_WEBHOOK,
});

new TrueNasAlertNotifierStack(app, 'TrueNasAlertNotifier', {
  ...defaultProps,
  lambdaOptions: {
    logLevel: LogLevel.DEBUG,
  },
  webhook: process.env.DISCORD_WEBHOOK!,
  truenasUrl: "https://truenas.awlsring-sea.drigs.org",
});