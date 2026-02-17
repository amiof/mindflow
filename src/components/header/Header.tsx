import { View, Text, Button } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View className='w-full h-full flex flex-row justify-between'>
      <View >
        <Text className='font-medium w-full ms-6 text-2xl '>MindFlow</Text>
        <Text className=' size-9 w-full ms-6 text-gray-600'>GTD + Brain Dump . Weekly Planner</Text>
      </View>
      <View className='flex flex-row p-3 me-2 gap-2'>
        <Button
          title='brain'
          color={"red"}
          onPress={() => console.log('Button with adjusted color pressedd')}
        />
        <Button title='weekly' />
      </View>
    </View>
  )
}

export default Header
