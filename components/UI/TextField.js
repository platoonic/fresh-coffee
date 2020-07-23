import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function ({ placeholder }) {
  // Custom Font (FuturaBT)
  const [fontsLoaded] = useFonts({
    "FuturaBT-Medium": require("../../assets/fonts/FuturaBT-Medium.ttf"),
  });

  return <TextInput style={styles.input} placeholder={placeholder} />;
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    padding: 17,
    fontFamily: "FuturaBT-Medium",
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

/*

background: #FFFFFF;
box-shadow: 0 2px 20px 0 rgba(0,0,0,0.06);
border-radius: 25px;

*/
