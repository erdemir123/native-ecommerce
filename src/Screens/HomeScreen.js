import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Box } from 'native-base'
import Colors from '../data/color'
import HomeSearch from '../Components/HomeSearch'
import HomeProducts from '../Components/HomeProducts'

export default function HomeScreen() {
  const [search,setSearch]=useState("")
  return (
    <Box flex={1} bg={Colors.gray} >
     <HomeSearch search={search} setSearch={setSearch}/>
     <HomeProducts search={search} />
    </Box>
  )
}