import { View, Text } from "react-native";
import React from "react";
import { Center, Heading, Image } from "native-base";
import Colors from "../data/color";
import Tabs from "../Components/Profile/tabs";

export default function ProfileScreen() {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-icon/settings_318-518959.jpg",
          }}
          alt="user"
          w={24}
          h={24}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          Admin
        </Heading>
        <Text itelic fontSize={12} color={Colors.white}>
          Joined Dec 12 2022
        </Text>
      </Center>
      <Tabs />
    </>
  );
}
