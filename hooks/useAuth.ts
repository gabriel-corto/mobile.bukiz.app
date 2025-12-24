import { authService } from '@/services/api';
import { useMutation } from '@tanstack/react-query';

export const useAuth = () => {
  const {
    mutateAsync: verifyCostumerEmail,
    isPending: isVerifyingCostumerEmail,
  } = useMutation({
    mutationFn: authService.verifyCostumerEmail,
  });

  const { mutateAsync: verifyCostumerOtp, isPending: isVerifyingCostumerOtp } =
    useMutation({
      mutationFn: authService.verifyCostumerOtp,
    });

  return {
    verifyCostumerEmail,
    isVerifyingCostumerEmail,
    isVerifyingCostumerOtp,
    verifyCostumerOtp,
  };
};
