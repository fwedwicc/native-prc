import { IconSymbol } from '@/components/ui/icon-symbol'
import { Link, Tabs } from 'expo-router'
import { View } from 'react-native'
// import { useAuth } from '@/hooks/useAuth'

export default function TabLayout() {
  // const { isAuthenticated } = useAuth()

  // Redirect to login if not authenticated
  // if (!isAuthenticated) {
  //   return <Redirect href="/(auth)/login" />
  // }

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        // header buttons
        headerRight: () => (
          <View style={{ flexDirection: 'row', gap: 16, marginRight: 16 }}>
            <Link href="/notifications">
              <IconSymbol name="bell.fill" size={24} color='black' />
            </Link>
            <Link href="/settings">
              <IconSymbol name="gearshape.fill" size={24} color='black' />
            </Link>
          </View>
        ),
      }}>
      <Tabs.Screen
        name="community"
        options={{
          title: 'Community',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.3.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.circle.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  )
}