import { Link } from 'expo-router'
import { Pressable, Text, View } from 'react-native'

export default function LogsScreen() {
  return (
    <View>
      <Text>Logs Screen</Text>
      
      {/* Link to Logs page */}
      <Link href="/(tabs)" asChild>
        <Pressable>
          <Text>Back to homerist</Text>
        </Pressable>
      </Link>
    </View>
  )
}
