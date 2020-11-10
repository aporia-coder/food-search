import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import dotenv from "dotenv";

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

// Actions
import { setCaloriesAction } from "../redux/actions/dietActions";
import { setMeatAction } from "../redux/actions/dietActions";

const RecipeGrid = () => {
  const dispatch = useDispatch();
  const dietPreference = useSelector((state) => state.diet.meatPreference);
  const calories = useSelector((state) => state.diet.calories);
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const getRecipes = async () => {
    const data = await axios.get(
      `https://api.edamam.com/search?q=${searchQuery}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&from=0&to=10&calories=0-${calories}&health=alcohol-free`,
    );
    setRecipes((recipes) => [...recipes, ...data.data.hits]);
    setLoading(false);
    console.log(data.data.hits);
  };

  useEffect(() => {
    dotenv.config();
    // getRecipes();
  }, [searchQuery, calories]);

  return (
    <>
      <div className="m-y-3">
        <div className="container-diet flex-row">
          <div>
            <InputLabel>Diet</InputLabel>
            <Select
              native
              label="Diet"
              value={dietPreference}
              onChange={(event) => dispatch(setMeatAction(event.target.value))}
            >
              <option value="Vegan">Vegan</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Carnivore">Carnivore</option>
            </Select>
          </div>
          <TextField
            label="Search Recipes"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div>
            <p>calories</p>
            <Slider
              defaultValue={calories}
              min={0}
              max={3000}
              aria-labelledby="discrete-slider-small-steps"
              valueLabelDisplay="auto"
              onChangeCommitted={(e, value) =>
                dispatch(setCaloriesAction(value))
              }
            />
          </div>
        </div>
      </div>
      <>
        {loading ? (
          <div className="flex">
            <img src={Spinner} alt="Loading Spinner" className="center" />
          </div>
        ) : (
          <div className="recipe-grid container-recipe m-y-2">
            {recipes.map((recipe, i) => (
              <>
                <Recipe
                  recipeName={recipe.recipe.label}
                  calories={`Calories: ${recipe.recipe.calories.toFixed(0)}`}
                  recipeImage={recipe.recipe.image}
                  healthLabels={recipe.recipe.healthLabels}
                  key={i}
                />
              </>
            ))}
          </div>
        )}
      </>
    </>
  );
};

export default RecipeGrid;
