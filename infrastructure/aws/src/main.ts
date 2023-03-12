#!/usr/bin/env node
import 'source-map-support/register';
import { App, Environment } from 'aws-cdk-lib';
import { MonthlyCostNotifierStack } from './stacks/monthly-cost-notifier-stack';

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