import { View } from "react-native";
import React, { useState } from "react";
import {
  Center,
  HStack,
  Modal,
  VStack,
  Text,
  Button,
  Pressable,
  Image,
} from "native-base";
import Buttone from "./Buttone";
import Colors from "../data/color";
import { useNavigation } from "@react-navigation/native";

export default function OrderModel() {
  const { navigate } = useNavigation();
  const [showModal, setShowModel] = useState(false);
  const OrderInfos = [
    { title: "Products", price: 125.77, color: "black" },
    { title: "Shipping", price: 56.77, color: "black" },
    { title: "Tax", price: 34.72, color: "black" },
    { title: "total", price: 0, color: "main" },
  ];
  let total = 0;
  OrderInfos.forEach((item, index) => (total += item.price));
  return (
    <View>
      <Buttone
        onPress={() => setShowModel(true)}
        bg={Colors.main}
        color={Colors.white}
        mt={2}
      >
        SHOW PAYMENT & TOTAL
      </Buttone>
      <Modal isOpen={showModal} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>ORDER</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrderInfos.map((item, index) => {
                return (
                  <HStack alignItems="center" justifyContent="space-between">
                    <Text fontWeight="medium"> {item.title}</Text>
                    <Text
                      color={item.color === "main" ? Colors.main : Colors.black}
                      bold
                    >
                      {item.title === "total" ? total : item.price}
                    </Text>
                  </HStack>
                );
              })}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              w="full"
              justifyContent="center"
              bg={Colors.paypal}
              h={45}
              onPress={() => setShowModel(false)}
              rounded={2}
              overflow="hidden"
            >
              <Image
                source={require("../../assets/PayPal.png")}
                w="full"
                h={34}
                resizeMode="contain"
                alt="product"
              />
            </Pressable>
            <Button
              flex={1}
              bg={Colors.black}
              w="full"
              h={45}
              mt={2}
              _text={{
                color: Colors.white,
              }}
              
              onPress={() => {
                setShowModel(false);
                navigate("Home");
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              PAY LATER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
}
