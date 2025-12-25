import { useRouter } from 'expo-router';
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';

import { Logo } from '@/components/shared/brand/logo';
import { FormInput } from '@/components/shared/inputs/form-input';

import { SocialAuthButton } from '@/components/shared/buttons/socia-auth-button';
import { SubmitButton } from '@/components/shared/buttons/submit-button';

import { useAuth } from '@/hooks/useAuth';
import { useErrorToast } from '@/hooks/useErrorToast';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

import { verifyCostumerEmailFormSchema, VerifyCostumerFormData } from '@/schemas/auth-validator';
import { useAuthStore } from '@/stores/auth';

export default function SignIn() {
  const router = useRouter();

  const { verifyCostumerEmail, isVerifyingCostumerEmail } = useAuth();
  const { setCostumerAuthEmail } = useAuthStore();

  const errorToast = useErrorToast;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyCostumerFormData>({
    resolver: zodResolver(verifyCostumerEmailFormSchema),
  });

  const handleVerifyUserEmail = async (data: VerifyCostumerFormData) => {
    Keyboard.dismiss();
    const { email } = data;

    try {
      await verifyCostumerEmail({
        email,
      });

      setCostumerAuthEmail(email);

      router.push('/verify-otp');
    } catch (error: any) {
      console.log(error);
      const errorMessage = error.response?.data?.message || 'Erro ao verificar e-mail!';

      errorToast({
        title: errorMessage,
        subtitle: 'Por favor, tente novamente.',
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-white flex items-center">
        <View className="w-full py-36">
          <View className="flex flex-col gap-y-3 items-center justify-center">
            <Logo />
            <Text className="text-2xl text-zinc-800 font-medium">Acessar Plataforma</Text>
          </View>

          <View className="w-full px-8 mt-8 flex gap-y-6">
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <FormInput
                  keyboardType="email-address"
                  placeholder="Insira o seu e-mail"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.email?.message}
                />
              )}
              name="email"
            />

            <SubmitButton
              label="Acessar"
              isLoading={isVerifyingCostumerEmail}
              onPress={handleSubmit(handleVerifyUserEmail)}
            />

            <View className="flex gap-y-6">
              <SocialAuthButton label="Continuar com google" provider="google" />

              <SocialAuthButton label="Continuar com a apple" provider="apple" />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
