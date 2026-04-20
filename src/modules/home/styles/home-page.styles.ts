import { StyleSheet } from 'react-native';
import { appColors } from '../../../theme/colors';

export const homePageStyles = StyleSheet.create({
  card: {
    backgroundColor: appColors.card,
    borderColor: appColors.border,
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
  },
  title: {
    color: appColors.text,
    fontSize: 22,
    fontWeight: '700',
  },
  subtitle: {
    color: appColors.mutedText,
    fontSize: 14,
    marginTop: 8,
  },
});
