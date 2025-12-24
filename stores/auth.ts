import { AuthStore } from '@/types/stores';
import * as SecureStore from 'expo-secure-store';
import { create } from 'zustand';
import { createJSONStorage, persist, StateStorage } from 'zustand/middleware';

const secureStorage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    await new Promise((r) => setTimeout(r, 5000));
    return await SecureStore.getItemAsync(name);
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await new Promise((r) => setTimeout(r, 5000));
    await SecureStore.setItemAsync(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await new Promise((r) => setTimeout(r, 5000));
    await SecureStore.deleteItemAsync(name);
  },
};

interface AuthStoreState extends AuthStore {
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

export const useAuthStore = create<AuthStoreState>()(
  persist(
    (set) => ({
      costumerAuthEmail: '',
      accessToken: '',

      _hasHydrated: false,

      setAccessToken(payload) {
        set({
          accessToken: payload,
        });
      },

      setCostumerAuthEmail(payload) {
        set({
          costumerAuthEmail: payload,
        });
      },

      logout() {
        set({
          costumerAuthEmail: '',
          accessToken: '',
        });
      },

      setHasHydrated(state) {
        set({
          _hasHydrated: state,
        });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => secureStorage),

      onRehydrateStorage: () => {
        return (state, error) => {
          if (error) {
            console.error('Erro ao carregar do disco', error);
          }
          state?.setHasHydrated(true);
        };
      },
    },
  ),
);
