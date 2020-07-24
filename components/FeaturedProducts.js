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
      id: 6,
      name: "Caramel Cappuccino",
      desc: "Tasty Cappuccino infused with Caramel Sauce",
      image: CoffeeCupLarge01,
      price: "19.00",
    },
    {
      id: 19,
      name: "Decaf Espresso",
      desc: "Decaffienated espresso made with fresh beans",
      image: CoffeeCupLarge01,
      price: "15.00",
    },
  ];

  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Carousel
          data={featuredItems}
          layout={"default"}
          renderItem={({ item, index }) => (
            <FeaturedProduct featuredItem={item} />
          )}
          sliderWidth={400}
          itemWidth={370}
        />
      </View>
    </View>
  );
}
