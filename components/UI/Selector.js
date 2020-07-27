import React, { useState } from "react";
import CustomText from "./CustomText";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ({ items, activeItem, onChange }) {
  const [active, setActive] = useState(activeItem);
  return (
    <View style={styles.selector}>
      {items.map((item) => {
        return (
          <TouchableOpacity
            key={item}
            style={styles.itemContainer}
            onPress={() => {
              onChange(item);
              setActive(item);
            }}
          >
            <View
              style={[styles.circle, item == active ? styles.activeCircle : {}]}
            ></View>
            <CustomText
              style={[styles.item, item == active ? styles.active : {}]}
            >
              {item}
            </CustomText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    marginVertical: 15,
  },
  item: {
    fontSize: 17,
    color: "#999999",
    flex: 1,
  },
  active: {
    color: "black",
  },
  circle: {
    flex: 0.03,
    height: 10,
    marginTop: 5,
    marginRight: 10,
    backgroundColor: "#999999",
    borderRadius: 50,
  },
  activeCircle: {
    backgroundColor: "black",
  },
});
