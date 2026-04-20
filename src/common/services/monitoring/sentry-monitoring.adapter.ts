import { MonitoringService } from '../../interfaces/monitoring-service.interface';

export class SentryMonitoringAdapter implements MonitoringService {
  captureException(error: unknown): void {
    // Sentry integration point.
    console.error('Monitoring captured error', error);
  }
}
