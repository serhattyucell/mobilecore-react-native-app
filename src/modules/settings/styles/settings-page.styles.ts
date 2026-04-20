import { StyleSheet } from 'react-native';

import { appColors } from '../../../theme/colors';
import { radius } from '../../../theme/radius';
import { shadows } from '../../../theme/shadows';
import { spacing } from '../../../theme/spacing';
import { typography } from '../../../theme/typography';

export const settingsPageStyles = StyleSheet.create({
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
  itemTitle: {
    color: appColors.text,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    marginTop: spacing.sm,
  },
  itemDescription: {
    color: appColors.mutedText,
    fontSize: typography.fontSize.sm,
    marginTop: spacing.xxs,
  },
  input: {
    borderWidth: 1,
    borderColor: appColors.border,
    borderRadius: radius.md,
    marginTop: spacing.md,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    color: appColors.text,
    backgroundColor: appColors.surface,
  },
  errorText: {
    color: '#DC2626',
    marginTop: spacing.xs,
    fontSize: typography.fontSize.sm,
  },
  button: {
    marginTop: spacing.md,
    backgroundColor: appColors.primary,
    borderRadius: radius.md,
    paddingVertical: spacing.sm,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
  },
  savedText: {
    marginTop: spacing.sm,
    fontSize: typography.fontSize.md,
    color: appColors.text,
  },
});
