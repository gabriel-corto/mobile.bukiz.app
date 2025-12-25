import { Image } from 'expo-image';
import { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { FilterButton } from '@/components/shared/buttons/filter-button';
import { WelcomProfileSection } from '@/components/shared/welcome-section';
import { books } from '@/mocks/books.mock';
import { categories } from '@/mocks/categories.mock';
import { ArrowUpRight01Icon, HeartAddIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';

export default function Home() {
  const [filter, setFilter] = useState('Todos');

  return (
    <View className="flex-1 bg-white">
      <WelcomProfileSection />

      <View className="bg-white py-4 border-b border-zinc-100">
        <FlatList
          data={categories}
          renderItem={({ item }) => <FilterButton item={item} filter={filter} onPress={() => setFilter(item)} />}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24 }}
        />
      </View>

      <View className="px-6 pt-6 pb-4 bg-zinc-50">
        <Text className="text-2xl font-bold text-zinc-900">Destaque da semana</Text>
        <Text className="text-sm text-zinc-500 mt-1">Os livros mais populares desta semana</Text>
      </View>

      <FlatList
        data={books}
        renderItem={({ item }) => (
          <View className="bg-white mx-6 mb-4 rounded-2xl shadow-sm overflow-hidden">
            <TouchableOpacity activeOpacity={0.95}>
              <View className="flex-row gap-4 p-4">
                <View className="relative">
                  <Image
                    source={{ uri: item.cover }}
                    className="w-24 h-32 rounded-xl"
                    style={{ width: 96, height: 128 }}
                    contentFit="cover"
                  />
                  <View className="absolute top-2 right-2 bg-emerald-500 px-2 py-1 rounded-full">
                    <Text className="text-white text-xs font-bold">{item.rating}</Text>
                  </View>
                </View>

                <View className="flex-1 justify-between py-1">
                  <View>
                    <Text className="text-zinc-900 text-lg font-bold leading-tight" numberOfLines={2}>
                      {item.title}
                    </Text>
                    <Text className="text-zinc-500 text-sm mt-1">{item.author}</Text>
                  </View>

                  <View>
                    <Text className="text-emerald-600 text-2xl font-bold">R$ {item.price.toFixed(2)}</Text>
                  </View>
                </View>

                <TouchableOpacity className="absolute top-4 right-4">
                  <View className="bg-zinc-100 p-2 rounded-full">
                    <HugeiconsIcon icon={HeartAddIcon} className="size-5 text-zinc-600" />
                  </View>
                </TouchableOpacity>
              </View>

              <View className="flex-row gap-3 px-4 pb-4">
                <TouchableOpacity className="flex-1 bg-emerald-600 rounded-xl py-3.5 flex-row items-center justify-center gap-2">
                  <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-5 text-white" />
                  <Text className="text-white text-base font-bold">Obter agora</Text>
                </TouchableOpacity>

                <TouchableOpacity className="bg-zinc-100 px-5 rounded-xl py-3.5 flex-row items-center justify-center gap-2">
                  <Text className="text-zinc-700 text-base font-semibold">Detalhes</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 8,
          paddingBottom: 100,
        }}
      />
    </View>
  );
}
