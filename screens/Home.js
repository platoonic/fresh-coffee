import React from "react";
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
