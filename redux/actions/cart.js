/*
 *
 * Cart Redux Actions
 *
 */

export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  item,
});

export const removeFromCart = (itemID) => ({
  type: "REMOVE_FROM_CART",
  itemID,
});

export const increaseQuantity = (itemID) => ({
  type: "INCRASE_QUANTITY",
  itemID,
});

export const decreaseQuantity = (itemID) => ({
  type: "DECREASE_QUANTITY",
  itemID,
});
