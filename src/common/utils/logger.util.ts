import { envConfig } from '../../config/env.config';

function shouldLog(): boolean {
  return envConfig.enableLogging || envConfig.appEnv !== 'production';
}

export const logger = {
  debug(message: string): void {
    if (shouldLog()) {
      console.debug(`[DEBUG] ${message}`);
    }
  },
  info(message: string): void {
    if (shouldLog()) {
      console.log(`[INFO] ${message}`);
    }
  },
  warn(message: string): void {
    if (shouldLog()) {
      console.warn(`[WARN] ${message}`);
    }
  },
  error(message: string, error?: unknown): void {
    if (shouldLog()) {
      console.error(`[ERROR] ${message}`, error);
    }
  },
};
