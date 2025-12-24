import { create } from 'zustand';

type SetCostumerAuthFlowDataPayload = {
  email: string;
};

type AuthStore = {
  costumerAuthFlowData: {
    email: string;
  };
  setCostumerAuthFlowData: (payload: SetCostumerAuthFlowDataPayload) => void;
};

export const useAuthStore = create<AuthStore>()((set) => ({
  costumerAuthFlowData: {
    email: '',
  },
  setCostumerAuthFlowData: (payload: SetCostumerAuthFlowDataPayload) =>
    set({
      costumerAuthFlowData: {
        email: payload.email,
      },
    }),
}));
