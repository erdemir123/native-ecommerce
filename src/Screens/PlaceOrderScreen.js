import { View, Text } from "react-native";
import React from "react";
import { Box, Heading, ScrollView } from "native-base";
import Colors from "../data/color";
import OrderInfo from "../Components/OrderInfo";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderItem from "../Components/OrderItem";
import PlaceOrderModel from "../Components/PlaceOrderModel";
import { useNavigation } from "@react-navigation/native";

export default function PlaceOrderScreen() {
  const { navigate } = useNavigation();
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="CUSTOMER"
            subTitle={"Admin Doe"}
            text={"admin@example.com"}
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="ORDER INFO"
            subTitle={"Shipping Tanzania"}
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
            text={"Arusha TZ Ngaramtoni Crater , P.O BOX 1257"}
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderItem />
        <PlaceOrderModel />
      </Box>
    </Box>
  );
}
