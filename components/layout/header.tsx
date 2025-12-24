import { Search01Icon, ShoppingBasket01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { Logo } from '../shared/brand/logo';

export function Header() {
  return (
    <View className="bg-white border-b pt-12 border-zinc-100">
      <View className="flex-row items-center justify-between px-6 py-2">
        <Logo />

        <View className="flex-row items-center gap-x-3">
          <TouchableOpacity
            className="relative bg-zinc-50 p-2.5 rounded-full active:bg-zinc-100"
            activeOpacity={0.7}
          >
            <HugeiconsIcon
              size={22}
              icon={Search01Icon}
              className="text-zinc-700"
            />
          </TouchableOpacity>

          <TouchableOpacity
            className="relative bg-zinc-50 p-2.5 rounded-full active:bg-zinc-100"
            activeOpacity={0.7}
          >
            <HugeiconsIcon
              size={22}
              icon={ShoppingBasket01Icon}
              className="text-zinc-700"
            />

            <View className="absolute -top-1 -right-1 bg-red-500 min-w-[20px] h-5 rounded-full flex items-center justify-center px-1.5 shadow-sm">
              <Text className="text-white text-xs font-bold">4</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
