import { configureLogger } from "./common/logger";
import { SQSEvent } from 'aws-lambda';
import { APIEmbedField, Embed, EmbedColor, EmbedType, WebhookMessage, sendDiscordWebhookMessage } from "./common/discord";

const logger = configureLogger({ name: 'truenas-alert-notifier-lambda', logLevel: process.env.LOG_LEVEL });

logger.info('Starting lambda from Cold Boot.');

if (process.env.WEBHOOK == "") {
  logger.fatal("WEBHOOK environment variable is not set")
  process.exit(1)
}

interface SqsNotification {
  readonly Type: string;
  readonly MessageId: string;
  readonly TopicArn: string;
  readonly Message: string;
  readonly Timestamp: string;
  readonly SignatureVersion: string;
  readonly Signature: string;
  readonly SigningCertURL: string;
  readonly UnsubscribeURL: string;
}

const TRUENAS_IMAGE = "https://avatars.githubusercontent.com/u/53482242?s=200&v=4"

export interface TrueNASAlertMessage {
  readonly system: string;
  readonly user: string;
  readonly newAlert?: string;
  readonly currentAlerts?: string[];
}

function getSystemAndUser(line: string) {
  let clean = line.split("<br>")[0]
  clean = clean.replace("New alerts:", "")
  const systemAndUser = clean.split("@")
  const system = systemAndUser[0].trim()
  const user = systemAndUser[1].trim()
  return { system, user }
}

function getNewAlert(line: string) {
  return line.replace("<li>", "").replace("</li>", "").replace("<ul>", "").trim()
}

function getCurrentAlerts(lines: string[]) {
  const alerts: string[] = []
  for (const line of lines) {
    if (line.includes("<li>")) {
      alerts.push(line.replace("<li>", "").replace("</li>", "").replace("<ul>", "").trim())
    }
  }
  return alerts
}

export function parseAlertMessage(text: string): TrueNASAlertMessage {
  const lines = text.split("\n")
  const { system, user } = getSystemAndUser(lines[0])

  if (text.includes("This is a test alert")) {
    return {
      system,
      user,
      newAlert: "This is a test alert",
    }
  }

  const newAlert = getNewAlert(lines[1])
  let currentAlerts: string[] | undefined = undefined
  if (lines.length > 3) {
    currentAlerts = getCurrentAlerts(lines.slice(3))
  }

  if (currentAlerts) {
    const index = currentAlerts.indexOf(newAlert)
    if (index > -1) {
      currentAlerts.splice(index, 1)
    }
  }

  return {
    system,
    user,
    newAlert,
    currentAlerts
  }
}

function buildFields(message: TrueNASAlertMessage): APIEmbedField[] {
  const fields: APIEmbedField[] = []
  if (message.newAlert) {
    fields.push({
      name: "New Alert",
      value: message.newAlert,
    })
  }
  if (message.currentAlerts) {
    fields.push({
      name: "Current Alerts",
      value: message.currentAlerts.map(alert => `- ${alert}`).join("\n"),
    })
  }
  return fields
}

function createMessage(message: TrueNASAlertMessage): WebhookMessage {
  const embed: Embed = {
    type: EmbedType.Rich,
    title: `Incoming Alert`,
    fields: buildFields(message),
    color: EmbedColor.Blue,
    timestamp: new Date().toISOString(),
    thumbnail: {
      url: TRUENAS_IMAGE,
    },
    author: {
      name: `${message.system} @ ${message.user}`,
      url: process.env.TRUENAS_URL,
    },
  }
  return {
    username: "TrueNAS",
    avatar_url: TRUENAS_IMAGE,
    embeds: [embed],
  }
}

export const lambdaHandler = async (event: SQSEvent) => {

  for (const record of event.Records) {
    logger.debug(`Processing record ${record.messageId}`);
    const notification: SqsNotification = JSON.parse(record.body);

    logger.debug(`Notification: ${notification.Message}`);
    const alertMessage = parseAlertMessage(notification.Message)
    const message = createMessage(alertMessage);

    const response = await sendDiscordWebhookMessage(process.env.WEBHOOK!, message);
    logger.debug(`Discord Response: ${response}`);
  }
  logger.info(`Processed ${event.Records.length} records`)
};