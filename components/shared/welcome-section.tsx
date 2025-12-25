import { useProfile } from '@/hooks/useProfile';
import { ShoppingCart01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';

import { Text, TouchableOpacity, View } from 'react-native';
import { Skeleton } from './skeleton';

export function WelcomProfileSection() {
  const { isLoadingProfile, profileResponse } = useProfile();

  return (
    <View className="bg-white pt-6 pb-6 px-6 border-b border-zinc-100">
      {!isLoadingProfile ? (
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-sm text-zinc-500">Bem-vindo de volta</Text>
            <Text className="text-sm font-bold text-zinc-900 mt-1">Olá, {profileResponse?.data.email}</Text>
          </View>
          <TouchableOpacity className="bg-emerald-50 p-3 rounded-full">
            <HugeiconsIcon icon={ShoppingCart01Icon} className="size-6 text-emerald-600" />
          </TouchableOpacity>
        </View>
      ) : (
        <View className="flex flex-row justify-between">
          <View className="flex flex-col gap-y-1.5">
            <Skeleton className="w-24 h-5 rounded-full" />
            <Skeleton className="w-48 h-5 rounded-full" />
          </View>

          <Skeleton className="rounded-xl w-12 h-12" />
        </View>
      )}
    </View>
  );
}
