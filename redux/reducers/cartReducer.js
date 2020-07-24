/*
 *
 *  Cart Redux Reducer
 *
 */

const defaultCart = [
  {
    id: "2314",
    name: "Caramel Cappuccino",
    quantity: 1,
    price: "17.00",
  },
];

const cart = (state = defaultCart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [
        ...state,
        {
          id: action.item.id,
          name: action.item.name,
          price: action.item.price,
        },
      ];
    default:
      return state;
  }
};

export default cart;
