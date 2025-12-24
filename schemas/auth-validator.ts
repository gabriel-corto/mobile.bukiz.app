import * as zod from 'zod';

export const verifyCostumerEmailFormSchema = zod.object({
  email: zod
    .string()
    .min(1, 'E-mail é obrigatório')
    .email({ message: 'E-mail inválido' }),
});

export type VerifyCostumerFormData = zod.infer<
  typeof verifyCostumerEmailFormSchema
>;

export const verifyOtpFormSchema = zod.object({
  email: zod
    .string()
    .min(1, 'E-mail é obrigatório')
    .email({ message: 'E-mail inválido' }),
  code: zod.string().min(5, 'Adcione um código válido!'),
});

export type VerifyOtpFormData = zod.infer<typeof verifyOtpFormSchema>;
