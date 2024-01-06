#!/usr/bin/env node
import "source-map-support/register";
import { App, Environment } from "aws-cdk-lib";
import { MonthlyCostNotifierStack } from "./stacks/monthly-cost-notifier-stack";
import { TrueNasAlertNotifierStack } from "./stacks/truenas-notifier-stack";

const app = new App();

const account = "787585406569";

const env: Environment = {
  account: account,
  region: "us-west-2",
};

const defaultProps = {
  env: env,
};

new MonthlyCostNotifierStack(app, "MonthlyCostNotifier", {
  ...defaultProps,
  accountId: account,
  webhook: process.env.DISCORD_WEBHOOK!,
  webhookAvatar: "https://m.media-amazon.com/images/I/51XX7JzrbAL.jpg",
});

new TrueNasAlertNotifierStack(app, "TrueNasAlertNotifier", {
  ...defaultProps,
  webhook: process.env.DISCORD_WEBHOOK!,
  truenasUrl: "https://truenas.awlsring-sea.drigs.org",
  displayCurrentAlerts: false,
  webhookAvatar: "https://avatars.githubusercontent.com/u/53482242?s=200&v=4",
});
