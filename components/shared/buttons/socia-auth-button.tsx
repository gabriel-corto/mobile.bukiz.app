import { Image } from 'expo-image';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import appleIcon from '@/assets/social/apple-icon.png';
import googleIcon from '@/assets/social/google-icon.png';

interface SocialAuthButtonProps extends TouchableOpacityProps {
  label?: string;
  provider: 'apple' | 'google';
}

export function SocialAuthButton({ ...props }: SocialAuthButtonProps) {
  const providers = {
    apple: appleIcon,
    google: googleIcon,
  };

  return (
    <TouchableOpacity
      {...props}
      className="p-6 rounded-2xl bg-zinc-100 flex items-center justify-center flex-row gap-x-2 "
    >
      <Image
        source={providers[props.provider]}
        style={{ width: 20, height: 20 }}
      />
      <Text className="text-zinc-600">{props.label}</Text>
    </TouchableOpacity>
  );
}
