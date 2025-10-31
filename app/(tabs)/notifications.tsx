import { ScrollView, Text, View } from 'react-native'

export default function NotificationsScreen() {
  return (
    <View className='bg-neutral-900'>
      <View className='rounded-t-[22px] bg-white h-full'>
        <ScrollView 
          className='p-6' 
          contentContainerStyle={{ paddingBottom: 90 }}
          showsVerticalScrollIndicator={false}
        >
          <Text className='text-neutral-900 text-3xl font-semibold'>Notifications Screen</Text>
          <Text className='text-neutral-700 text-lg'>- und. construction</Text>
        </ScrollView>
      </View>
    </View>
  )
}
