const expoPublicApiBaseUrl = process.env.EXPO_PUBLIC_API_BASE_URL;
const expoPublicAppEnv = process.env.EXPO_PUBLIC_APP_ENV;
const expoPublicEnableLogging = process.env.EXPO_PUBLIC_ENABLE_LOGGING;

type AppEnvironment = 'development' | 'staging' | 'production';

function resolveEnvironment(value: string | undefined): AppEnvironment {
  if (value === 'production' || value === 'staging') {
    return value;
  }

  return 'development';
}

export const envConfig = {
  appEnv: resolveEnvironment(expoPublicAppEnv),
  apiBaseUrl: expoPublicApiBaseUrl ?? 'https://api.example.com',
  enableLogging: expoPublicEnableLogging !== 'false',
};
