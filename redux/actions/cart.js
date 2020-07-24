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
