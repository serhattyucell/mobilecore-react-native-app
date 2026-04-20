import { AppScreen } from '../../../common/components/app.screen';
import { SettingsCard } from '../components/settings-card.component';
import { getSettingItems } from '../services/settings.service';

export function SettingsPage() {
  const items = getSettingItems();

  return (
    <AppScreen>
      <SettingsCard items={items} />
    </AppScreen>
  );
}
