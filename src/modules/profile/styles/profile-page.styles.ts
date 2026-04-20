import { StyleSheet } from 'react-native';
import { appColors } from '../../../theme/colors';

export const profilePageStyles = StyleSheet.create({
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
  content: {
    color: appColors.mutedText,
    fontSize: 14,
    marginTop: 8,
  },
});
