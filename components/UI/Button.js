import React from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
} from "react-native";
import CustomText from "./CustomText";

export default function ({
  children,
  color,
  textColor,
  disabled,
  onPress,
  customStyles,
}) {
  const BGcolorMap = {
    green: "#B7D295",
    gray: "#595959",
    darkGreen: "#98A489",
    disabled: "#C6C6C6",
  };

  const textColorMap = {
    white: "#fff",
    gray: "#595959",
  };

  // Button color from props (Green by default)
  const buttonBG = {
    backgroundColor: color === undefined ? BGcolorMap.green : BGcolorMap[color],
  };

  // Button color in case of a disabled button
  const buttonBGdisabled = {
    backgroundColor: BGcolorMap.disabled,
  };

  // Handle Disabled Buttons
  if (disabled) {
    return (
      <TouchableWithoutFeedback>
        <View style={[styles.button, buttonBGdisabled, customStyles]}>
          <CustomText style={styles.buttonText}>{children}</CustomText>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  // Normal Active Buttons
  return (
    <TouchableOpacity
      style={[styles.button, buttonBG, customStyles]}
      onPress={onPress}
    >
      <CustomText style={styles.buttonText}>{children}</CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10.65,
    elevation: 8,
    marginVertical: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
});
