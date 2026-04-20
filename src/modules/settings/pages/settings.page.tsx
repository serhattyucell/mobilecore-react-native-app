import { View } from 'react-native';

import { AppScreen } from '../../../common/components/app.screen';
import { spacing } from '../../../theme/spacing';
import { SettingsCard } from '../components/settings-card.component';
import { SettingsForm } from '../components/settings-form.component';
import { getSettingItems } from '../services/settings.service';

export function SettingsPage() {
  const items = getSettingItems();

  return (
    <AppScreen>
      <View style={{ gap: spacing.md }}>
        <SettingsCard items={items} />
        <SettingsForm />
      </View>
    </AppScreen>
  );
}
