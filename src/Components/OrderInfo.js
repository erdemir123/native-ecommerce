import { View } from "react-native";
import React from "react";
import { Center, Heading, Text } from "native-base";
import Colors from "../data/color";

export default function OrderInfo({
  icon,
  title,
  subTitle,
  text,
  success,
  danger,
}) {
  return (
    <Center
      bg={Colors.white}
      w={200}
      py={2}
      rounded={10}
      shadow={4}
      mb={2}
      ml={5}
      mr={1}
      px={4}
    >
      <Center bg={Colors.main} w={60} h={60} rounded="full">
        {icon}
      </Center>
      <Heading fontSize={12} isTruncated mt={2}>
        <Text fontSize={13} color={Colors.black} bold>
          {title}
        </Text>
      </Heading>
      <Text fontSize={13} color={Colors.black}>
        {subTitle}
      </Text>
      <Text fontSize={13} color={Colors.black} textAlign={"center"} >
        {text}
      </Text>
      {success && (
        <Center py={2} mt={2} rounded={5} bg={Colors.blue} w="full">
          <Text fontSize={12} color={Colors.white}>
            Paid on Jan 12 2021
          </Text>
        </Center>
      )}
      {danger && (
        <Center py={2} mt={2} rounded={5} bg={Colors.red} w="full">
          <Text fontSize={12} color={Colors.white}>
            Not Deliver
          </Text>
        </Center>
      )}
    </Center>
  );
}
