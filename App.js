import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/Screens/HomeScreen";
import { NativeBaseProvider } from "native-base";
import NotVerifyScreen from "./src/Screens/NotVerifyScreen";
import SingleProductScreen from "./src/Screens/SingleProductScreen";
import CartScreen from "./src/Screens/CartScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import ShippingScreen from "./src/Screens/ShippingScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <ShippingScreen />
    </NativeBaseProvider>
  );
}
