import { api } from '@/lib/axios';
import { ApiPageDataResponse, ApiResponse } from '@/types/api';
import { Notification } from '@/types/schemas';

export async function getNotifications() {
  const response = await api.get<ApiPageDataResponse<Notification>>('/notifications/me');
  return response.data;
}

export async function markAsRead(notificationId: string) {
  const response = await api.patch<ApiResponse<Notification>>(`/notifications/${notificationId}`);
  return response.data;
}
