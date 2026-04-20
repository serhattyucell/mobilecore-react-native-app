import { z } from 'zod';

export const profileFormSchema = z.object({
  fullName: z.string().min(1, 'Ad alanı zorunludur.'),
});

export type ProfileFormValues = z.infer<typeof profileFormSchema>;
