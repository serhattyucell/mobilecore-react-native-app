import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import './common/i18n/i18n.config';
import { monitoringService } from './common/services/monitoring/monitoring.service';
import { useAppTheme } from './hooks/use-app-theme.hook';
import { AppNavigator } from './navigation/app.navigator';

export default function App() {
  const theme = useAppTheme();

  useEffect(() => {
    const previousHandler = ErrorUtils.getGlobalHandler();

    ErrorUtils.setGlobalHandler((error, isFatal) => {
      monitoringService.captureException({ error, isFatal });
      previousHandler(error, isFatal);
    });
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <StatusBar style="dark" />
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
