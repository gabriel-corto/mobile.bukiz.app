export interface Costumer {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Profile {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  costumer: Costumer;
  accessToken: string;
}

export interface Notification {
  id: string;
  content: string;
  createdAt: string;
  readAt: string;
  hasRead: boolean;
}
