import React from "react";
import { StyleSheet } from "react-native";
// Components
import Product from "./Product";
import FeaturedProducts from "../components/FeaturedProducts";
// Images
import CoffeeCup01 from "../assets/CoffeeCup01.png";
import { FlatList } from "react-native";

export default function () {
  const products = [
    {
      id: 1,
      name: "Espresso",
      price: "11.00",
      image: CoffeeCup01,
    },
    {
      id: 2,
      name: "Cappuccino",
      price: "14.00",
      image: CoffeeCup01,
    },
    {
      id: 3,
      name: "Flat White",
      price: "15.00",
      image: CoffeeCup01,
    },
    {
      id: 4,
      name: "Mocha",
      price: "14.00",
      image: CoffeeCup01,
    },
  ];
  return (
    <FlatList
      data={products}
      numColumns={2}
      contentContainerStyle={styles.products}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => {
        return (
          <Product
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        );
      }}
      ListHeaderComponent={FeaturedProducts}
    />
  );
}

const styles = StyleSheet.create({
  products: {
    paddingTop: 30,
    paddingBottom: 50,
    backgroundColor: "white",
  },
});
