import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
// Icons
import { Entypo } from "@expo/vector-icons";
// UI Components
import CustomText from "./CustomText";

// Dropdown Item
const Item = ({ name, value, setIsExpanded, setCurrentItem }) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        setCurrentItem(name, value);
        setIsExpanded(false);
      }}
    >
      <CustomText style={[styles.CustomTextStyle, { color: "white" }]}>
        {name}
      </CustomText>
    </TouchableOpacity>
  );
};

function buildObjectsFromItems(items) {
  // Build an array of objects for values
  const locations = items.map((location) => {
    return {
      name: location,
      value: location.toLowerCase().split(" ").join("-"),
    };
  });
  return locations;
}

// Dropdown Menu
export default function ({ title, items, customStyle, onChange }) {
  // Dropdown State
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentItem, setItem] = useState("");

  // Chevron switch based on expanded or not
  const chevronIconName = isExpanded ? "chevron-thin-up" : "chevron-thin-down";

  // Convert items array to object array (to append value property)
  const itemsObject = buildObjectsFromItems(items);

  // onChange
  const setCurrentItem = (name, value) => {
    if (onChange) onChange(value);
    setItem(name);
  };

  useEffect(() => {
    setItem(title);
  }, [title]);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <View style={[styles.container, customStyle]}>
          <CustomText style={styles.CustomTextStyle}>{currentItem}</CustomText>
          {items.length > 0 && (
            <Entypo
              name={chevronIconName}
              size={16}
              style={[
                styles.chevronDown,
                { transform: [{ rotateY: "200deg" }] },
              ]}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
      {isExpanded && (
        <TouchableOpacity>
          <FlatList
            data={itemsObject}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => {
              return (
                <Item
                  setCurrentItem={setCurrentItem}
                  setIsExpanded={setIsExpanded}
                  name={item.name}
                  value={item.value}
                />
              );
            }}
          />
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EBEBEB",
    padding: 17,
    marginVertical: 10,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15.65,
    elevation: 8,
  },
  CustomTextStyle: {
    color: "#8A8A8A",
    fontSize: 16,
  },
  item: {
    backgroundColor: "#595959",
    padding: 17,
    marginVertical: 3,
    borderRadius: 50,
  },
  chevronDown: {
    color: "#8A8A8A",
    position: "absolute",
    right: 15,
    top: 18,
  },
});
