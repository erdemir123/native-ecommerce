import { View, Image, Pressable, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { Box, Center, FlatList, Text } from "native-base";
import data from "../data/data";
import Colors from "../data/color";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";

export default function HomeProducts({ search }) {
  const product = search
    ? data.filter((item) => item.name.includes(search))
    : data;
  const { navigate } = useNavigation();
  const [isRefresh, setIsRefresh] = useState(false);
  const flatListRef = useRef(null);
  const handleRefresh = () => {
    setIsRefresh(true);
    setTimeout(() => {
      setIsRefresh(false);
    }, 1000);
  };
  // const handleFlatListEnd=(e)=>{

  const RenderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigate("Single", item)}>
      <View
        style={{
          width: 160,
          height: 220,
          backgroundColor: Colors.white,
          justifyContent: "center",
          alignItems: "start",
          padding: 4,
          gap: 4,
          borderRadius: 10,
          shadowColor: Colors.gray,
        }}
      >
        <Image source={{ uri: item.url }} width={150} height={100} />
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{item.price} $</Text>
        <Text style={{}}>{item.name}</Text>
        <Rating rating={item.rating} />
      </View>
    </TouchableOpacity>
  );
  return (
    <Box bg={Colors.subGreen} flex={1}>
      {product.length ? (
        <FlatList
          ref={flatListRef}
          data={product}
          renderItem={({ item }) => <RenderItem item={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row", // Öğeleri yatayda sıralamak için
            flexWrap: "wrap", // Taşanları alt satıra geçirmek için
            justifyContent: "center", // Ortalamak için
            paddingTop: 5,
            gap: 6,
            backgroundColor: Colors.subGreen,
          }}
          onRefresh={handleRefresh}
          refreshing={isRefresh}
          // onEndReached={handleFlatListEnd}
          // onEndReachedThreshold={0.05}
        />
      ) : (
        <Center  flex={1} justifyContent="center" alignItems="center" ><Text textTransform="uppercase" fontSize="lg" color={Colors.paypal}>no matching words found...</Text></Center>
      )}
    </Box>
  );
}
