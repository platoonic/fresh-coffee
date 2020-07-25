/*
 *
 * Add to cart native alert
 *  @item: cart item object
 *  @cartTotal: total cart price
 *  @addToCart: function to be invoked to add the item to cart
 *
 */
import { Alert } from "react-native";

export default function (item, cartTotal, addToCart) {
  Alert.alert("Add " + item.name, "Cart Subtotal: $" + cartTotal, [
    {
      text: "Cancel",
      style: "cancel",
    },
    {
      text: "Add",
      onPress: () => addToCart(item),
    },
  ]);
}
