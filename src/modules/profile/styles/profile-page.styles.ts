import { StyleSheet } from 'react-native';

import { appColors } from '../../../theme/colors';
import { radius } from '../../../theme/radius';
import { shadows } from '../../../theme/shadows';
import { spacing } from '../../../theme/spacing';
import { typography } from '../../../theme/typography';

export const profilePageStyles = StyleSheet.create({
  card: {
    backgroundColor: appColors.card,
    borderColor: appColors.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: spacing.md,
    ...shadows.card,
  },
  heading: {
    color: appColors.text,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
  },
  content: {
    color: appColors.mutedText,
    fontSize: typography.fontSize.md,
    marginTop: spacing.xs,
  },
});
