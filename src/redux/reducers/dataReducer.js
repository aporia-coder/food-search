import {
  SET_LOADING,
  SET_RECIPES,
  SET_ERRORS,
  SET_MEAT,
  SET_CALORIES,
} from "../types";

const initialState = {
  recipes: [],
  loading: false,
  error: "",
  calories: "2500",
  meatPreference: "alcohol-free",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload],
        loading: false,
      };
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        error: "Please wait a few seconds and try again",
      };
    case SET_MEAT:
      return {
        ...state,
        meatPreference: action.payload,
      };
    case SET_CALORIES:
      return {
        ...state,
        calories: action.payload,
      };
    default:
      return initialState;
  }
}
