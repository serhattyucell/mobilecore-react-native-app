export interface MonitoringService {
  captureException(error: unknown): void;
}
