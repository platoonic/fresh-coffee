/*
 *
 *  User Redux Reducer
 *
 */

const user = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case "LOGIN":
      newState = Object.assign(
        {
          user: action.user,
        },
        state
      );

      return newState;
    case "ADD_ADDRESS":
      newState = Object.assign(
        {
          address: action.address,
        },
        state
      );
    default:
      return state;
  }
};

export default user;
