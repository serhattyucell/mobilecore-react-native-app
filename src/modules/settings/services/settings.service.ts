import { i18n } from '../../../common/i18n/i18n.config';
import { SettingItem } from '../interfaces/settings.interfaces';

export function getSettingItems(): SettingItem[] {
  return [
    {
      title: i18n.t('settings.themeTitle'),
      description: i18n.t('settings.themeDescription'),
    },
    {
      title: i18n.t('settings.architectureTitle'),
      description: i18n.t('settings.architectureDescription'),
    },
  ];
}
