import '@/global.css';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import { queryClient } from '@/lib/react-query';
import { useAuthStore } from '@/stores/auth';

import { SplashScreen } from '@/components/shared/splash-screen';
import { QueryClientProvider } from '@tanstack/react-query';

import Toast from 'react-native-toast-message';

export default function RootLayout() {
  const { accessToken, _hasHydrated } = useAuthStore();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (!_hasHydrated) return;

    const inAuthGroup = segments[0] === '(auth)';
    const inTabsGroup = segments[0] === '(tabs)';

    if (accessToken && !inTabsGroup) {
      router.replace('/(tabs)');
    } else if (!accessToken && !inAuthGroup) {
      router.replace('/(auth)');
    }
  }, [accessToken, _hasHydrated, segments, router]);

  if (!_hasHydrated) {
    return <SplashScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="dark" backgroundColor="#FFFFFF" />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>

      <Toast position="top" />
    </QueryClientProvider>
  );
}
