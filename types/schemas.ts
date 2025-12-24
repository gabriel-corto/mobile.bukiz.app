export interface Costumer {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  costumer: Costumer;
  authToken: string;
}
