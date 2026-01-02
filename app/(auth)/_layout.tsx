import '@/global.css';
import { queryClient } from '@/lib/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Toast from 'react-native-toast-message';

export default function AuthLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="dark" backgroundColor="#FFFFFF" />

        <Stack
          screenOptions={{
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            animation: 'none',
            headerShown: false,
            contentStyle: { backgroundColor: '#FFFFFF' },
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="verify-otp" />
          <Stack.Screen name="verify-email" />
        </Stack>

        <Toast position="top" />
      </QueryClientProvider>
    </View>
  );
}
