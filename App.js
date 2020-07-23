import React from "react";
import { SafeAreaView, View } from "react-native";
// UI Components
import Button from "./components/UI/Button";
import TextField from "./components/UI/TextField";
import Dropdown from "./components/UI/Dropdown";
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
        <Dropdown
          items={[
            {
              name: "Alexandria",
              value: "alexandria",
            },
            {
              name: "Cairo",
              value: "cairo",
            },
            {
              name: "Marsa Matrouh",
              value: "marsa-matrouh",
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
}
