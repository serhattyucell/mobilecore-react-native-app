import { Text, View } from 'react-native';
import { settingsPageStyles } from '../styles/settings-page.styles';
import { SettingItem } from '../interfaces/settings.interfaces';

interface SettingsCardProps {
  items: SettingItem[];
}

export function SettingsCard({ items }: SettingsCardProps) {
  return (
    <View style={settingsPageStyles.card}>
      <Text style={settingsPageStyles.heading}>Ayarlar</Text>
      {items.map((item) => (
        <View key={item.title}>
          <Text style={settingsPageStyles.itemTitle}>{item.title}</Text>
          <Text style={settingsPageStyles.itemDescription}>{item.description}</Text>
        </View>
      ))}
    </View>
  );
}
