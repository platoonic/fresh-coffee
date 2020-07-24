import { createSelector } from "reselect";

// Extract cart items from Redux store
const cartItems = (state) => state.cartReducer;

// Calculate total price of cart items
const calculateTotal = (cartItems) => {
  const totalPrice = cartItems.reduce((sum, item) => {
    const price = Number(item.price);
    return sum + price;
  }, 0);
  return totalPrice.toFixed(2);
};

export const getCartItems = createSelector([cartItems], (cartItems) => {
  return {
    cartItems,
    cartTotal: calculateTotal(cartItems),
  };
});
