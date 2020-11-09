import React from "react";
import { useSelector, useDispatch } from "react-redux";

// MUI
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";

// Actions
import { setCaloriesAction } from "../redux/actions/dietActions";

const DietInputs = () => {
  const dispatch = useDispatch();
  const dietPreference = useSelector((state) => state.diet.meatPreference);
  const calories = useSelector((state) => state.diet.calories);

  return (
    <div className="m-y-3">
      <div className="container-diet flex-row">
        <div>
          <InputLabel>Diet</InputLabel>
          <Select native label="Diet" value={dietPreference}>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Carnivore">Carnivore</option>
          </Select>
        </div>
        <TextField label="Search Recipes" />
        <div>
          <p>calories</p>
          <Slider
            defaultValue={calories}
            min={0}
            max={3000}
            aria-labelledby="discrete-slider-small-steps"
            valueLabelDisplay="auto"
            onChangeCommitted={(value) => dispatch(setCaloriesAction(value))}
          />
        </div>
      </div>
    </div>
  );
};

export default DietInputs;
