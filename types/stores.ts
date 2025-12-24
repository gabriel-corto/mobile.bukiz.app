export interface SetCostumerAuthFlowDataPayload {
  email: string;
}

export interface CostumerAuthFlowData {
  email: string;
}

export interface AuthStore {
  costumerAuthEmail: string;
  accessToken: string | null;
  setAccessToken: (payload: string) => void;
  setCostumerAuthEmail: (payload: string) => void;
  logout(): void;
}
