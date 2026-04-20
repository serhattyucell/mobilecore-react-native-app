import axios from 'axios';

import { envConfig } from '../../../config/env.config';
import { logger } from '../../utils/logger.util';

export const httpClient = axios.create({
  baseURL: envConfig.apiBaseUrl,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use((config) => {
  logger.debug(`HTTP request: ${config.method?.toUpperCase()} ${config.url}`);
  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    logger.error('HTTP response error', error);
    return Promise.reject(error);
  },
);
