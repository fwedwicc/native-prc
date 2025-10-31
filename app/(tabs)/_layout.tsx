import { IconSymbol } from '@/components/ui/icon-symbol'
import { Link, Tabs, usePathname } from 'expo-router'
import { Pressable, View } from 'react-native'

export default function TabLayout() {
  const pathname = usePathname() 
  
  // for active routes
  // const isNotificationsActive = pathname === '/notifications'
  // const isSettingsActive = pathname === '/settings'

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#171717',  // bg-neutral-900
        },
        headerTintColor: '#f5f5f5',   // text-neutral-100 (for back button if any)
        headerTitleStyle: {
          color: '#f5f5f5',            // text-neutral-100
          fontWeight: '600',
          fontSize: 20,
        },
        // contentStyle: {
        //   backgroundColor: '#171717',  // bg-neutral-900 (same as header)
        // },
        headerRight: () => (
          // tailwind is now working wooooo
          <View className='flex flex-row gap-3 mr-4'>
            <Link href="/notifications" asChild>
              <Pressable className={`size-11 flex items-center justify-center rounded-[10px] ${pathname === '/notifications' ? 'bg-neutral-100' : 'bg-neutral-800'}`}>
                <IconSymbol name="bell.fill" size={18} color={pathname === '/notifications' ? '#171717' : 'white'} />
              </Pressable>
            </Link>
            <Link href="/settings" asChild>
              <Pressable className={`size-11 flex items-center justify-center rounded-[10px] ${pathname === '/settings' ? 'bg-neutral-100' : 'bg-neutral-800'}`}>
                <IconSymbol name="gearshape.fill" size={18} color={pathname === '/settings' ? '#171717' : 'white'} />
              </Pressable>
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
        tabBarActiveTintColor: '#ffffff',      // Active icon color (indigo)
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