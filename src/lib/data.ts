import { ProfileData } from '@/types/profile';
import profileData from '../../data/profile.json';

export function getProfileData(): ProfileData {
  return profileData as ProfileData;
}