import { IconSymbol } from '@/components/ui/icon-symbol'
import { Link, Tabs } from 'expo-router'
import { View } from 'react-native'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerRight: () => (
          // tailwind not working huhuuuuu
          <View className='flex flex-row gap-4 mr-4'>
            <Link href="/notifications">
              <IconSymbol name="bell.fill" size={24} color='black' />
            </Link>
            <Link href="/settings">
              <IconSymbol name="gearshape.fill" size={24} color='black' />
            </Link>
          </View>
        ),
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,                    // Float from bottom
          left: 25,
          right: 25,
          elevation: 8,                  // Android shadow
          backgroundColor: '#000000',
          borderRadius: 25,              // Rounded corners
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          borderTopWidth: 0,             // Remove default top border
          // iOS shadow
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.15,
          shadowRadius: 8,
        },
        tabBarActiveTintColor: '#6366f1',      // Active icon color (indigo)
        tabBarInactiveTintColor: '#9ca3af',    // Inactive icon color (gray)
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 4,
        },
      }}>
      <Tabs.Screen
        name="community"
        options={{
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.3.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.circle.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  )
}