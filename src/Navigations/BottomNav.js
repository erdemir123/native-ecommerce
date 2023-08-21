import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import HomeScreen from "../Screens/HomeScreen";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../Screens/ProfileScreen";
import CartScreen from "../Screens/CartScreen";
import Colors from "../data/color";
import { Box, Center, Text, Pressable, View } from "native-base";
import { StyleSheet } from "react-native";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const CustomBar = ({ children, onPress, focused }) => 
  focused ? (
    <Text>hh </Text>
  ) : (
    <Pressable
      onPress={onPress}
      h={50}
      w={50}
      rounded="full"
      bg={Colors.main}
      top={-20}
    >
      {children}
    </Pressable>
  );
export default function BottomNav(props) {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tab },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Main"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name="home" size={24} color={Colors.main} />
              ) : (
                <AntDesign name="home" size={24}  color={Colors.black}  />
              )}
            </Center>
          ),
        }}
      />

      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarButton: (props) => <CustomBar {...props} />,

          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome5
                  name="shopping-basket"
                  size={24}
                  color={Colors.white}
                />
              ) : (
                <MaterialCommunityIcons
                  name="shopping-outline"
                  size={24}
                  color={Colors.black}
                />
              )}
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <AntDesign name="user" size={24} color={Colors.main} />
              ) : (
                <AntDesign name="user" size={24} color="black" />
              )}
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: { elevation: 0, backgroundColor: Colors.white, height: 50,},
});
