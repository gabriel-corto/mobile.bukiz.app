import { api } from '@/lib/axios';

import { ApiResponse } from '@/types/api';
import { VerifyCostumerEmailBody, VerifyOtpBody } from '@/types/forms';
import { AuthResponse, Costumer } from '@/types/schemas';

export async function verifyCostumerEmail({ email }: VerifyCostumerEmailBody) {
  const response = await api.post<ApiResponse<Costumer>>('/auth/verify-email', {
    email,
  });

  return response.data;
}

export async function verifyCostumerOtp({ code, email }: VerifyOtpBody) {
  const response = await api.post<ApiResponse<AuthResponse>>(
    'auth/verify-otp',
    {
      code,
      email,
    },
  );

  return response.data;
}
