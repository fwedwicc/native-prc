import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function LoginScreen() {
  return (
    <View>
      <Text>Login Screen</Text>
      <Link href="/(tabs)">
        <Text>to home</Text>
      </Link>
    </View>
  )
}
