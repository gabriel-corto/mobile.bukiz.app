import { Text, TextInput, TextInputProps, View } from 'react-native';

export interface FormInputProps extends TextInputProps {
  label?: string;
  errorMessage?: string;
}

export function FormInput({ ...props }: FormInputProps) {
  return (
    <View className="flex flex-col gap-y-2">
      <TextInput
        {...props}
        autoCorrect={false}
        cursorColor="#059669"
        textAlignVertical="center"
        style={{ includeFontPadding: false, fontSize: 16 }}
        className="h-[60px] rounded-2xl focus:border-emerald-600 focus:border-2 border-2 border-zinc-200 px-6 bg-zinc-100 placeholder:text-zinc-500"
      />
      {props.errorMessage && <Text className="text-red-500 pl-2">{props.errorMessage}</Text>}
    </View>
  );
}
