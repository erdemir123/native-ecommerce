import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../data/color";
import { HStack } from "native-base";

export default function ({ rating}) {
  return (
    <HStack space={0.4} my={2} alingItems="center">
      <FontAwesome
        name={rating >= 1 ? "star" : rating >= 0.5 ? "star-half-o" : "star-o"}
        color={Colors.orange}
        size={12}
      />
      <FontAwesome
        name={rating >= 2 ? "star" : rating >= 1.5 ? "star-half-o" : "star-o"}
        color={Colors.orange}
        size={12}
      />
      <FontAwesome
        name={rating >= 3 ? "star" : rating >= 2.5 ? "star-half-o" : "star-o"}
        color={Colors.orange}
        size={12}
      />
      <FontAwesome
        name={rating >= 4 ? "star" : rating >= 3.5 ? "star-half-o" : "star-o"}
        color={Colors.orange}
        size={12}
      />
      <FontAwesome
        name={rating >= 5 ? "star" : rating >= 4.5 ? "star-half-o" : "star-o"}
        color={Colors.orange}
        size={12}
      />
    </HStack>
  );
}
