import { View } from "react-native";
import React from "react";
import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import Colors from "../data/color";
import CartEmpty from "../Components/CartEmpty";
import CartItems from "../Components/CartItems";
import Buttone from "../Components/Buttone";

export default function CartScreen() {
  return (
    <Box safeArea flex={1} bg={Colors.subGreen}>
      <Center w="full" py={5}>
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
          h={12}
          w="90%"
          rounded={20}
          mx="auto"
          mt={3}
        >
          <Text>Total</Text>
          <Button
            px={10}
            h={45}
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

        {/* <Buttone
          bg={Colors.black}
          mt={5}
          color={Colors.white}
          onPress={() => console.log("Checked")}
        >
          CHECKOUT
        </Buttone> */}
      
    </Box>
  );
}
