import { View, Text } from "react-native";
import React from "react";
import { Box, FormControl, Input, ScrollView, VStack } from "native-base";
import Colors from "../../data/color";
import Buttone from "../Buttone";

const Inputs = [
  { Label: "Username", type: "text" },
  { Label: "Email", type: "text" },
  { Label: "New Password", type: "password" },
  { Label: "Confirm Password", type: "password" },
];

export default function Profile() {
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={2} my={5} pb={10}>
          {Inputs.map((item) => {
            return (
              <FormControl>
                <FormControl.Label
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: Colors.black,
                  }}
                >
                  {item.Label}
                </FormControl.Label>
                <Input
                  borderWidth={0}
                  bg={Colors.subGreen}
                  py={3}
                  type={item.type}
                  color={Colors.main}
                  fontSize={15}
                  _focus={{
                    bg: Colors.deepGray,
                    borderColor: Colors.main,
                    borderWidth: 1,
                  }}
                />
              </FormControl>
            );
          })}
          <Buttone bg={Colors.main} color={Colors.white} >
            UPDATE PROFİLE
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
}
