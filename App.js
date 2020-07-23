import React from "react";
import { SafeAreaView, View } from "react-native";
// UI Components
import Button from "./components/UI/Button";
import TextField from "./components/UI/TextField";
// Custom Fonts
import { useFonts } from "expo-font";

export default function App() {
  // Custom Font (FuturaBT)
  const [fontsLoaded] = useFonts({
    "FuturaBT-Medium": require("./assets/fonts/FuturaBT-Medium.ttf"),
  });
  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <Button disabled>Disabled</Button>
        <Button>Confirm</Button>
        <TextField placeholder="Username" />
        <TextField placeholder="Password" />
      </View>
    </SafeAreaView>
  );
}
