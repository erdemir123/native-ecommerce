import { View, Text, Image, StyleSheet,  } from "react-native";
import React from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  ScrollView,
  WarningOutlineIcon,
  Pressable
} from "native-base";
import Colors from "../data/color";
import { MaterialIcons ,Entypo} from "@expo/vector-icons";

import { useFormik } from "formik";
import validation from "../Components/validation";

export default function LoginScreen() {
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: validation,
      onSubmit: async (values) => {
        await console.log(values);
      },
    });
  return (
    <Box bg={Colors.main} w="100%" h="100%" borderColor="red" borderWidth="1">
      <Image
        alt="logo"
        source={require("../../assets/pnlogin.png")}
        style={styles.img}
        resizeMode="contain"
      />
      <Heading color={Colors.orange} textAlign="center" mt={5}>
        LOGİN
      </Heading>
      <Box w="full" h="full" mt={2}>
        <Input
          placeholder="user@gmail.com"
          variant="underlined"
          w="70%"
          pl={2}
          color={Colors.white}
          mx="auto"
          placeholderTextColor="white"
          size="xl"
          value={values.email}
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          InputLeftElement={
            <MaterialIcons name="email" size={24} color="orange" />
          }
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {errors.email && touched.email && (
          <Text leftIcon={<WarningOutlineIcon size="2" />}>{errors.email}</Text>
        )}
        <Input
          placeholder="**********" 
          variant="underlined"
          w="70%"
          mx="auto"
          value={values.password}
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          mt={4}
          pl={2}
          placeholderTextColor="white"
          size="lg"
          color={Colors.white}
          InputLeftElement={
            <Entypo name="eye-with-line" size={24} color="orange" />
          }
          secureTextEntry={true}
          keyboardType="ascii-capable"
        />
        {errors.password && touched.password && (
          <Text leftIcon={<WarningOutlineIcon size="2" />}>{errors.password}</Text>
        )}
        <Button
          _pressed={{
            bg: Colors.orange,
          }}
          my={30}
          rounded={50}
          w="40%"
          mx="auto"
          onPress={handleSubmit}
        >
          Login
        </Button>
        <Pressable mt={4}>
          <Text
            style={{
              color: Colors.orange,
              textAlign: "center",
              fontSize: 24,
              opacity: 0.6,
            }}
          >
            Sing Up
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
}
const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 300,
    marginTop: 40,
  },
});
