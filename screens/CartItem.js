import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
// UI Components
import CustomText from "../components/UI/CustomText";
// RN Pickr
import RNPickerSelect from "react-native-picker-select";
// Redux
import { connect } from "react-redux";
import { changeQuantity } from "../redux/actions/cart";

function CartItem({ id, name, quantity, price, changeQuantity }) {
  return (
    <View style={styles.item} key={id}>
      <CustomText style={styles.title}>{name}</CustomText>
      <View style={styles.quantity}>
        <RNPickerSelect
          onValueChange={(value) => {
            changeQuantity(id, value);
          }}
          placeholder={{}}
          style={pickerStyles}
          items={[
            { label: "1", value: 1 },
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
            { label: "5", value: 5 },
            { label: "6", value: 6 },
            { label: "7", value: 7 },
            { label: "8", value: 8 },
            { label: "9", value: 9 },
            { label: "10", value: 10 },
          ]}
          value={quantity}
        />
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
    flex: 0.4,
    borderRadius: 20,
    backgroundColor: "#B4B590",
    paddingBottom: 7,
  },
});

const pickerStyles = StyleSheet.create({
  inputIOS: {
    textAlign: "center",
    color: "white",
    paddingTop: 7,
    fontWeight: "bold",
    fontSize: 17,
  },
});

const mapDispatchToProps = (dispatch) => ({
  changeQuantity: (itemID, newQuantity) => {
    dispatch(changeQuantity(itemID, newQuantity));
  },
});

export default connect(null, mapDispatchToProps)(CartItem);
