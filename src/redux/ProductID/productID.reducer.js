import { productIDTypes } from "./productID.types";

const INITIAL_STATE = {
  currentProductID: {},
};

const productIDReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productIDTypes.SET_CURRENT_PRODUCT_ID:
      return { currentProductID: action.payload.currentProductID };
    default:
      return state;
  }
};

export default productIDReducer;
