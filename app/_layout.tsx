import '@/global.css';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { queryClient } from '@/lib/react-query';
import Toast from 'react-native-toast-message';

import { QueryClientProvider } from '@tanstack/react-query';

export default function Layout() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="dark" backgroundColor="#DC143C" />

        <Stack
          screenOptions={{
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" options={{}} />
          <Stack.Screen name="verify-otp" options={{}} />
          <Stack.Screen name="verify-email" options={{}} />
        </Stack>

        <Toast position="top" />
      </QueryClientProvider>
    </>
  );
}
