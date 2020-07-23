import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
// Components
import Header from "../components/Header";

import Products from "../components/Products";

export default function () {
  return (
    <>
      <Header showControls />
      <View style={styles.container}>
        <Products />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
  },
});
