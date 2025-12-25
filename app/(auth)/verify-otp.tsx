import { Image, Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import { SubmitButton } from '@/components/shared/buttons/submit-button';
import { InputOTP } from '@/components/shared/inputs/input-otp';

import authOtp from '@/assets/general/auth-otp.png';
import { useAuth } from '@/hooks/useAuth';
import { useErrorToast } from '@/hooks/useErrorToast';
import { useSuccessToast } from '@/hooks/useSuccessToast';
import { VerifyOtpFormData, verifyOtpFormSchema } from '@/schemas/auth-validator';
import { useAuthStore } from '@/stores/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

export default function AuthOtp() {
  const router = useRouter();

  const { costumerAuthEmail, setAccessToken } = useAuthStore();
  const { verifyCostumerOtp, isVerifyingCostumerOtp, verifyCostumerEmail } = useAuth();

  const [countdown, setCountdown] = useState(20);
  const [canResendOtp, setCanResendOtp] = useState(false);

  const errorToast = useErrorToast;
  const successToast = useSuccessToast;

  const { handleSubmit, setValue, control } = useForm<VerifyOtpFormData>({
    resolver: zodResolver(verifyOtpFormSchema),
    defaultValues: {
      email: costumerAuthEmail,
    },
  });

  const handleVerifyUserOtp = async (data: VerifyOtpFormData) => {
    Keyboard.dismiss();
    const { email, code } = data;

    try {
      const response = await verifyCostumerOtp({
        email,
        code,
      });

      setAccessToken(response.data.accessToken);
      router.replace('/(tabs)');
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Erro ao verificar!';

      errorToast({
        title: errorMessage,
        subtitle: 'Por favor, tente novamente.',
      });
    }
  };

  const handleResendOtp = async () => {
    setCanResendOtp(false);
    setCountdown(45);

    successToast({
      title: 'E-mail reenviado com sucesso!',
      subtitle: 'Código Reenviado para ' + costumerAuthEmail,
    });

    try {
      await verifyCostumerEmail({
        email: costumerAuthEmail,
      });
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Erro ao reenviar código!';

      errorToast({
        title: errorMessage,
        subtitle: 'Por favor, tente novamente.',
      });
    }
  };

  useEffect(() => {
    if (countdown === 0) {
      setCanResendOtp(true);
      return;
    }

    const intervalId = setInterval(() => {
      setCountdown((currentState) => {
        if (currentState <= 1) {
          clearInterval(intervalId);
          setCanResendOtp(true);
          return 0;
        }

        return currentState - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdown]);

  const formatTime = (time: number) => {
    return time < 10 ? `00:0${time}` : `00:${time}`;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-white flex items-center">
        <View className="w-full py-20">
          <View className="flex items-center justify-center">
            <Image source={authOtp} style={{ width: 190, height: 190 }} />

            <View className="flex flex-col gap-y-3 items-center justify-center max-w-sm">
              <Text className="text-center text-2xl text-zinc-800 font-bold">Verifique o seu e-mail</Text>

              <Text className="text-center text-zinc-800">Enviamos um código de 5 dígitos para</Text>

              <Text className="font-bold text-emerald-600">{costumerAuthEmail}</Text>
            </View>
          </View>

          <View className="w-full px-8 mt-8 flex gap-y-6">
            <View className="flex flex-row gap-x-4 items-center justify-center">
              <Controller
                name="code"
                control={control}
                render={() => {
                  return <InputOTP onChangeOTP={(value) => setValue('code', value)} />;
                }}
              />
            </View>

            <SubmitButton
              label="Verificar"
              isLoading={isVerifyingCostumerOtp}
              onPress={handleSubmit(handleVerifyUserOtp)}
            />

            <View className="flex items-center justify-center gap-x-1 flex-row">
              <Text className="text-zinc-800 text-sm">Não Recebeu o código?</Text>

              {canResendOtp ? (
                <TouchableOpacity onPress={handleResendOtp}>
                  <Text className="font-semibold text-emerald-600 text-sm">Reenviar</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity disabled className="disabled:opacity-50">
                  <Text className="font-semibold text-emerald-600 text-sm">Reenviar em {formatTime(countdown)}</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
