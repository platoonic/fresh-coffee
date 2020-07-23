import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
// Screens
import LocationSelection from "./screens/LocationSelection";
// Custom Fonts
import { useFonts } from "expo-font";
// Status Bar
import { StatusBar } from "expo-status-bar";

export default function App() {
  // Custom Font (FuturaBT)
  const [fontsLoaded] = useFonts({
    "FuturaBT-Medium": require("./assets/fonts/FuturaBT-Medium.ttf"),
  });
  const [deliveryLocation, setDeliveryLocation] = useState(null);

  let screen;
  if (deliveryLocation === null) {
    screen = <LocationSelection setDeliveryLocation={setDeliveryLocation} />;
  }
  return (
    <>
      {screen}
      <StatusBar style="dark" />
    </>
  );
}
