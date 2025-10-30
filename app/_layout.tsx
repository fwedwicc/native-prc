import { Stack } from 'expo-router'
// import { useAuth } from '@/hooks/useAuth'

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
          presentation: 'card' 
        }} 
      />
      <Stack.Screen 
        name="settings" 
        options={{ 
          title: 'Settings',
          presentation: 'card' 
        }} 
      />
    </Stack>
  )
}