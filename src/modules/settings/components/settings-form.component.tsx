import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useAppSettingsStore } from '../../../common/stores/app-settings.store';
import {
  ProfileFormValues,
  profileFormSchema,
} from '../../../common/validators/profile-form.validator';
import { settingsPageStyles } from '../styles/settings-page.styles';

export function SettingsForm() {
  const { t } = useTranslation();
  const [savedName, setSavedName] = useState('');
  const setFullName = useAppSettingsStore((state) => state.setFullName);
  const { control, handleSubmit, formState } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: { fullName: '' },
    mode: 'onSubmit',
  });

  function onSubmit(values: ProfileFormValues): void {
    const nextName = values.fullName.trim();
    setSavedName(nextName);
    setFullName(nextName);
  }

  return (
    <View style={settingsPageStyles.card}>
      <Text style={settingsPageStyles.heading}>{t('settings.formTitle')}</Text>
      <Controller
        control={control}
        name="fullName"
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            style={settingsPageStyles.input}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            placeholder={t('settings.formNamePlaceholder')}
            placeholderTextColor="#94A3B8"
          />
        )}
      />
      {formState.errors.fullName?.message ? (
        <Text style={settingsPageStyles.errorText}>{formState.errors.fullName.message}</Text>
      ) : null}
      <TouchableOpacity style={settingsPageStyles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={settingsPageStyles.buttonText}>{t('settings.formSubmitLabel')}</Text>
      </TouchableOpacity>
      {savedName ? <Text style={settingsPageStyles.savedText}>{savedName}</Text> : null}
    </View>
  );
}
