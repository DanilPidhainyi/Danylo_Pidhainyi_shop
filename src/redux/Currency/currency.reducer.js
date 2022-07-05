import { currencyTypes } from "./currency.types";

const INITIAL_STATE = {
  currentCurrency: "$",
};

const currencyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case currencyTypes.SET_CURRENT_CURRENCY:
      return { currentCurrency: action.payload.currentCurrency };
    default:
      return state;
  }
};

export default currencyReducer;
