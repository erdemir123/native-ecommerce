import { View, Text } from "react-native";
import React from "react";
import { Box, Heading } from "native-base";
import Colors from "../data/color";
import Rating from "./Rating";
import Message from "./Notifications/Message";

export default function Review() {
  return (
    <Box my={4}>
      <Heading bold fontSize={15} mb={2}>
        Reviews
      </Heading>
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading bold fontSize={15} mb={2}>
          User Michael
        </Heading>
        <Rating rating={4} />
        <Text my={3}>Jan 12 2023</Text>
        <Message
          bg={Colors.white}
          color={Colors.black}
          size={12}
          children="Ürün açıklaması, e-ticaret sitelerinin ürün sayfalarında yer alan;
          ürünün özelliklerini ve ne işe yaradığını müşterilere açıklamaya
          yarayan içeriktir."
        />
      </Box>
    </Box>
  );
}
