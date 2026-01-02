import { useAuthStore } from '@/stores/auth';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import avatar from '@/assets/general/avatar.png';
import { Logo } from '../shared/brand/logo';

import { Logout02Icon, Search01Icon, ShoppingBasket01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';

export function Header() {
  const { logout } = useAuthStore();

  return (
    <View className="bg-white border-b pt-12 border-zinc-100">
      <View className="flex-row items-center justify-between px-6 py-2">
        <Logo />

        <View className="flex-row items-center gap-x-3">
          <TouchableOpacity className="relative bg-zinc-50 p-2.5 rounded-full active:bg-zinc-100" activeOpacity={0.7}>
            <HugeiconsIcon size={22} icon={Search01Icon} className="text-zinc-600" />
          </TouchableOpacity>

          <TouchableOpacity className="relative bg-zinc-50 p-2.5 rounded-full active:bg-zinc-100" activeOpacity={0.7}>
            <HugeiconsIcon size={22} icon={ShoppingBasket01Icon} className="text-zinc-600" />

            <View className="absolute -top-1 -right-1 bg-red-500 min-w-[20px] h-5 rounded-full flex items-center justify-center px-1.5 shadow-sm">
              <Text className="text-white text-xs font-bold">4</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => logout()}
            className="relative bg-zinc-50 p-2.5 rounded-full active:bg-zinc-100"
            activeOpacity={0.7}
          >
            <HugeiconsIcon size={22} icon={Logout02Icon} className="text-red-500" />
          </TouchableOpacity>

          <TouchableOpacity className="w-10 h-10 rounded-full items-center bg-zinc-200 justify-center">
            <Image source={avatar} style={{ width: 30, height: 30, borderRadius: 100 }} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
