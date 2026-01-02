import { ActivityIndicator, Text, View } from 'react-native';

export function SplashScreen() {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#059669' }}
      className="flex-row gap-x-3"
    >
      <View className="flex flex-row">
        <Text className="text-zinc-800 text-3xl font-bold">B</Text>
        <Text className="text-white text-3xl font-bold">ukiz</Text>
      </View>
      <ActivityIndicator size="small" color="#FFF" />
    </View>
  );
}
