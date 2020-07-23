import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View } from "react-native";
// UI Components
import Button from "./components/UI/Button";

export default function App() {
  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <Button disabled>Disabled</Button>
        <Button>Confirm</Button>
      </View>
    </SafeAreaView>
  );
}
