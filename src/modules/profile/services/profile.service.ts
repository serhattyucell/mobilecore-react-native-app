import { mapHttpError } from '../../../common/helpers/map-http-error.helper';
import { i18n } from '../../../common/i18n/i18n.config';
import { httpClient } from '../../../common/services/http/http-client.service';
import { Result } from '../../../common/types/result.type';
import { ProfileInfo } from '../interfaces/profile.interfaces';

export function getProfileInfo(): ProfileInfo {
  return {
    name: i18n.t('profile.guestName'),
    role: i18n.t('profile.guestRole'),
  };
}

export async function getProfileInfoFromApi(): Promise<Result<ProfileInfo>> {
  try {
    const response = await httpClient.get<ProfileInfo>('/profile');
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: mapHttpError(error) };
  }
}
