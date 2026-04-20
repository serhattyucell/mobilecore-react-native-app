import { Text, View } from 'react-native';
import { ProfileInfo } from '../interfaces/profile.interfaces';
import { profilePageStyles } from '../styles/profile-page.styles';

interface ProfileCardProps {
  profileInfo: ProfileInfo;
}

export function ProfileCard({ profileInfo }: ProfileCardProps) {
  return (
    <View style={profilePageStyles.card}>
      <Text style={profilePageStyles.heading}>{profileInfo.name}</Text>
      <Text style={profilePageStyles.content}>Rol: {profileInfo.role}</Text>
    </View>
  );
}
