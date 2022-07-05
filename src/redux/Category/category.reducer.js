import { categoryTypes } from "./category.types";

const INITIAL_STATE = {
  currentCategory: "all",
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case categoryTypes.SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload.currentCategory,
      };
    default:
      return state;
  }
};

export default categoryReducer;
