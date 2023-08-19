import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Box, Button, Center, VStack } from "native-base";
import Colors from "../data/color";

export default function NotVerifyScreen() {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250}>
        <Text>sdadsf</Text>
        <Box
          w={100}
          h={100}
          bg={Colors.white}
          rounded={100}
          alignItems="center"
          justifyContent="center"
        >
          <Image
            source={require("../../assets/login2.png")}
            resizeMode="cover"
            style={styles.img}
          />
        </Box>
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <Button bg={Colors.black} w="100%" rounded={22} py={4}>
          <Text style={{ color: Colors.white, fontWeight: "bold" }}>
            {" "}
            REGİSTER
          </Text>
        </Button>
        <Button bg={Colors.white} w="100%" py={4} rounded={22}>
          <Text style={{ color: Colors.black, fontWeight: "bold" }}>
            {" "}
            LOGİN
          </Text>
        </Button>
      </VStack>
    </Box>
  );
}
const styles = StyleSheet.create({
  img: {
    width: 80,
    height: 80,
  },
});
