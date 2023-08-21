import React from "react";
import {
  Box,
  Center,
  FormControl,
  Input,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import Colors from "../data/color";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";
export default function ShippingScreen() {
  const { navigate } = useNavigation();
  const Inputs = [
    { Label: "Enter City", type: "text" },
    { Label: "Enter Country", type: "text" },
    { Label: "Enter Postal Code", type: "password" },
    { Label: "Enter Adress", type: "password" },
  ];

  return (
    <Box flex={1} safeArea bg={Colors.main} pt={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={15} bold>
          DELİVERY ADDRESS
        </Text>
      </Center>
      <Box bg={Colors.white} flex={1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} px={6} pt={12}>
            {Inputs.map((item, index) => {
              return (
                <FormControl key={index}>
                  <FormControl.Label
                    _text={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: Colors.black,
                    }}
                  >
                    {item.Label}
                  </FormControl.Label>
                  <Input
                    borderWidth={0}
                    bg={Colors.subGreen}
                    py={3}
                    type={item.type}
                    color={Colors.main}
                    fontSize={15}
                    _focus={{
                      bg: Colors.deepGray,
                      borderColor: Colors.main,
                      borderWidth: 1,
                    }}
                  />
                </FormControl>
              );
            })}
            <Buttone onPress={() => navigate("PaymentScreen")} bg={Colors.main} color={Colors.white} >
              Continue
            </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}
