import React, { useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";

const RecipeGrid = () => {
  const [calories, setCalories] = useState(0);
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState("");
  const [healthLabels, setHealthLabels] = useState("");
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const data = await axios.get(
      `https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`,
    );
    setRecipes((recipes) => [...recipes, data.data.hits]);
  };

  useEffect(() => {
    dotenv.config();
    // getRecipes();
  }, []);
  console.log(recipes);

  return (
    <>
      <div className="recipe-grid"></div>
    </>
  );
};

export default RecipeGrid;
