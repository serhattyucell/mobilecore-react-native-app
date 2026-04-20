export const logger = {
  info(message: string): void {
    // Centralized logging utility for future integrations.
    console.log(`[INFO] ${message}`);
  },
};
