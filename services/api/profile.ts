import { api } from '@/lib/axios';
import { ApiResponse } from '@/types/api';
import { Profile } from '@/types/schemas';

export async function getProfile() {
  const response = await api.get<ApiResponse<Profile>>('/profile/me');
  return response.data;
}
