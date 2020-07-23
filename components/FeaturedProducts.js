import React from "react";
import { View } from "react-native";
// Images
import CoffeeCupLarge01 from "../assets/CoffeeCupLarge01.png";
// Carousel component
import Carousel from "react-native-snap-carousel";
// Components
import FeaturedProduct from "./FeaturedProduct";

// Featured Products component
export default function () {
  const featuredItems = [
    {
      name: "Caramel Cappuccino",
      desc: "Tasty Cappuccino infused with Caramel Sauce",
      image: CoffeeCupLarge01,
      price: "$17.00",
    },
    {
      name: "Espresso",
      desc: "Tasty espresso made with fresh beans",
      image: CoffeeCupLarge01,
      price: "$12.00",
    },
  ];

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Carousel
          data={featuredItems}
          layout={"default"}
          renderItem={({ item, index }) => <FeaturedProduct item={item} />}
          sliderWidth={400}
          itemWidth={370}
        />
      </View>
    </View>
  );
}
