import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { useFonts } from "expo-font";
import { Entypo } from "@expo/vector-icons";

// Dropdown Item
const Item = ({ name, setIsExpanded, setCurrentItem }) => {
  // Custom Font (FuturaBT)
  const [fontsLoaded] = useFonts({
    "FuturaBT-Medium": require("../../assets/fonts/FuturaBT-Medium.ttf"),
  });

  // Add custom font (Use default system font until the font loads)
  let buttonFont = {
    fontSize: 16,
    color: "white",
  };

  if (fontsLoaded) buttonFont.fontFamily = "FuturaBT-Medium";

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        setCurrentItem(name);
        setIsExpanded(false);
      }}
    >
      <Text style={buttonFont}>{name}</Text>
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
export default function ({ title, items }) {
  // Custom Font (FuturaBT)
  const [fontsLoaded] = useFonts({
    "FuturaBT-Medium": require("../../assets/fonts/FuturaBT-Medium.ttf"),
  });

  // Dropdown State
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentItem, setCurrentItem] = useState("");

  // Add custom font (Use default system font until the font loads)
  let buttonFont = {};

  if (fontsLoaded) buttonFont.fontFamily = "FuturaBT-Medium";

  // Chevron switch based on expanded or not
  const chevronIconName = isExpanded ? "chevron-thin-up" : "chevron-thin-down";

  // Convert items array to object array (to append value property)
  const itemsObject = buildObjectsFromItems(items);

  useEffect(() => {
    setCurrentItem(title);
  }, [title]);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <View style={styles.container}>
          <Text style={[styles.textStyle, buttonFont]}>{currentItem}</Text>
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
  textStyle: {
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
