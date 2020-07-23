import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
// Images
import Logo from "../assets/logo.png";
// Icons
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function ({ showControls }) {
  return (
    <View style={styles.header}>
      {showControls && (
        <View style={styles.icons}>
          <TouchableOpacity style={[styles.icon, styles.barsIcon]}>
            <FontAwesome name="bars" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.icon, styles.cartIcon]}>
            <Feather name="shopping-cart" size={24} color="black" />
          </TouchableOpacity>
        </View>
      )}
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
  icons: {
    flexDirection: "row",
    backgroundColor: "blue",
    width: "100%",
  },
  icon: {
    width: 24,
    height: 24,
  },
  barsIcon: {
    position: "absolute",
    left: 20,
  },
  cartIcon: {
    position: "absolute",
    right: 20,
  },
});
