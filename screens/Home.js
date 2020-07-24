import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
// Components
import Header from "../components/Header";
import Products from "../components/Products";

export default function ({ navigation }) {
  return (
    <>
      <Header navigation={navigation} showControls />
      <Products />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
