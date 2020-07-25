/*
 *
 *  Cart Redux Reducer
 *
 */

const cart = (state = [], action) => {
  let newState = [];
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if item is already in Cart
      let exists = false;
      newState = [...state].map((item) => {
        if (item.id === action.item.id) {
          exists = true;
          item.quantity++;
        }
        return item;
      });
      if (exists) return newState;
      return [...state, action.item];
    case "CHANGE_QUANTITY":
      // Find the item in cart and change its quantity
      newState = [...state].map((item) => {
        if (item.id === action.itemID) {
          item.quantity = action.newQuantity;
        }
        return item;
      });
      return newState;
    default:
      return state;
  }
};

export default cart;
