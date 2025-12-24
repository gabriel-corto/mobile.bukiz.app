import '@/global.css';

import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { queryClient } from '@/lib/react-query';
import Toast from 'react-native-toast-message';

import { useAuthStore } from '@/stores/auth';
import { QueryClientProvider } from '@tanstack/react-query';

export default function AuthLayout() {
  const { accessToken, _hasHydrated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!_hasHydrated) return;
    if (accessToken) {
      router.replace('/(tabs)');
    }
  }, [accessToken, _hasHydrated, router]);

  if (!_hasHydrated) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <ActivityIndicator size="large" color="#059669" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="dark" backgroundColor="#FFFFFF" />

        <Stack
          screenOptions={{
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            animation: 'none',
            headerShown: false,
            contentStyle: { backgroundColor: '#FFFFFF' },
          }}
        >
          <Stack.Screen name="index" options={{}} />
          <Stack.Screen name="verify-otp" options={{}} />
          <Stack.Screen name="verify-email" options={{}} />
        </Stack>

        <Toast position="top" />
      </QueryClientProvider>
    </View>
  );
}
