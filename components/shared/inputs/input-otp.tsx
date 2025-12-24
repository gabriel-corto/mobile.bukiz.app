import React, { useRef, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

type Props = {
  length?: number;
  onChangeOTP?: (value: string) => void;
};

export function InputOTP({ length = 5, onChangeOTP }: Props) {
  const [value, setValue] = useState('');
  const inputRef = useRef<TextInput>(null);

  const handleChange = (text: string) => {
    const v = text.slice(0, length);
    setValue(v);
    onChangeOTP?.(v);
  };

  return (
    <Pressable
      onPress={() => inputRef.current?.focus()}
      className="flex flex-row items-center gap-2"
    >
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={handleChange}
        keyboardType="number-pad"
        maxLength={length}
        placeholder="*"
        autoFocus={true}
        style={{ opacity: 0, position: 'absolute' }}
      />

      <View className="flex flex-row items-center gap-x-5">
        {Array.from({ length }).map((_, i) => {
          const char = value[i] || '';
          const isActive = i === value.length;

          return (
            <View
              key={i}
              className={[
                'h-16 w-16 rounded-xl border-4  flex items-center justify-center',
                isActive ? 'border-emerald-600' : 'border-zinc-200',
              ].join(' ')}
            >
              {char ? (
                <Text className="text-[2rem] font-semibold text-zinc-600">
                  {char}
                </Text>
              ) : (
                <Text className="text-sm font-bold text-zinc-400">*</Text>
              )}
            </View>
          );
        })}
      </View>
    </Pressable>
  );
}
