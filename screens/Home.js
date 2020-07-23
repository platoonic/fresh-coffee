import React from "react";
import { View, StyleSheet } from "react-native";
// Components
import Header from "../components/Header";
import FeaturedProducts from "../components/FeaturedProducts";

export default function () {
  return (
    <>
      <Header showControls />
      <View style={styles.container}>
        <FeaturedProducts />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
});
