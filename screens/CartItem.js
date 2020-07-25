import React from "react";
import { View, StyleSheet } from "react-native";
// UI Components
import CustomText from "../components/UI/CustomText";

export default function CartItem({ id, name, quantity, price }) {
  return (
    <View style={styles.item} key={id}>
      <CustomText style={styles.title}>{name}</CustomText>
      <View style={styles.quantity}>
        <CustomText
          style={{ fontSize: 17, textAlign: "center", color: "white" }}
        >
          {quantity}
        </CustomText>
      </View>
      <View style={styles.price}>
        <CustomText style={{ fontSize: 17, textAlign: "right" }}>
          ${price}
        </CustomText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
