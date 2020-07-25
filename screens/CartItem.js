import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
// UI Components
import CustomText from "../components/UI/CustomText";
// RN Pickr
import RNPickerSelect from "react-native-picker-select";
// Icons
import { Entypo } from "@expo/vector-icons";
// Redux
import { connect } from "react-redux";
import { changeQuantity } from "../redux/actions/cart";

function CartItem({ id, name, quantity, price, changeQuantity }) {
  const maximumQuantity = 10;
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
          items={new Array(maximumQuantity).fill({}).map((item, index) => ({
            label: String(index + 1),
            value: index + 1,
          }))}
          value={quantity}
          Icon={() => {
            return (
              <Entypo
                name="chevron-thin-down"
                size={16}
                style={[styles.chevronDown]}
              />
            );
          }}
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
  chevronDown: {
    color: "#cbcca7",
    paddingTop: 9,
  },
});

const pickerStyles = StyleSheet.create({
  inputIOS: {
    textAlign: "center",
    color: "white",
    paddingTop: 7,
    paddingLeft: 6,
    fontWeight: "bold",
    fontSize: 17,
    width: 30,
  },
  iconContainer: {
    marginRight: 9,
  },
});

const mapDispatchToProps = (dispatch) => ({
  changeQuantity: (itemID, newQuantity) => {
    dispatch(changeQuantity(itemID, newQuantity));
  },
});

export default connect(null, mapDispatchToProps)(CartItem);
