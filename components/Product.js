import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
// UI Components
import Buttom from "../components/UI/Button";
// Custom Font (FuturaBT)
import { useFonts } from "expo-font";

export default function ({ name, price, image }) {
  // Custom Font (FuturaBT)
  const [fontsLoaded] = useFonts({
    "FuturaBT-Medium": require("../assets/fonts/FuturaBT-Medium.ttf"),
  });

  const FuturaBT = {};

  if (fontsLoaded) FuturaBT.fontFamily = "FuturaBT-Medium";
  return (
    <View style={styles.container}>
      <Image source={image} style={{ width: 111, height: 170 }} />
      <Text style={[styles.name, FuturaBT]}>{name}</Text>
      <Text style={[styles.price, FuturaBT]}>{price}</Text>
      <Buttom>Add to Cart</Buttom>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 30,
    width: "50%",
    alignItems: "center",
    marginBottom: 30,
  },
  name: {
    fontSize: 18,
    paddingTop: 15,
  },
  price: {
    color: "#909090",
    paddingTop: 5,
    paddingBottom: 10,
  },
});
