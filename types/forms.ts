export interface VerifyCostumerEmailBody {
  email: string;
}

export interface VerifyOtpBody extends VerifyCostumerEmailBody {
  code: string;
}
