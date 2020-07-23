import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function ({ placeholder }) {
  // Custom Font (FuturaBT)
  const [fontsLoaded] = useFonts({
    "FuturaBT-Medium": require("../../assets/fonts/FuturaBT-Medium.ttf"),
  });

  // Text Field State
  const [isFocused, setIsFocused] = useState(false);

  // Add custom font (Use default system font until the font loads)
  let buttonFont = {};

  if (fontsLoaded) buttonFont.fontFamily = "FuturaBT-Medium";

  // Add custom styling for focus state
  let buttonStyle = {};

  if (isFocused) buttonStyle = styles.buttonOnFocus;

  return (
    <TextInput
      style={[styles.input, buttonStyle, buttonFont]}
      onFocus={() => {
        setIsFocused(true);
      }}
      onBlur={() => {
        setIsFocused(false);
      }}
      placeholder={placeholder}
    />
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
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#fff",
  },
  buttonOnFocus: {
    borderColor: "#B7D295",
  },
});
