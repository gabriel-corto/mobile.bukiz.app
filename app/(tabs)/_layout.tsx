import { router, Tabs } from 'expo-router';
import { ActivityIndicator, Platform, View } from 'react-native';

import { Header } from '@/components/layout/header';
import { useNotifications } from '@/hooks/useNotifications';
import { useAuthStore } from '@/stores/auth';
import { Home01Icon, LibraryIcon, Notification01Icon, Store01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { StatusBar } from 'expo-status-bar';

export default function TabLayout() {
  const { _hasHydrated, accessToken } = useAuthStore();
  const { notificationsResponse } = useNotifications();

  if (!_hasHydrated) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#059669' }}>
        <ActivityIndicator size="large" color="#FFF" />
      </View>
    );
  }

  if (!accessToken) {
    return router.replace('/verify-email');
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#FFFFFF" style="dark" />

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#059669',
          tabBarInactiveTintColor: '#71717a',
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopWidth: 1,
            borderTopColor: '#f4f4f5',
            height: Platform.OS === 'ios' ? 88 : 64,
            paddingBottom: Platform.OS === 'ios' ? 28 : 8,
            paddingTop: 8,
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '600',
            marginTop: 4,
          },
          tabBarIconStyle: {
            marginTop: 4,
          },
          freezeOnBlur: true,
          header: () => <Header />,
          headerShadowVisible: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Início',
            tabBarIcon: ({ color, focused }) => (
              <HugeiconsIcon size={22} icon={Home01Icon} color={color} strokeWidth={focused ? 3 : 2} />
            ),
          }}
        />

        <Tabs.Screen
          name="catalog"
          options={{
            title: 'Catálogo',
            tabBarIcon: ({ color, focused }) => (
              <HugeiconsIcon size={22} icon={Store01Icon} color={color} strokeWidth={focused ? 3 : 2} />
            ),
          }}
        />

        <Tabs.Screen
          name="library"
          options={{
            title: 'Biblioteca',
            tabBarIcon: ({ color, focused }) => (
              <HugeiconsIcon size={22} icon={LibraryIcon} color={color} strokeWidth={focused ? 3 : 2} />
            ),
          }}
        />

        <Tabs.Screen
          name="notifications"
          options={{
            title: 'Notificações',
            tabBarBadge: notificationsResponse?.data.length,
            tabBarIcon: ({ color, focused }) => (
              <HugeiconsIcon size={22} icon={Notification01Icon} color={color} strokeWidth={focused ? 3 : 2} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
