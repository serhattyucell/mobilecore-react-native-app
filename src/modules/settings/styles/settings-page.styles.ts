import { StyleSheet } from 'react-native';
import { appColors } from '../../../theme/colors';

export const settingsPageStyles = StyleSheet.create({
  card: {
    backgroundColor: appColors.card,
    borderColor: appColors.border,
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
  },
  heading: {
    color: appColors.text,
    fontSize: 22,
    fontWeight: '700',
  },
  itemTitle: {
    color: appColors.text,
    fontSize: 15,
    fontWeight: '600',
    marginTop: 12,
  },
  itemDescription: {
    color: appColors.mutedText,
    fontSize: 13,
    marginTop: 4,
  },
});
