import React from "react";
import { View, StyleSheet, Image } from "react-native";
// Helpers
import { LinearGradient } from "expo-linear-gradient";
// UI Components
import Button from "./UI/Button";
import CustomText from "./UI/CustomText";
// Redux
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cart";

function FeaturedProduct({ featuredItem, addToCart }) {
  const addItemToCart = () => {
    const item = {
      id: featuredItem.id,
      name: featuredItem.name,
      price: featuredItem.price,
      quantity: 1,
    };
    addToCart(item);
  };

  return (
    <>
      <View style={styles.featuredProduct}>
        <Image source={featuredItem.image} style={styles.largeCoffeeCup} />
        <LinearGradient
          colors={["#DCD5C0", "#564F3A"]}
          style={styles.featuredProductData}
        >
          <View style={styles.dataWrapper}>
            <View style={styles.featuredProductTitle}>
              <CustomText style={styles.featuredProductTitle} bold>
                {featuredItem.name}
              </CustomText>
              <CustomText style={styles.featuredProductDesc}>
                {featuredItem.desc}
              </CustomText>
            </View>
            <View style={styles.featuredProductPrice}>
              <CustomText
                style={{ fontSize: 16, color: "#CAC1A7", paddingTop: 20 }}
              >
                ${featuredItem.price}
              </CustomText>
            </View>
          </View>
        </LinearGradient>
      </View>
      <Button
        onPress={() => {
          addItemToCart();
        }}
        customStyles={styles.cartButton}
      >
        ADD TO CART
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  largeCoffeeCup: {
    width: 170,
    height: 259,
    position: "absolute",
    zIndex: 999,
    alignSelf: "center",
  },
  featuredProduct: {
    width: 370,
  },
  featuredProductData: {
    marginTop: 135,
    padding: 20,
    height: 250,
    justifyContent: "flex-end",
  },
  featuredProductTitle: {
    color: "#F9F2DC",
    fontSize: 21,
    flex: 4,
    height: 70,
  },
  featuredProductPrice: {
    flex: 1,
    height: 70,
  },
  featuredProductDesc: {
    color: "#C1B17F",
    fontSize: 15,
    width: "70%",
  },
  dataWrapper: {
    flexDirection: "row",
  },
  cartButton: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 0,
    marginBottom: 30,
  },
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(FeaturedProduct);
