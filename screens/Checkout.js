import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
// UI Components
import CustomText from "../components/UI/CustomText";
import Button from "../components/UI/Button";
// Redux
import { connect } from "react-redux";
import { getCartItems } from "../redux/selectors/cartItems";

function Checkout({ cartTotal }) {
  const total = (Number(cartTotal) + 10.0).toFixed(2);
  return (
    <View style={styles.container}>
      <View style={[styles.item, styles.total]}>
        <CustomText style={styles.title} bold>
          Order Total
        </CustomText>
        <View style={styles.price}>
          <CustomText style={{ fontSize: 17, textAlign: "right" }} bold>
            ${total}
          </CustomText>
        </View>
      </View>
      <Button>Login</Button>
      <Button color="darkGreen">Continue as a Guest</Button>
      <TouchableOpacity style={styles.register}>
        <CustomText style={styles.registerAnchor}>
          Create a new Account
        </CustomText>
        <CustomText style={styles.registerText}>
          it only takes few seconds!
        </CustomText>
      </TouchableOpacity>
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
  item: {
    flexDirection: "row",
    marginBottom: 17,
    borderBottomColor: "#E2E2E2",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 20,
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
  register: {
    alignSelf: "center",
    marginTop: 15,
  },
  registerAnchor: {
    color: "#5F8CD5",
    fontSize: 18,
    paddingBottom: 5,
    textAlign: "center",
  },
  registerText: {
    textAlign: "center",
    color: "#A6A6A6",
  },
});

const mapStateToProps = (state) => {
  const { cartTotal } = getCartItems(state);
  return {
    cartTotal,
  };
};

export default connect(mapStateToProps, null)(Checkout);
