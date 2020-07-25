import React from "react";
import { Text } from "react-native";
// Custom Font (FuturaBT)
import { useFonts } from "expo-font";

// Text component with a custom font
export default function CustomText({ style, bold, children }) {
  // Custom Font (FuturaBT)
  const [fontsLoaded] = useFonts({
    "FuturaBT-Medium": require("../../assets/fonts/FuturaBT-Medium.ttf"),
    "Futura-Bold": require("../../assets/fonts/Futura-Bold.ttf"),
  });

  const FuturaBT = {};
  const FuturaBTBold = {};

  if (fontsLoaded) {
    FuturaBT.fontFamily = "FuturaBT-Medium";
    FuturaBTBold.fontFamily = "Futura-Bold";
  }
  const textStyle = [];
  bold ? textStyle.push(FuturaBTBold) : textStyle.push(FuturaBT);
  Array.isArray(style) ? textStyle.push([...style]) : textStyle.push(style);

  return <Text style={textStyle}>{children}</Text>;
}
