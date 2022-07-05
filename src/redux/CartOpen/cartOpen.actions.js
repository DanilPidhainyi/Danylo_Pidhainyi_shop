import { cartIsOpenType } from "./cartOpen.types";

export const setCartOpen = (cartIsOpen) => ({
  type: cartIsOpenType.SET_CART_OPEN,
  payload: cartIsOpen,
});
