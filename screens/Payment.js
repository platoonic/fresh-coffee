import React, { useState, useEffect } from "react";
import { View, StyleSheet, YellowBox, ScrollView } from "react-native";
// UI Components
import Button from "../components/UI/Button";
import Selector from "../components/UI/Selector";
// Components
import Cart from "./Cart";
import CustomText from "../components/UI/CustomText";
// Credit Card Input Package
import { CreditCardInput } from "react-native-credit-card-input";
// Keyboard Aware View Package
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

YellowBox.ignoreWarnings([
  "componentWillReceiveProps has been renamed, and is not recommended for use. See https://fb.me/react-unsafe-component-lifecycles for details.",
]);

export default function () {
  const [paymentMethod, setPaymentMethod] = useState("Payment on Delivery");
  const [showCardForm, setShowCardForm] = useState(false);
  const [cardInformation, setCardInformation] = useState({});

  useEffect(() => {
    paymentMethod == "Credit/Debit Card"
      ? setShowCardForm(true)
      : setShowCardForm(false);
  }, [paymentMethod]);
  return (
    <KeyboardAwareScrollView style={styles.container} extraHeight={120}>
      <View style={{ paddingVertical: 30 }}>
        <Cart payment />
        <Selector
          activeItem={paymentMethod}
          items={["Payment on Delivery", "Credit/Debit Card"]}
          onChange={(paymentMethod) => {
            setPaymentMethod(paymentMethod);
          }}
        />
        {showCardForm && (
          <View>
            <CreditCardInput
              inputStyle={styles.cardInput}
              inputContainerStyle={styles.cardInputContainer}
              requiresName={true}
              onChange={(card) => setCardInformation(card)}
              allowScroll={false}
            />
          </View>
        )}
        <Button>Confirm</Button>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "white",
    flex: 1,
  },
  cardInput: {
    backgroundColor: "white",
    padding: 15,
    height: 55,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 20,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 15.65,
    elevation: 8,
  },
  cardInputContainer: {
    borderBottomWidth: 0,
  },
});
