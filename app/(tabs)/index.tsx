import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function HomeScreen() {
  return (
    <View className='bg-neutral-900'>
      <View className='p-6 rounded-t-[22px] bg-white h-full'>
        <Text>Home Screen (Toggle goes here)</Text>
        {/* Link to Logs page */}
        <Link href="/logs" asChild>
            <Text>View Logs</Text>
        </Link>
        <Link href="/login">
            <Text>Logout</Text>
        </Link>
        <View className="inline-block bg-red-800 px-3 py-2 rounded-2xl mt-24">
          <Text className='text-white text-5xl'>- und. team</Text>
        </View>
      </View>
    </View>
  )
}
