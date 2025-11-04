import { OcticonsIcon } from '@/components/ui/octoicons'
import { Images } from '@/constants/images'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'

export default function CommunityScreen() {

  const PostContainer = () => {
    return (
      <View className='flex flex-col gap-4 p-3.5 bg-neutral-50/80 rounded-2xl'>
        <View className='flex flex-row items-start justify-between'>
          {/* Author */}
          <View className='flex flex-row items-center gap-x-3'>
            <View className='size-[36px] rounded-xl border-[1.2px] border-neutral-400 p-[1px]'>
              <Image source={Images.AuthorProfile} className='size-full rounded-[8.5px]' />
            </View>
            <View className='gap-y-[2px]'>
              <View className='flex flex-row items-center gap-2'>
                <Text className='text-neutral-900 text-[16px] font-medium leading-none'>Frederick M.</Text>
                <Image source={Images.SampleBadge} className='h-4 w-auto' />
              </View>
              <Text className='text-neutral-500/80 text-md'>4 days ago</Text>
            </View>
          </View>
          {/* Channel */}
          <View className='inline-flex flex-row items-center justify-center gap-1 bg-[#FBEDED] border border-[#EAB9B9] rounded-[7px] pl-1.5 pr-2 py-1'>
            <OcticonsIcon name="hash" size={10} color='#991B1B' />
            <Text className='text-red-800 text-[13px] leading-none'>Prison Break</Text>
          </View>
        </View>

        {/* Post Content */}
        <Text className='text-neutral-700 text-[16px] leading-[19px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</Text>
        {/* <Image source={Images.PhasedLogo} className='size-full rounded-[8.5px] opacity-20' /> */}
        
        {/* Post Actions */}
        <View className='flex flex-row items-center justify-between'>
          <View className='flex flex-row items-center gap-x-2'>
            <View className='flex flex-row items-center gap-x-4'>
              <Pressable className='flex flex-row items-center gap-2 px-2.5 py-1.5 rounded-[8px] border border-neutral-200'>
                <OcticonsIcon name="heart" size={14} color='#687076' />
                <Text className='text-neutral-600 text-md leading-none'>104</Text>
              </Pressable>
            </View>
            <View className='flex flex-row items-center gap-x-4'>
              <Pressable className='flex flex-row items-center gap-2 px-2.5 py-1.5 rounded-[8px] border border-neutral-200'>
                <OcticonsIcon name="comment" size={14} color='#687076' />
                <Text className='text-neutral-600 text-md leading-none'>23</Text>
              </Pressable>
            </View>
          </View>
          {/* Report */}
          <Pressable className='flex items-center justify-center gap-2 size-[27px] rounded-[8px] border border-neutral-200'>
            <OcticonsIcon name="sparkle" size={14} color='#687076' />
          </Pressable>
        </View>
      </View>
    )
  }

  return (
    <View className='bg-neutral-900'>
      <View className='rounded-t-[22px] bg-white h-full overflow-hidden'>

        {/* Fixed header */}
        <View className='flex flex-row items-start justify-between fixed top-0 left-0 right-0 z-10 p-3.5'>
          {/* Channel & Description */}
          <View className='flex flex-row items-center gap-4'>
            <View className='flex items-center justify-center size-12 rounded-[10px] border border-neutral-200'>
              <Image source={Images.CommunityIcon} className='size-6.5' />
            </View>
            <View className='gap-y-1.5'>
              <Text className='font-poppins text-neutral-900 text-2xl leading-none'>General</Text>
              <Text className='text-neutral-500 text-md leading-none'>Community-wide conversations</Text>
            </View>
          </View>
          {/* Post */}
          <Pressable className={`size-11 flex items-center justify-center rounded-[10px] bg-red-800`}>
            <OcticonsIcon name="pencil" size={17} color='white' />
          </Pressable>
        </View>

        <ScrollView 
          className='p-2' 
          contentContainerStyle={{ paddingBottom: 90, gap: 5 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Sample Posts */}
          <PostContainer />
          <PostContainer />
          <PostContainer />
          <PostContainer />
          <PostContainer />
          <PostContainer />
        </ScrollView>
      </View>
    </View>
  )
}
