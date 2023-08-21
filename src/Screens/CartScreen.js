import { View } from "react-native";
import React from "react";
import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import Colors from "../data/color";
import CartEmpty from "../Components/CartEmpty";
import CartItems from "../Components/CartItems";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";

export default function CartScreen() {
  const { navigate } = useNavigation();
  return (
    <Box safeArea flex={1} bg={Colors.subGreen}>
      <Center w="full" py={2}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {/* <CartEmpty /> */}

      <CartItems />
      <HStack
        bg={Colors.white}
        alignItems="center"
        justifyContent="space-between"
        h={8}
        w="90%"
        rounded={20}
        mx="auto"
        my={2}
      >
        <Text ml={2}>Total</Text>
        <Button
          px={10}
          h={35}
          rounded={50}
          bg={Colors.main}
          _text={{
            color: Colors.white,
            fontWeight: "semibold",
          }}
          _pressed={{
            bg: Colors.deepGray,
          }}
        >
          $ 356
        </Button>
      </HStack>

      <Buttone
        bg={Colors.black}
        h={45}
        color={Colors.white}
        onPress={() => navigate("Shipping")}
      >
        CHECKOUT
      </Buttone>
    </Box>
  );
}
