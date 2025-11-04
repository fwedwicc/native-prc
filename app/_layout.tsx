import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import "./global.css"

// Prevent the splash screen from auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

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