import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import dotenv from "dotenv";

// Images
import Spinner from "../assets/img/icons/spinner.svg";

// Components
import Recipe from "./Recipe";

const RecipeGrid = () => {
  const calories = useSelector((state) => state.diet.calories);
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState("");
  const [healthLabels, setHealthLabels] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const getRecipes = async () => {
    const data = await axios.get(
      `https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`,
    );
    setRecipes((recipes) => [...recipes, ...data.data.hits]);
    setLoading(false);
    console.log(data.data.hits);
  };

  useEffect(() => {
    dotenv.config();
    getRecipes();
  }, []);

  return (
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
                key={i}
              />
            </>
          ))}
        </div>
      )}
    </>
  );
};

export default RecipeGrid;
