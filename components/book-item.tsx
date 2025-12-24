import { TouchableOpacity } from 'react-native';

interface BookItemProps {
  item: {
    title: string;
    price: number;
    cover: string;
    author: {
      name: string;
      email: string;
    };
    details?: {
      description: string | null;
    };
    published_at: string;
  };
}

export function BookItem() {
  return (
    <TouchableOpacity>
      <View className="flex flex-row gap-x-4 items-start justify-between py-6 border-b border-zinc-100">
        <Image
          source={bookImage}
          className="w-48 h-64"
          style={{ width: 80, height: 100, borderRadius: 4 }}
        />

        <View className="flex-1 flex flex-col  justify-between">
          <View>
            <Text className="text-zinc-800 text-lg font-medium">
              {item.title}
            </Text>
            <Text className="text-zinc-600 text-sm">{item.author}</Text>
            <Text className="text-emerald-600 text-lg font-semibold">
              R$ {item.price.toFixed(2)}
            </Text>
          </View>

          <View className="mt-1 flex flex-row gap-x-4">
            <TouchableOpacity className="bg-emerald-600 px-2 rounded-full gap-x-2 w-28 flex-row flex items-center justify-center py-2">
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                className="size-5 text-white"
              />
              <Text className="text-white text-sm font-semibold">Obter</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-zinc-200 px-2 rounded-full gap-x-2 w-36 flex-row flex items-center justify-center py-2">
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                className="size-5 text-zinc-600"
              />
              <Text className="text-zinc-600 text-sm font-semibold">
                Detalhes
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
