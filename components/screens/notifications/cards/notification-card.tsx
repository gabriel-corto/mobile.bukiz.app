import { Text, TouchableOpacity, View } from 'react-native';

import { useDateFormatter } from '@/hooks/useFormatter';
import { useNotifications } from '@/hooks/useNotifications';
import { Notification } from '@/types/schemas';

interface Props {
  notification: Notification;
}

export function NotificationCard({ notification }: Props) {
  const { formatDateToNow } = useDateFormatter();
  const { isReadingNotification, markAsRead } = useNotifications();

  const handleReadNotification = async (notificationId: string) => {
    try {
      const response = await markAsRead(notificationId);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  return (
    <View className="overflow-hidden bg-white">
      <TouchableOpacity
        disabled={isReadingNotification}
        onPress={() => handleReadNotification(notification.id)}
        className={`p-5 gap-x-4 flex border-b border-zinc-100 flex-row notifications-start ${
          notification.hasRead ? 'white' : 'bg-blue-50/80'
        }`}
        activeOpacity={0.8}
      >
        <View className="relative">
          <View
            className={`w-12 h-12 ${
              notification.hasRead ? 'bg-zinc-100' : 'bg-zinc-200'
            } flex items-center justify-center rounded-full`}
          >
            <Text className="text-zinc-400 font-bold text-lg">B</Text>
          </View>
          {!notification.hasRead && (
            <View className="w-3.5 h-3.5 rounded-full bg-blue-500 absolute -top-0.5 -right-0.5 border-2 border-white shadow-sm" />
          )}
        </View>

        <View className="flex-1 gap-y-1.5">
          <Text
            className={`text-base leading-5 ${
              !notification.hasRead ? 'text-zinc-900 font-semibold' : 'text-zinc-700 font-medium'
            }`}
          >
            {notification.content}
          </Text>
          <View className="flex flex-row items-center gap-x-2">
            <View className="w-1 h-1 rounded-full bg-zinc-400" />
            <Text className="text-xs text-zinc-500 font-medium">{formatDateToNow(notification.createdAt)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
