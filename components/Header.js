import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
// UI Components
import Dropdown from "./UI/Dropdown";
// Images
import Logo from "../assets/logo.png";

export default function () {
  return (
    <View style={styles.header}>
      <Image source={Logo} style={{ width: 173, height: 130 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FBFCDD",
    paddingTop: 70,
    paddingBottom: 35,
    alignItems: "center",
  },
});
