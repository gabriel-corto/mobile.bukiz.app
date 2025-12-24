import { router } from 'expo-router';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

export function Logo({ size = 'medium' }: LogoProps) {
  const sizes = {
    small: 'text-[1rem]',
    medium: 'text-[2rem]',
    large: 'text-[3rem]',
  };

  return (
    <TouchableWithoutFeedback onPress={() => router.push('/')}>
      <View className="flex items-center flex-row">
        <Text className={`${sizes[size]} font-black text-emerald-600`}>B</Text>
        <Text className={`${sizes[size]} font-extrabold`}>ukiz</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
