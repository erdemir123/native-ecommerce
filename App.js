import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/Screens/HomeScreen";
import { NativeBaseProvider } from "native-base";
import NotVerifyScreen from "./src/Screens/NotVerifyScreen";
import SingleProductScreen from "./src/Screens/SingleProductScreen";
import CartScreen from "./src/Screens/CartScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import ShippingScreen from "./src/Screens/ShippingScreen";
import PaymentScreen from "./src/Screens/PaymentScreen";
import PlaceOrderScreen from "./src/Screens/PlaceOrderScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <PlaceOrderScreen />
    </NativeBaseProvider>
  );
}
