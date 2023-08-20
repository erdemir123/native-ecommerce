import React, { useState } from "react";
import {
  Box,
  Center,
  FlatList,
  HStack,
  Image,
  Pressable,
  VStack,
  Text,
  Button,
} from "native-base";
import data from "../data/data";
import Colors from "../data/color";

export default function OrderItem() {
  const [active, setActive] = useState(5);
  const [loading, setLoading] = useState(false);
  const [renderData, setRenderData] = useState([...data.slice(0, active)]);
  console.log(active);
  console.log(renderData.length);
  console.log(loading);
  return (
    <>
      <FlatList
        onEndReached={() => {
          if (active < data.length) {
            setLoading(!loading);
            setActive((prev) => prev + 5);
            setTimeout(() => {
              setLoading(false);
              setRenderData([...data.slice(0, active)]);
            }, 500);
          }
        }}
        onEndReachedThreshold={0.01}
        showsVerticalScrollIndicator={false}
        data={renderData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable>
            <Box mb={3}>
              <HStack
                alignItems="center"
                bg={Colors.white}
                shadow={1}
                rounded={10}
                overflow="hidden"
              >
                <Center w="25%" bg={Colors.deepGray}>
                  <Image
                    source={{ uri: item.url }}
                    w="full"
                    h={24}
                    resizeMode="contain"
                    alt="product"
                  />
                </Center>
                <VStack w="60%" color={Colors.black} bold fontSize={14} ml={2}>
                  <Text isTruncated color={Colors.black} bold fontSize={12}>
                    {item.name}
                  </Text>
                  <Text
                    isTruncated
                    color={Colors.lightBlack}
                    fontSize={12}
                    mt={2}
                    bold
                  >
                    ${item.price}
                  </Text>
                </VStack>
                <Center>
                  <Button
                    bg={Colors.main}
                    _text={{
                      color: Colors.white,
                      fontSize: 12,
                    }}
                    mx={1}
                    _pressed={{
                      bg: Colors.subGreen,
                    }}
                  >
                    5
                  </Button>
                </Center>
              </HStack>
            </Box>
          </Pressable>
        )}
      ></FlatList>
      {loading && (
        <Center>
          <Image
            source={require("../../assets/loading2.gif")}
            alt="loading"
            w={50}
            h={25}
            resizeMode="contain"
          />
        </Center>
      )}
    </>
  );
}
