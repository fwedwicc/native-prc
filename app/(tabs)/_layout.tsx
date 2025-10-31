import { IconSymbol } from '@/components/ui/icon-symbol'
import { Link, Tabs, usePathname } from 'expo-router'
import { Pressable, View } from 'react-native'

export default function TabLayout() {
  const pathname = usePathname() 

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#171717',
        },
        headerTintColor: '#f5f5f5', 
        headerTitleStyle: {
          color: '#f5f5f5',          
          fontWeight: '600',
          fontSize: 20,
        },
        headerRight: () => (
          <View className='flex flex-row gap-3 mr-4'>
            <Link href="/notifications" asChild>
              <Pressable className={`size-11 flex items-center justify-center rounded-[10px]  ${pathname === '/notifications' ? 'bg-neutral-100' : 'bg-neutral-800'}`}>
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
          bottom: 20,
          // idk why this works but temporary only huhu
          transform: [{ translateX: '43%' }], 
          width: 195,                    
          paddingHorizontal: 13,        
          elevation: 8,
          backgroundColor: '#171717',
          borderRadius: 18,
          height: 'auto',
          paddingBottom: 10,
          paddingTop: 10,
          borderTopWidth: 0,
          shadowColor: '#0a0a0a',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.15,
          shadowRadius: 8,
        },
        tabBarItemStyle: {
          flexDirection: 'row',
          gap: 3,                           
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#737373',
        tabBarShowLabel: false,
      }}>
      {/* BOTTOM NAV: Community, Home, and Profile */}
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
      {/* HEADER: Notification and Settings Screen */}
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          href: null,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          href: null,
        }}
      />
    </Tabs>
  )
}