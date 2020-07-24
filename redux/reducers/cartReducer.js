/*
 *
 *  Cart Redux Reducer
 *
 */

const cart = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if item is already in Cart
      let exists = false;
      const newState = [...state].map((item) => {
        if (item.id === action.item.id) {
          exists = true;
          item.quantity++;
        }
        return item;
      });
      if (exists) {
        return newState;
      } else {
        return [...state, action.item];
      }
    default:
      return state;
  }
};

export default cart;
