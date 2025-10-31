import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function HomeScreen() {
  return (
    <View>
      <Text>Home Screen (Toggle goes here)</Text>
      
      {/* Link to Logs page */}
      <Link href="/logs" asChild>
          <Text>View Logs</Text>
      </Link>
       <Link href="/login">
          <Text>Logout</Text>
      </Link>

      <View className="bg-red-500 border mt-24">
        <Text>Hello</Text>
      </View>
    </View>
  )
}
