import { Stack } from 'expo-router'
// import { useAuth } from '@/hooks/useAuth'

export default function AuthLayout() {
  // const { isAuthenticated } = useAuth()

  // Redirect to tabs if already authenticated
  // if (isAuthenticated) {
  //   return <Redirect href="/(tabs)" />
  // }

  return (
    <Stack>
      <Stack.Screen 
        name="login" 
        options={{ 
          title: 'Login',
          headerShown: true
        }} 
      />
      <Stack.Screen 
        name="signup" 
        options={{ 
          title: 'Sign Up',
          headerShown: true
        }} 
      />
    </Stack>
  )
}