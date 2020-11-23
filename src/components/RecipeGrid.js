import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import dotenv from "dotenv";
import uuid from "react-uuid";

// Types
import { SET_CALORIES, SET_MEAT } from "../redux/types";

// Images
import Spinner from "../assets/img/icons/spinner.svg";

// Components
import Recipe from "./Recipe";

// MUI
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";

// Actions
import { getRecipesAction } from "../redux/actions/dataActions";

const RecipeGrid = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const dietPreference = useSelector((state) => state.meatPreference);
  const calories = useSelector((state) => state.calories);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(5);
  const [recipesPerPage, setRecipesPerPage] = useState(10);
  const initialRequest = "curry";

  // Pagination
  // let numberOfPages = Math.ceil(recipes.length / recipesPerPage);
  let lastRecipeIndex = currentPage * recipesPerPage;
  let firstRecipeIndex = lastRecipeIndex - recipesPerPage;
  let currentRecipes = recipes.slice(firstRecipeIndex, lastRecipeIndex);

  const useStyles = makeStyles((theme) => ({
    progress: {
      position: "absolute",
    },
  }));

  // const setPages = () => {
  //   setNumberOfPages(Math.ceil(recipes.length / recipesPerPage));
  // };

  useEffect(() => {
    dispatch(getRecipesAction(initialRequest, calories, dietPreference));
    // if (recipes) {
    //   setNumberOfPages(Math.ceil(recipes.length / recipesPerPage));
    // }
  }, []);

  console.log(recipes);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getRecipesAction(searchQuery, calories, dietPreference));
    handlePagination();
  };

  // const handleCaloriesChange = (e, value) => {
  //   dispatch(setCaloriesAction(value));
  //   dispatch(getRecipesAction(searchQuery, calories, dietPreference));
  // };

  // const handleMeatChange = (e) => {
  //   dispatch(setMeatAction(e.target.value));
  //   dispatch(getRecipesAction(searchQuery, calories, dietPreference));
  // };

  const handlePagination = (event, value) => {
    setCurrentPage(value);
  };

  const classes = useStyles();

  return (
    <>
      <div className="m-y-3">
        <form className="container-diet flex-row" onSubmit={handleSubmit}>
          <div>
            <InputLabel>Diet</InputLabel>
            <Select
              native
              label="Diet"
              value={dietPreference}
              onChange={(e) =>
                dispatch({ type: SET_MEAT, payload: e.target.value })
              }
            >
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="alcohol-free">Carnivore</option>
            </Select>
          </div>
          <TextField
            label="Search Recipes"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div>
            <p className="p-x-2">Calories</p>
            <Slider
              defaultValue={calories}
              min={2}
              max={3000}
              aria-labelledby="discrete-slider-small-steps"
              valueLabelDisplay="auto"
              onChangeCommitted={(event, value) =>
                dispatch({ type: SET_CALORIES, payload: value })
              }
            />
          </div>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={loading ? true : false}
          >
            search
          </Button>
        </form>
        {error && <h5 className="center">{error}</h5>}
        <div className="flex m-y-2">
          <Pagination
            count={numberOfPages}
            color="primary"
            onChange={handlePagination}
            disabled={loading ? true : false}
          />
        </div>
      </div>
      <>
        {loading ? (
          <div className="flex">
            <img src={Spinner} alt="Loading Spinner" className="center" />
          </div>
        ) : (
          <>
            <div className="recipe-grid container-recipe m-y-2">
              {currentRecipes.map((recipe, i) => (
                <>
                  <Recipe
                    recipeName={recipe.recipe.label}
                    calories={`Calories: ${recipe.recipe.calories.toFixed(0)}`}
                    recipeImage={recipe.recipe.image}
                    healthLabels={recipe.recipe.healthLabels}
                    ingredients={recipe.recipe.ingredients}
                    time={recipe.recipe.totalTime}
                    key={uuid()}
                  />
                </>
              ))}
            </div>
          </>
        )}
      </>
    </>
  );
};

export default RecipeGrid;
