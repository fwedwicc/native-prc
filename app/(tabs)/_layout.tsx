import { OcticonsIcon } from '@/components/ui/octoicons';
import { Link, Tabs, usePathname } from 'expo-router';
import { Pressable, View } from 'react-native';

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
                <OcticonsIcon name="bell" size={17} color={pathname === '/notifications' ? '#171717' : 'white'} />
              </Pressable>
            </Link>
            <Link href="/settings" asChild>
              <Pressable className={`size-11 flex items-center justify-center rounded-[10px] ${pathname === '/settings' ? 'bg-neutral-100' : 'bg-neutral-800'}`}>
                <OcticonsIcon name="gear" size={17} color={pathname === '/settings' ? '#171717' : 'white'} />
              </Pressable>
            </Link>
          </View>
        ),
        tabBarStyle: {
          position: 'absolute',
          marginHorizontal: 80,
          marginBottom: 20,             
          paddingHorizontal: 12,        
          elevation: 8,
          backgroundColor: '#171717',
          borderRadius: 18,
          height: 56,
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
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,               
          width: '100%',            
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#737373',
        tabBarShowLabel: false,
      }}
    >
      {/* BOTTOM NAV: Community, Home, and Profile */}
      <Tabs.Screen
        name="community"
        options={{
          title: 'Community',
          tabBarIcon: ({ color }) => (
            <OcticonsIcon name="comment-discussion" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <OcticonsIcon name="home" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <OcticonsIcon name="person" size={25} color={color} /> 
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