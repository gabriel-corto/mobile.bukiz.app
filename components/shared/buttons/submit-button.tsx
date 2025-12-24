import { ArrowRight02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

interface SubmitButtonProps extends TouchableOpacityProps {
  label?: string;
  isLoading?: boolean;
}

export function SubmitButton({ ...props }: SubmitButtonProps) {
  return (
    <TouchableOpacity
      {...props}
      disabled={props.isLoading}
      className="p-6 rounded-2xl disabled:opacity-50 bg-emerald-600 flex items-center justify-center flex-row gap-x-3"
    >
      {props.isLoading ? (
        <View className="text-white flex items-center gap-x-2 flex-row">
          <ActivityIndicator color="white" />
          <Text className="text-white font-bold text-center">Aguarde...</Text>
        </View>
      ) : (
        <>
          <HugeiconsIcon
            icon={ArrowRight02Icon}
            size={20}
            className="text-white"
          />
          <Text className="text-white font-bold text-center">
            {props.label}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
}
