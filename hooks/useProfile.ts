import { profileService } from '@/services/api';
import { useQuery } from '@tanstack/react-query';

export const useProfile = () => {
  const { data: profileResponse, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: profileService.getProfile,
  });

  return {
    profileResponse,
    isLoadingProfile,
  };
};
