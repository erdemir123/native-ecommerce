import { View } from "react-native";
import React, { useState } from "react";
import { Center, HStack, Modal, VStack, Text, Button } from "native-base";
import Buttone from "./Buttone";
import Colors from "../data/color";
import { useNavigation } from "@react-navigation/native";

export default function PlaceOrderModel() {
  const [showModal, setShowModel] = useState(false);
  const { navigate } = useNavigation();
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
        bg={Colors.black}
        color={Colors.white}
        mt={2}
      >
        SHOW TOTAL
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
            <Button
              flex={1}
              bg={Colors.main}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => {
                setShowModel(false);
                navigate("OrderScreen");
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              PLACE AN ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
}
