/*
 *
 * User Redux Actions
 *
 */

export const login = (user) => ({
  type: "LOGIN",
  user,
});

export const addAddress = (address) => ({
  type: "ADD_ADDRESS",
  address,
});
