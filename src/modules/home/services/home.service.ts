import { i18n } from '../../../common/i18n/i18n.config';
import { HomeSummary } from '../interfaces/home.interfaces';

export function getHomeSummary(): HomeSummary {
  return {
    title: i18n.t('home.title'),
    subtitle: i18n.t('home.subtitle'),
  };
}
