import { notificationService } from '@/services/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useNotifications = () => {
  const queryClient = useQueryClient();

  const {
    data: notificationsResponse,
    isLoading: isLoadingNotifications,
    refetch: refetchNotifications,
  } = useQuery({
    queryKey: ['notifications'],
    queryFn: notificationService.getNotifications,
  });

  const { mutateAsync: markAsRead, isPending: isReadingNotification } = useMutation({
    mutationFn: (notificationId: string) => notificationService.markAsRead(notificationId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
    },
  });

  return {
    notificationsResponse,
    isLoadingNotifications,
    isReadingNotification,
    markAsRead,
    refetchNotifications,
  };
};
