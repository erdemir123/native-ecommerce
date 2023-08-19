import { View } from "react-native";
import React from "react";
import {
  Box,
  Center,
  HStack,
  Pressable,
  Image,
  VStack,
  Text,
  Button,
} from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import data from "../data/data";
import Colors from "../data/color";
import { FontAwesome } from "@expo/vector-icons";
import Rating from "./Rating";

export default function CartItems() {
  const Swiper = () => {
    return (
      <SwipeListView
        rightOpenValue={-50}
        previewRowKey="0"
        previewOpenValue={-40}
        previewOpenDelay={3000}
        data={data.slice(0, 6)}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        showsVerticalScrollIndicator={false}
      />
    );
  };
  const renderItem = ({ item, index }) => (
    <Pressable>
      <Box ml={6} mb={1}>
        <HStack
          alignItems="center"
          bg={Colors.white}
          shadow={1}
          rounded={10}
          overflow="hidden"
          h={75}
        >
          <Center w="25%" bg={Colors.deepGray}>
            <Image
              source={{ uri: item.url }}
              alt="data"
              w="100%"
              h="100%"
              resizeMode="contain"
            />
          </Center>
          <VStack w="60%" px={2} space={2}>
            <Text isTruncated color={Colors.black} bold fontSize={12}>
              {item.name}
            </Text>
            <Text color={Colors.black} fontSize={10}>
              $ {item.price}
            </Text>
            <Rating rating={item.rating} />
          </VStack>
          <Center>
            
          </Center>
        </HStack>
      </Box>
    </Pressable>
  );

  const renderHiddenItem = () => (
    <Pressable
      w={50}
      roundedTopRight={10}
      roundedBottomRight={10}
      h="88%"
      ml="auto"
      justifyContent="center"
      bg={Colors.red}
    >
      <Center alignItems="center" space={2}>
        <FontAwesome name="trash" size={24} color={Colors.white} />
      </Center>
    </Pressable>
  );

  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  );
}
