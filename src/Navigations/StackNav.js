import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./BottomNav";
import { StatusBar } from "native-base";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import OrderScreen from "../Screens/OrderScreen";
import SingleProductScreen from "../Screens/SingleProductScreen";
import ShippingScreen from "../Screens/ShippingScreen";
import PaymentScreen from "../Screens/PaymentScreen";
import PlaceOrderScreen from "../Screens/PlaceOrderScreen";
const Stack = createNativeStackNavigator();
export default function StackNav() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator
        initialRouteName="Bottom"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Bottom" component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
