import { categoryTypes } from "./category.types";

export const setCurrentCategory = (currentCategory) => ({
  type: categoryTypes.SET_CURRENT_CATEGORY,
  payload: currentCategory,
});
