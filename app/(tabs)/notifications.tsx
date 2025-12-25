import { NotificationCard } from '@/components/screens/notifications/cards/notification-card';
import { Skeleton } from '@/components/shared/skeleton';
import { useNotifications } from '@/hooks/useNotifications';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

export default function Notifications() {
  const { notificationsResponse, isLoadingNotifications, refetchNotifications } = useNotifications();

  return (
    <View className="flex-1 bg-white">
      <View className="px-6 pt-8 pb-6 bg-white border-b border-zinc-100">
        <View className="flex items-center justify-between flex-row">
          <View>
            <Text className="text-2xl font-bold text-zinc-900">Notificações</Text>
            <Text className="text-sm text-zinc-500 mt-1">
              <Text className="font-medium text-zinc-800">
                {notificationsResponse?.data.filter((n) => !n.hasRead).length}
              </Text>{' '}
              não lidas
            </Text>
          </View>

          <TouchableOpacity
            className="flex flex-row items-center gap-x-2 border border-emerald-400 bg-emerald-50 px-4 py-2 rounded-full "
            activeOpacity={0.7}
          >
            <Text className="text-emerald-600 font-semibold text-xs">Marcar todas</Text>
          </TouchableOpacity>
        </View>
      </View>

      {!isLoadingNotifications ? (
        <>
          <View className="flex-1">
            <FlatList
              data={notificationsResponse?.data}
              renderItem={({ item }) => <NotificationCard notification={item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingTop: 16,
                paddingBottom: 100,
              }}
              onRefresh={() => refetchNotifications()}
              refreshing={false}
            />
          </View>
        </>
      ) : (
        <View className="flex items-center gap-y-4 mt-6 px-6 justify-center">
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <View key={index} className="w-full flex-row border-b border-zinc-100 pb-4 gap-x-4 items-center">
                <Skeleton className="w-20 rounded-full h-20" />

                <View className="flex gap-y-2 flex-1">
                  <Skeleton className="w-full h-6 rounded-full" />
                  <Skeleton className="w-48 h-6 rounded-full" />
                </View>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
}
