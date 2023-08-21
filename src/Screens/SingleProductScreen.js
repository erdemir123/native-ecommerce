import { View, Image } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  HStack,
  Heading,
  ScrollView,
  Spacer,
  Text,
} from "native-base";
import Colors from "../data/color";
import Rating from "../Components/Rating";
import NumericInput from "react-native-numeric-input";
import Review from "../Components/Review";

export default function SingleProductScreen({route}) {
  
  const [value, setValue] = useState(0);
  const product = route.params
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri:product.url
          }}
          alt="İmage"
          width="100%"
          height={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={18} lineHeight={22} mb={2}>
          {product.name}
        </Heading>
        <Rating rating={product.rating}/>
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={0}
            borderColor={Colors.main}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
          <Spacer />
          <Heading bold fontSize={20} lineHeight={22} mb={2}>
           $ {product.price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12} >
          {product.product_desc}
        </Text>
        <Button bg={Colors.main} color={Colors.white} my={4} rounded={12}>
          Add To Cart
        </Button>
        <Review />
      </ScrollView>
    </Box>
  );
}
