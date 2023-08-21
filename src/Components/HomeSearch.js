import { View, Text, Pressable } from "react-native";
import React from "react";
import { Box, HStack, Input } from "native-base";
import Colors from "../data/color";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HomeSearch() {
  const { navigate } = useNavigation();
  return (
    <HStack
      space={3}
      px={6}
      bg={Colors.main}
      py={4}
      alignItems="center"
      safeArea
    >
      <Input
        placeholder="Nike , Puma , Adidas, ..."
        w="85%"
        variant="filled"
        bg={Colors.white}
        type="search"
        h={12}
        _focus={
           { bg:Colors.white}
        }
      />
      <Pressable ml={3} onPress={()=>navigate("CartScreen")}>
        <Feather name="shopping-bag" size={24} color="white"  />
        <Box px={1} rounded="full" bg={Colors.red} position="absolute" top={-5} left={3} _text={
            {
                color:Colors.white,
                fontSize:"12px"
            }
        }>
          3  
        </Box>
      </Pressable>
    </HStack>
  );
}
