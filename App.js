import React, { useState } from "react";
import { StyleSheet } from "react-native";
// Redux
import { Provider } from "react-redux";
import Store from "./redux/store";
// Screens
import LocationSelection from "./screens/LocationSelection";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
// Custom Fonts
import { useFonts } from "expo-font";
// Status Bar
import { StatusBar } from "expo-status-bar";
// Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// Drawer Navigation
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Homescreen = () => {
  // Custom Font (FuturaBT)
  const [fontsLoaded] = useFonts({
    "FuturaBT-Medium": require("./assets/fonts/FuturaBT-Medium.ttf"),
  });

  const FuturaBT = {};

  if (fontsLoaded) FuturaBT.fontFamily = "FuturaBT-Medium";
  return (
    <>
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
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{
            headerStyle: styles.header,
            headerTitleStyle: FuturaBT,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerStyle: styles.header,
            headerTitleStyle: FuturaBT,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerStyle: styles.header,
            headerTitleStyle: FuturaBT,
          }}
        />
      </Stack.Navigator>
      <StatusBar style="dark" />
    </>
  );
};

export default function App() {
  // REFECTOR HERE to save location in Redux store
  const [deliveryLocation, setDeliveryLocation] = useState(null);

  if (deliveryLocation === null) {
    return (
      <Provider store={Store}>
        <LocationSelection setDeliveryLocation={setDeliveryLocation} />
        <StatusBar style="dark" />
      </Provider>
    );
  }
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Homescreen} />
          <Drawer.Screen name="Login">
            {(props) => <Login {...props} showHeader />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
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
