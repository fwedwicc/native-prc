import { Stack } from 'expo-router';
import "./global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen 
        name="logs" 
        options={{ 
          title: 'Logs',
          presentation: 'card' 
        }} 
      />
      <Stack.Screen 
        name="notifications" 
        options={{ 
          title: 'Notifications',
          presentation: 'card',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#171717',
          },
          headerTintColor: '#f5f5f5',
          headerTitleStyle: {
            color: '#f5f5f5',
            fontWeight: '600',
          },
        }} 
      />
      <Stack.Screen 
        name="settings" 
        options={{ 
          title: 'Settings',
          presentation: 'card',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#171717',
          },
          headerTintColor: '#f5f5f5',
          headerTitleStyle: {
            color: '#f5f5f5',
            fontWeight: '600',
          },
        }} 
      />
    </Stack>
  )
}