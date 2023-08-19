import { View, Text } from 'react-native'
import React from 'react'
import { Box } from 'native-base'
import Colors from '../data/color'
import HomeSearch from '../Components/HomeSearch'
import HomeProducts from '../Components/HomeProducts'

export default function HomeScreen() {
  return (
    <Box flex={1} bg={Colors.gray} >
     <HomeSearch/>
     <HomeProducts/>
    </Box>
  )
}