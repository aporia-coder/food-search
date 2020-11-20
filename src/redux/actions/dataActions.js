import axios from "axios";
import { SET_LOADING, SET_RECIPES, SET_ERRORS } from "../types";

export const getRecipesAction = (search, cals, diet) => (dispatch) => {
  dispatch({ type: SET_LOADING });
  axios
    .get(
      `https://api.edamam.com/search?q=${search}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&from=0&to=50&calories=${cals}&health=${diet}`,
    )
    .then((res) => {
      dispatch({ type: SET_RECIPES, payload: res.data.hits });
      console.log(res.data.hits);
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS });
    });
};
