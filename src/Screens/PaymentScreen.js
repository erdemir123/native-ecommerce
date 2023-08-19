import React, { useState } from "react";
import {
  Box,
  Center,
  CheckIcon,
  FormControl,
  HStack,
  Image,
  Input,
  ScrollView,
  Select,
  Spacer,
  Text,
  VStack,
  View,
} from "native-base";
import Colors from "../data/color";
import Buttone from "../Components/Buttone";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function PaymentScreen() {
  const [activePayment, setActivePayment] = useState(1);
  const PaymentsMethods = [
    {
      image: require("../../assets/PayPal.png"),
      alt: "Paypal",

      id: 1,
    },
    {
      image: require("../../assets/discover.png"),
      alt: "Discover",
      id: 2,
    },
    {
      image: require("../../assets/googlePayment.jpg"),
      alt: "Google",

      id: 3,
    },
  ];
console.log(PaymentsMethods[activePayment].alt)
  return (
    <Box flex={1} safeArea bg={Colors.main} pt={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={15} bold>
          SELECT PAYMENT METHOD
        </Text>
      </Center>

      <Box bg={Colors.deepGray} flex={1}>
        <VStack space={6} px={6} pt={12} pb={6}>
          {PaymentsMethods.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setActivePayment(index)}
              >
                <HStack
                  alingItems="center"
                  justifyContent="space-between"
                  bg={Colors.white}
                  px={3}
                  py={1}
                  rounded={10}
                >
                  <Box>
                    <Image
                      source={item.image}
                      w={60}
                      h={50}
                      resizeMode="contain"
                    />
                  </Box>
                  {activePayment === index ? (
                    <Ionicons name="checkmark-circle" size={30} color="green" />
                  ) : (
                    <Ionicons
                      name={"ellipse"}
                      size={30}
                      color={Colors.main}
                      style={{ marginTop: 8 }}
                    />
                  )}
                </HStack>
              </TouchableOpacity>
            );
          })}
        </VStack>

        <Buttone bg={Colors.main} color={Colors.white}>
          Continue
        </Buttone>
        <Text italic textAlign="center" mt={5}>
          Payment method is <Text bold>"{PaymentsMethods[activePayment].alt} "</Text>
        </Text>
      </Box>
    </Box>
  );
}
