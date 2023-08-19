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

export default function SingleProductScreen() {
  const [value, setValue] = useState(0);
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_79133333/fee_325_225_png/APPLE-iPhone-11-64GB-Ak%C4%B1ll%C4%B1-Telefon-Siyah",
          }}
          alt="İmage"
          width="100%"
          height={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={18} lineHeight={22} mb={2}>
          Apple
        </Heading>
        <Rating rating={4} />
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
            $ 400
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12} >
          "Ürün açıklaması, e-ticaret sitelerinin ürün sayfalarında yer alan;
          ürünün özelliklerini ve ne işe yaradığını müşterilere açıklamaya
          yarayan içeriktir. Ürün açıklamasının amacı, ürünü detaylı şekilde
          tanıtmak ve potansiyel müşterileri ürünü satın alma konusunda teşvik
          etmektir.Satın almaya yönlendiren bir ürün açıklaması, ürününüzün
          hangi sorunları çözdüğünü, müşterilerinizin o ürünü kullanarak ne
          kazanacaklarını, ürünlerinizi pazardaki diğer ürünlerden ayıran
          özellikleri gibi detayları içermelidir.Ürün açıklamaları, internet
          üzerinden alışveriş yapmak isteyen kullanıcılara yol gösterici
          içeriklerdir. Dijital ortamdan ürün seçmeye çalışan müşterilerinizi o
          ürünü satın almaya ikna etmeniz için birçok faktörü düşünmelisiniz.
          Ürün açıklaması bu noktada ürünle ilgili varsa teknik bilgileri ve
          kullanımıyla ilgili özellikleri içererek potansiyel müşterilerinizi
          bilgilendirirken o ürünü satın almaya yönlendirici detayları da
          içermelidir."
        </Text>
        <Button bg={Colors.main} color={Colors.white} my={4} rounded={12}>
          Add To Cart
        </Button>
        <Review />
      </ScrollView>
    </Box>
  );
}
