import { Link } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'

export default function HomeScreen() {
  return (
    <View className='bg-neutral-900'>
      <View className='rounded-t-[22px] bg-white h-full'>
        <ScrollView 
          className='p-6' 
          contentContainerStyle={{ paddingBottom: 90 }}
          showsVerticalScrollIndicator={false}
        > 
          <Text>Home Screen (Toggle goes here)</Text>
          {/* Link to Logs page */}
          <Link href="/logs" asChild>
            <Text>View Logs</Text>
          </Link>
          <Link href="/login">
            <Text>Logout</Text>
          </Link>
          <Text className='text-white text-5xl'>- und. team</Text>
        </ScrollView>
      </View>
    </View>
  )
}
