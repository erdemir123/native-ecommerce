import { Button } from "native-base";
import React from "react";

export default function Buttone({ mt, color, onPress, children, bg }) {
  return (
    <Button
      mt={mt}
      rounded={20}
      h={55}
      mx={3}
      bg={bg}
      _text={{
        color: color,
        fontWeight: "bold",
      }}
      _pressed={{
        bg: color,
      }}
      onPress={onPress}
    >
      {children}
    </Button>
  );
}
