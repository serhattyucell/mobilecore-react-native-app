import { Theme } from '@react-navigation/native';

import { appColors } from './colors';

export const appNavigationTheme: Theme = {
  dark: false,
  colors: {
    primary: appColors.primary,
    background: appColors.background,
    card: appColors.surface,
    text: appColors.text,
    border: appColors.border,
    notification: appColors.primary,
  },
  fonts: {
    regular: {
      fontFamily: 'System',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'System',
      fontWeight: '700',
    },
    heavy: {
      fontFamily: 'System',
      fontWeight: '800',
    },
  },
};
