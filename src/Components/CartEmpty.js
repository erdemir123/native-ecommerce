import { View } from "react-native";
import React from "react";
import { Box, Center, Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

import Colors from "../data/color";
import Buttone from "./Buttone";

export default function CartEmpty() {
  return (
    <Box flex={1}>
      <Center h="90%">
        <Center w={200} h={200} bg={Colors.white} rounded="full">
          <FontAwesome name="shopping-basket" size={64} color={Colors.main} />
        </Center>
        <Text color={Colors.main} bold mt={5} fontSize={18}>
          Cart is Empty
        </Text>
      </Center>
      <Buttone
        bg={Colors.black}
        color={Colors.white}
        onPress={() => console.log("baılsdı")}
        mt={2}
      >
        Start Shopping
      </Buttone>
    </Box>
  );
}
