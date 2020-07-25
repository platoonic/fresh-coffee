import { createSelector } from "reselect";

// Extract cart items from Redux store
const cartItems = (state) => state.cartReducer;

// Calculate total price of cart items
const calculateTotal = (cartItems) => {
  const totalPrice = cartItems.reduce((sum, item) => {
    const price = Number(item.price) * item.quantity;
    return sum + price;
  }, 0);
  return totalPrice.toFixed(2);
};

// Count the number of items in cart
const countItems = (cartItems) => {
  const count = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  return count;
};

export const getCartItems = createSelector([cartItems], (cartItems) => {
  return {
    cartItems,
    cartTotal: calculateTotal(cartItems),
    cartCount: countItems(cartItems),
  };
});
