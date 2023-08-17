import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Box, Button, Heading, Input,WarningOutlineIcon } from "native-base";
import Colors from "../data/color";
import { useFormik } from "formik";
import validation from "../Components/validation";
import { MaterialIcons, Entypo, EvilIcons } from "@expo/vector-icons";

export default function RegisterScreen() {
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        fullName: "",
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
        Sing Up
      </Heading>
      <Box w="full" h="full" mt={2}>
        <Input
          placeholder="FirstName LastName"
          variant="underlined"
          w="70%"
          pl={2}
          color={Colors.white}
          mx="auto"
          mb={1}
          placeholderTextColor="white"
          size="xl"
          value={values.fullName}
          onChangeText={handleChange("fullName")}
          onBlur={handleBlur("fullName")}
          InputLeftElement={<EvilIcons name="user" size={28} color="orange" />}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {errors.fullName && touched.fullName && (
          <Text leftIcon={<WarningOutlineIcon size="2" />} style={styles.error}>
            {errors.fullName}
          </Text>
        )}
        <Input
          placeholder="user@gmail.com"
          variant="underlined"
          w="70%"
          pl={2}
          color={Colors.white}
          mx="auto"
          placeholderTextColor="white"
          size="xl"
          mb={1}
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
          <Text leftIcon={<WarningOutlineIcon size="2" />} style={styles.error}>{errors.email}</Text>
        )}
        <Input
          placeholder="**********"
          variant="underlined"
          w="70%"
          mx="auto"
          value={values.password}
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          mb={1}
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
          <Text leftIcon={<WarningOutlineIcon size="2" />} style={styles.error}>
            {errors.password}
          </Text>
        )}
        <Button
          _pressed={{
            bg: Colors.orange,
          }}
          my={15}
          rounded={50}
          w="40%"
          mx="auto"
          onPress={handleSubmit}
        >
          Sing Up
        </Button>
        <Pressable mt={2}>
          <Text
            style={{
              color: Colors.orange,
              textAlign: "center",
              fontSize: 18,
              opacity: 0.6,
            }}
          >
            Login
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
  error:{
    marginBottom:4,
    color:"orange",
    textAlign:"center"
  }
});
