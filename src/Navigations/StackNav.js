import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./BottomNav";
import { StatusBar } from "native-base";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import OrderScreen from "../Screens/OrderScreen";
const Stack = createNativeStackNavigator();
export default function StackNav() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Bottom" component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
