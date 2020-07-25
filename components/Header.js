import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
// UI Components
import CustomText from "../components/UI/CustomText";
// Images
import Logo from "../assets/logo.png";
// Icons
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
// Redux
import { connect } from "react-redux";
import { getCartItems } from "../redux/selectors/cartItems";

function Header({ showControls, navigation, cartCount }) {
  return (
    <View style={styles.header}>
      {showControls && (
        <View style={styles.icons}>
          <TouchableOpacity style={[styles.icon, styles.barsIcon]}>
            <FontAwesome name="bars" size={24} color="black" />
          </TouchableOpacity>
          {cartCount > 0 && (
            <View style={styles.cartQuantity}>
              <CustomText style={{ color: "white" }}>{cartCount}</CustomText>
            </View>
          )}
          <TouchableOpacity
            style={[styles.icon, styles.cartIcon]}
            onPress={() => {
              navigation.navigate("Cart");
            }}
          >
            <Feather name="shopping-cart" size={24} color="black" />
          </TouchableOpacity>
        </View>
      )}
      <Image source={Logo} style={{ width: 173, height: 130 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FBFCDD",
    paddingTop: 70,
    paddingBottom: 35,
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    backgroundColor: "blue",
    width: "100%",
  },
  icon: {
    width: 24,
    height: 24,
  },
  barsIcon: {
    position: "absolute",
    left: 20,
  },
  cartIcon: {
    position: "absolute",
    right: 20,
  },
  cartQuantity: {
    backgroundColor: "#bf6262",
    position: "absolute",
    paddingVertical: 3,
    paddingHorizontal: 9,
    zIndex: 99,
    borderRadius: 30,
    right: 50,
    top: 0,
  },
});

const mapStateToProps = (state) => {
  const { cartCount } = getCartItems(state);
  return {
    cartCount,
  };
};

export default connect(mapStateToProps, null)(Header);
