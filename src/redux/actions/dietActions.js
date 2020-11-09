import { SET_MEAT, SET_CALORIES } from "../types";

export const setMeatAction = (meat) => (dispatch) => {
  dispatch({ type: SET_MEAT, payload: meat });
};

export const setCaloriesAction = (calories) => (dispatch) => {
  dispatch({ type: SET_CALORIES, payload: calories });
};
