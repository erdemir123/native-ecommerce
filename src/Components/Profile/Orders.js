import { View } from "react-native";
import React from "react";
import { Box, Button, HStack, ScrollView, Text, Pressable } from "native-base";
import Colors from "../../data/color";

export default function Orders() {
  return (
    <Box w="full" bg={Colors.white} pt={5} flex={1}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{
          gap:2,
          w: "100%",
    
        }}
      >
        <Pressable>
          <HStack
            bg={Colors.deepGray}
            h={12}
            alignItems="center"
            justifyContent="space-between"
            px={4}
          >
            <Text
              isTruncated
              color={Colors.blue}
              _text={{
                fontSize: 8,
              }}
            >
              21+9598v498452
            </Text>
            <Text isTruncated color={Colors.black} bold>
              Not PAID
            </Text>
            <Text isTruncated color={Colors.black} italic>
              Dec 12 2022
            </Text>
            <Button
              px={7}
              py={1.5}
              bg={Colors.red}
              rounded={50}
              color={Colors.main}
              _pressed={{
                bg: Colors.orange,
              }}
            >
              $ 4129
            </Button>
          </HStack>
        </Pressable>
        <Pressable>
          <HStack
            bg={Colors.deepGray}
            h={12}
            alignItems="center"
            justifyContent="space-between"
            px={4}
          >
            <Text
              isTruncated
              color={Colors.blue}
              _text={{
                fontSize: 8,
              }}
            >
              21+9598v498452
            </Text>
            <Text isTruncated color={Colors.black} bold>
              PAID
            </Text>
            <Text isTruncated color={Colors.black} italic>
              Dec 12 2022
            </Text>
            <Button
              px={7}
              py={1.5}
              bg={Colors.main}
              rounded={50}
              color={Colors.main}
              _pressed={{
                bg: Colors.gray,
              }}
            >
              $ 456
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
}
