import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../Screens/HomeScreen";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../Screens/ProfileScreen";
import CartScreen from "../Screens/CartScreen";
import Colors from "../data/color";
import { Center } from "native-base";
import { Pressable } from "react-native";

const Tab = createBottomTabNavigator();
const CustomBar = ({ children, onPress }) => {
  return (
    <Pressable
      bg={Colors.main}
      top={-30}

      w={50}
      h={50}
      omPress={onPress}
      rounded="full"
      shadow={2}
    >
      {children}
    </Pressable>
  );
};
export default function BottomNav() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.main,
        tabBarInactiveTintColor: Colors.subGreen,
        tabBarStyle: {
          backgroundColor: Colors.white,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Main"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="ios-home" color={focused ? Colors.main : Colors.subGreen} size={36}  />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarButton: (props) => <CustomBar {...props} />,
          tabBarIcon: ({focused}) => (
            <Ionicons name="ios-home" color={focused ? Colors.white : Colors.main} size={24}  />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
