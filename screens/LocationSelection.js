import React, { useState, useEffect, useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
// UI Components
import Dropdown from "../components/UI/Dropdown";
import Button from "../components/UI/Button";
// Components
import Header from "../components/Header";
// Helpers
import * as Location from "expo-location";
import supportedLocations from "../components/utils/supportedLocations";
// Custom Font (FuturaBT)
import { useFonts } from "expo-font";
import supported_locations from "../components/utils/supportedLocations";

export default function ({ setDeliveryLocation }) {
  // Custom Font (FuturaBT)
  const [fontsLoaded] = useFonts({
    "FuturaBT-Medium": require("../assets/fonts/FuturaBT-Medium.ttf"),
  });

  const FuturaBT = {};

  if (fontsLoaded) FuturaBT.fontFamily = "FuturaBT-Medium";

  // LocationSelection component state
  const [location, setLocation] = useState("Loading...");
  const [locations, setLocations] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Please allow FreshCoffee to access your Location");
      }

      let coordinates = await Location.getCurrentPositionAsync({});
      let governate = await Location.reverseGeocodeAsync(coordinates.coords);
      setLocation(governate[0].city);
      if (supported_locations.indexOf(governate[0].city) == -1) {
        setErrorMsg("Sorry we don't currently deliver to your location :(");
      }
      setLocations(supportedLocations);
    })();
  }, [location]);

  return (
    <>
      <Header />
      <View style={styles.container}>
        {errorMsg && (
          <Text style={[styles.errorMessage, FuturaBT]}>{errorMsg}</Text>
        )}
        <View style={styles.deliveryLocation}>
          <Text style={[FuturaBT, { fontSize: 16 }]}>Delivery To: </Text>
          <Dropdown title={location} items={locations} />
          <Button
            onPress={() => {
              setDeliveryLocation(location);
            }}
            disabled={errorMsg === null ? false : true}
          >
            Continue
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  errorMessage: {
    color: "#A55959",
    fontSize: 24,
    textAlign: "center",
    paddingBottom: 25,
  },
});
