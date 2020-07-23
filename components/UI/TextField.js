import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function ({ placeholder }) {
  // Custom Font (FuturaBT)
  const [fontsLoaded] = useFonts({
    "FuturaBT-Medium": require("../../assets/fonts/FuturaBT-Medium.ttf"),
  });

  // Add custom font (Use default system font until the font loads)
  let buttonFont = {};

  if (fontsLoaded) buttonFont.fontFamily = "FuturaBT-Medium";

  return (
    <TextInput style={[styles.input, buttonFont]} placeholder={placeholder} />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    padding: 17,
    fontSize: 16,
    borderRadius: 50,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15.65,
    elevation: 8,
  },
});
