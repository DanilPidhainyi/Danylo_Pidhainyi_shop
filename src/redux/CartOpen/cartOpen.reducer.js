import { cartIsOpenType } from "./cartOpen.types";

const INITIAL_STATE = {
  cartIsOpen: "close",
};

const cartIsOpenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartIsOpenType.SET_CART_OPEN:
      return {
        ...state,
        cartIsOpen: action.payload.cartIsOpen,
      };
    default:
      return state;
  }
};

export default cartIsOpenReducer;
