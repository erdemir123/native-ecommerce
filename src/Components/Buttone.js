import { Button } from "native-base";
import React from "react";

export default function Buttone({ mt, color, onPress, children, bg }) {
  return (
    <Button
      mb={mt}
      color={color}
      rounded={20}
      h={55}
      mx={3}
      bg={bg}
      _text={{
        color: color,
        fontWeight: "bold",
      }}
      _pressed={{
        bg: bg,
      }}
      onPress={onPress}
    >
      {children}
    </Button>
  );
}
