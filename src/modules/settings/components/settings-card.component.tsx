import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { SettingItem } from '../interfaces/settings.interfaces';
import { settingsPageStyles } from '../styles/settings-page.styles';

interface SettingsCardProps {
  items: SettingItem[];
}

export function SettingsCard({ items }: SettingsCardProps) {
  const { t } = useTranslation();

  return (
    <View style={settingsPageStyles.card}>
      <Text style={settingsPageStyles.heading}>{t('settings.title')}</Text>
      {items.map((item) => (
        <View key={item.title}>
          <Text style={settingsPageStyles.itemTitle}>{item.title}</Text>
          <Text style={settingsPageStyles.itemDescription}>{item.description}</Text>
        </View>
      ))}
    </View>
  );
}
