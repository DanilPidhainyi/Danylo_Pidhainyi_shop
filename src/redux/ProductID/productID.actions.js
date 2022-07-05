import { productIDTypes } from "./productID.types";

export const setCurrentProductID = (currentProductID) => ({
  type: productIDTypes.SET_CURRENT_PRODUCT_ID,
  payload: currentProductID,
});
