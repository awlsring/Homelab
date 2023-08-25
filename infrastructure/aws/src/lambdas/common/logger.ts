import Pino from 'pino';

export interface LoggerConfig {
  readonly name: string;
  readonly logLevel?: string;
}

export function configureLogger(config: LoggerConfig) {
  let level: string = 'info';
  const logger = Pino({ name: config.name, level: 'info' });

  if (config.logLevel) {
    switch (config.logLevel) {
      case 'info': {
        level = 'info';
        break;
      }
      case 'debug': {
        level = 'debug';
        break;
      }
      case 'trace': {
        level = 'trace';
        break;
      }
      case 'warn': {
        level = 'warn';
        break;
      }
      case 'error': {
        level = 'error';
        break;
      }
      default: {
        logger.info(`Invalid log level: ${config.logLevel}. Defaulting to info`);
        break;
      }
    }
    logger.info(`Setting log level to ${config.logLevel}`);

    logger.level = level;
  }
  return logger;
}