import { SET_MEAT, SET_CALORIES } from "../types";

const initialState = {
  meatPreference: "Carnivore",
  calories: 1500,
};

export default function (state = initialState, action) {
  switch (action.type) {
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
