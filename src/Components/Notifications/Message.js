import React from "react";
import { Center, Text } from "native-base";

export default function Message({ color, children, bg, size }) {
  return (
    <Center bg={bg} p={4} rounded={5} mt={2}>
      <Text color={color} fontSize={size}>
        {children}
      </Text>
    </Center>
  );
}
