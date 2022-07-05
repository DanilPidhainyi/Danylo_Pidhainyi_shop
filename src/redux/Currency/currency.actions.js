import { currencyTypes } from "./currency.types";

export const setCurrentCurrency = (currentCurrency) => ({
  type: currencyTypes.SET_CURRENT_CURRENCY,
  payload: currentCurrency,
});
