import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { ProfileInfo } from '../interfaces/profile.interfaces';
import { profilePageStyles } from '../styles/profile-page.styles';

interface ProfileCardProps {
  profileInfo: ProfileInfo;
}

export function ProfileCard({ profileInfo }: ProfileCardProps) {
  const { t } = useTranslation();

  return (
    <View style={profilePageStyles.card}>
      <Text style={profilePageStyles.heading}>{profileInfo.name}</Text>
      <Text style={profilePageStyles.content}>
        {t('profile.roleLabel')}: {profileInfo.role}
      </Text>
    </View>
  );
}
