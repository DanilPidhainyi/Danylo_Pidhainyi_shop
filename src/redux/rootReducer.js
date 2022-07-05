import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import currencyReducer from "./Currency/currency.reducer";
import categoryReducer from "./Category/category.reducer";
import productIDReducer from "./ProductID/productID.reducer";
import cartIsOpenReducer from "./CartOpen/cartOpen.reducer";
import cartReducer from "./Cart/cart.reducer";

export const rootReducer = combineReducers({
  currentCurrency: currencyReducer,
  currentCategory: categoryReducer,
  currentProductID: productIDReducer,
  cartIsOpen: cartIsOpenReducer,
  cartData: cartReducer,
});

const configStorage = {
  key: `root`,
  storage,
  whitelist: [
    "cartData",
    "currentCurrency",
    "currentCategory",
    "currentProductID",
  ],
};

export default persistReducer(configStorage, rootReducer);
