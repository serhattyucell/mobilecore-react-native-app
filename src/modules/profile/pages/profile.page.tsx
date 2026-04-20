import { AppScreen } from '../../../common/components/app.screen';
import { ProfileCard } from '../components/profile-card.component';
import { getProfileInfo } from '../services/profile.service';

export function ProfilePage() {
  const profileInfo = getProfileInfo();

  return (
    <AppScreen>
      <ProfileCard profileInfo={profileInfo} />
    </AppScreen>
  );
}
