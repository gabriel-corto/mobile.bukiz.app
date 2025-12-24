import { router } from 'expo-router';
import {
  Image,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { SubmitButton } from '@/components/shared/buttons/submit-button';
import { InputOTP } from '@/components/shared/inputs/input-otp';

import authOtp from '@/assets/general/auth-otp.png';
import { useAuth } from '@/hooks/useAuth';
import { useErrorToast } from '@/hooks/useErrorToast';
import {
  VerifyOtpFormData,
  verifyOtpFormSchema,
} from '@/schemas/auth-validator';
import { useAuthStore } from '@/stores/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

export default function AuthOtp() {
  const { costumerAuthFlowData } = useAuthStore();
  const { verifyCostumerOtp, isVerifyingCostumerOtp } = useAuth();

  const errorToast = useErrorToast;

  const { handleSubmit, setValue, control } = useForm<VerifyOtpFormData>({
    resolver: zodResolver(verifyOtpFormSchema),
    defaultValues: {
      email: costumerAuthFlowData.email,
    },
  });

  const handleVerifyUserOtp = async (data: VerifyOtpFormData) => {
    Keyboard.dismiss();

    try {
      await verifyCostumerOtp({
        email: costumerAuthFlowData.email,
        code: data.code,
      });
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || 'Erro ao verificar!';

      errorToast({
        title: errorMessage,
        subtitle: 'Por favor, tente novamente.',
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-white flex items-center">
        <View className="w-full py-20">
          <View className="flex items-center justify-center">
            <Image source={authOtp} style={{ width: 190, height: 190 }} />

            <View className="flex flex-col gap-y-3 items-center justify-center max-w-sm">
              <Text className="text-center text-2xl text-zinc-800 font-bold">
                Verifique o seu e-mail
              </Text>

              <Text className="text-center text-zinc-800">
                Enviamos um código de 5 dígitos para
              </Text>

              <Text className="font-bold text-emerald-600">
                {costumerAuthFlowData.email}
              </Text>
            </View>
          </View>

          <View className="w-full px-8 mt-8 flex gap-y-6">
            <View className="flex flex-row gap-x-4 items-center justify-center">
              <Controller
                name="code"
                control={control}
                render={() => {
                  return (
                    <InputOTP
                      onChangeOTP={(value) => setValue('code', value)}
                    />
                  );
                }}
              />
            </View>

            <SubmitButton
              label="Verificar"
              isLoading={isVerifyingCostumerOtp}
              onPress={handleSubmit(handleVerifyUserOtp)}
            />

            <View className="flex items-center justify-center gap-x-1 flex-row">
              <Text className="text-zinc-800">Não Recebeu um código?</Text>

              <TouchableOpacity onPress={() => router.push('/(tabs)')}>
                <Text className="font-semibold text-emerald-600">Reenviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
