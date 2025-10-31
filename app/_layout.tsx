import { Stack } from 'expo-router';
import "./global.css";

export default function RootLayout() {
  return (
    <Stack>
      {/* AUTH: Login and Signup */}
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      {/* PAGES: Community, Home, and Profile | Settings and Notifications */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* LOGS */}
      <Stack.Screen 
        name="logs" 
        options={{ 
          title: 'Logs',
          presentation: 'card' 
        }} 
      />
    </Stack>
  )
}