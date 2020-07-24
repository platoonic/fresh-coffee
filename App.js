import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
// Screens
import LocationSelection from "./screens/LocationSelection";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
// Custom Fonts
import { useFonts } from "expo-font";
// Status Bar
import { StatusBar } from "expo-status-bar";
// Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  // Custom Font (FuturaBT)
  const [fontsLoaded] = useFonts({
    "FuturaBT-Medium": require("./assets/fonts/FuturaBT-Medium.ttf"),
  });

  const FuturaBT = {};

  if (fontsLoaded) FuturaBT.fontFamily = "FuturaBT-Medium";

  // App component
  const [deliveryLocation, setDeliveryLocation] = useState(null);

  if (deliveryLocation === null) {
    return <LocationSelection setDeliveryLocation={setDeliveryLocation} />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerStyle: styles.header,
            headerTitleStyle: FuturaBT,
          }}
        />
      </Stack.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FBFCDD",
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
});
