import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { commonTrLocale } from '../locales/tr/common.locale';

const deviceLocale = getLocales()[0]?.languageCode;

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v4',
    lng: deviceLocale === 'tr' ? 'tr' : 'tr',
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      tr: {
        translation: commonTrLocale,
      },
    },
  });
}

export { i18n };
