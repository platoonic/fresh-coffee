import React from "react";
import { View, StyleSheet, Image } from "react-native";
// UI Components
import Button from "../components/UI/Button";
import CustomText from "../components/UI/CustomText";
// Redux
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cart";
import { getCartItems } from "../redux/selectors/cartItems";
// utils
import addToCartAlert from "./utils/addToCartAlert";

function Product({ id, name, price, image, addToCart, cartTotal }) {
  const addItemToCart = () => {
    const item = {
      id,
      name,
      price,
      quantity: 1,
    };
    addToCartAlert(item, cartTotal, addToCart);
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={{ width: 111, height: 170 }} />
      <CustomText style={styles.name}>{name}</CustomText>
      <CustomText style={styles.price}>${price}</CustomText>
      <Button onPress={() => addItemToCart()}>Add to Cart</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 30,
    width: "50%",
    alignItems: "center",
    marginBottom: 30,
  },
  name: {
    fontSize: 18,
    paddingTop: 15,
  },
  price: {
    color: "#909090",
    paddingTop: 5,
    paddingBottom: 10,
  },
});

const mapStateToProps = (state) => {
  const { cartTotal } = getCartItems(state);
  return {
    cartTotal,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
