import React from "react";
import { View, StyleSheet } from "react-native";
// Custom Font (FuturaBT)
import { useFonts } from "expo-font";
// UI Components
import Button from "../components/UI/Button";
import CustomText from "../components/UI/CustomText";
// Components
import CartItem from "./CartItem";
// Redux
import { connect } from "react-redux";
import { getCartItems } from "../redux/selectors/cartItems";

function Cart({ cartItems, cartTotal }) {
  // Cart component state
  const deliveryCharges = "10.00";
  const total = (Number(cartTotal) + Number(deliveryCharges)).toFixed(2);

  // Handle empty Cart
  if (cartItems.length === 0) {
    return (
      <View style={styles.container}>
        <CustomText style={[FuturaBT, { fontSize: 19, alignSelf: "center" }]}>
          Your Cart is Empty!
        </CustomText>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Render Cart Items */}
      <View style={styles.cartItems}>
        {cartItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              quantity={item.quantity}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </View>
      {/* Render Subtotal */}
      <View style={[styles.item, { marginTop: 15 }]}>
        <CustomText style={styles.title}>Subtotal</CustomText>
        <View style={styles.price}>
          <CustomText style={{ fontSize: 17, textAlign: "right" }}>
            ${cartTotal}
          </CustomText>
        </View>
      </View>
      {/* Render Delivery Charges */}
      <View style={[styles.item]}>
        <CustomText style={(styles.title, { color: "#ABABAB" })}>
          Delivery Charges
        </CustomText>
        <View style={styles.price}>
          <CustomText
            style={{ fontSize: 17, textAlign: "right", color: "#ABABAB" }}
          >
            ${deliveryCharges}
          </CustomText>
        </View>
      </View>
      {/* Render Total */}
      <View style={[styles.item, styles.total]}>
        <CustomText style={styles.title} bold>
          Total
        </CustomText>
        <View style={styles.price}>
          <CustomText style={{ fontSize: 17, textAlign: "right" }}>
            ${total}
          </CustomText>
        </View>
      </View>
      <Button>Checkout</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: "white",
    height: "100%",
  },
  cartItems: {
    borderBottomColor: "#E2E2E2",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  item: {
    flexDirection: "row",
    marginBottom: 17,
  },
  title: {
    fontSize: 17,
    flex: 1.3,
    paddingTop: 7,
  },
  price: {
    flex: 1,
    textAlign: "right",
    paddingTop: 7,
  },
  quantity: {
    flex: 0.3,
    backgroundColor: "#B4B590",
    borderRadius: 50,
    width: 20,
    paddingVertical: 7,
  },
  total: {
    marginTop: 13,
  },
});

const mapStateToProps = (state) => {
  const { cartItems, cartTotal } = getCartItems(state);
  return {
    cartItems,
    cartTotal,
  };
};

export default connect(mapStateToProps, null)(Cart);
