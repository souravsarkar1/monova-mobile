import { Stack } from 'expo-router'
import React from 'react'

const HomeLayout = () => {
  return (

      <Stack>
        <Stack.Screen name='index' options={{headerShown: false}}/>
        <Stack.Screen name='chat' options={{headerShown: false, presentation: 'fullScreenModal'}}/>
      </Stack>
  )
}

export default HomeLayout
