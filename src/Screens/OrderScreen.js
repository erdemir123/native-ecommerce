import { View, Text } from "react-native";
import React from "react";
import { Box, Heading, ScrollView } from "native-base";
import Colors from "../data/color";
import OrderInfo from "../Components/OrderInfo";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderItem from "../Components/OrderItem";
import PlaceOrderModel from "../Components/PlaceOrderModel";
import OrderModel from "../Components/OrderModel";

export default function OrderScreen() {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="SHIPPING INFO"
            subTitle={"Shipping Tanzania"}
            success
            text={"Pay Method : PayPal"}
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title="DELIVER TO "
            subTitle={"Adress:"}
            danger
            text={"Arusha TZ Ngaramtoni Crater , P.O BOX 1257"}
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.red} />
            }
          />
        </ScrollView>
      </Box>
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderItem />
        <OrderModel />
      </Box>
      
    </Box>
  );
}
