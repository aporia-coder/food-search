import axios from "axios";
import { SET_LOADING, SET_RECIPES, SET_ERRORS } from "../types";

export const getRecipesAction = (search, cals, diet, recipesPerPage) => (
  dispatch,
) => {
  dispatch({ type: SET_LOADING });
  axios
    .get(
      `https://api.edamam.com/search?q=${search}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&from=0&to=50&calories=2-${cals}&health=${diet}`,
    )
    .then((res) => {
      const newData = res.data.hits.filter((recipe, i) => {
        return recipe.recipe.calories.toFixed(0) <= cals;
      });
      dispatch({ type: SET_RECIPES, payload: newData });
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS });
    });
};
