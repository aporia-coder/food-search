import React, { useState } from "react";

// Components
import Hero from "../components/Hero";

// MUI
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";

const CalorieCalculator = () => {
  const [bodyWeight, setBodyWeight] = useState();
  const [gender, setGender] = useState("");
  const [bodyFat, setBodyFat] = useState();
  const [activityLevel, setActivityLevel] = useState("");
  const bodyFatVals = ["10-14", "15-20", "21-28", "Over 28"];
  const genders = ["Male", "Female"];
  const activityLevelVals = [
    "Very Light",
    "Light",
    "Moderate",
    "Heavy",
    "Very Heavy",
  ];

  return (
    <>
      <Hero>
        <Paper elevation={3} className="calorie-paper">
          <form noValidate autoComplete="off" className="calorie-form">
            <h5>CALORIE CALCULATOR</h5>
            <FormControl>
              <Input
                required={true}
                type="number"
                onChange={(e) => setBodyWeight(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">Kg</InputAdornment>
                }
              />
              <FormHelperText>Weight</FormHelperText>
            </FormControl>
            <FormControl>
              <TextField
                select
                value={gender}
                helperText="Select your gender"
                required={true}
                onChange={(e) => setGender(e.target.value)}
              >
                {genders.map((gender) => (
                  <MenuItem key={gender} value={gender}>
                    {gender}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <FormControl>
              <TextField
                select
                value={bodyFat}
                helperText="Select your body fat percentage"
                required={true}
                onChange={(e) => setBodyFat(e.target.value)}
              >
                {bodyFatVals.map((fat) => (
                  <MenuItem key={fat} value={fat}>
                    {fat}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <FormControl>
              <TextField
                select
                value={activityLevel}
                required={true}
                helperText="Select activity level"
                onChange={(e) => setActivityLevel(e.target.value)}
              >
                {activityLevelVals.map((vals) => (
                  <MenuItem key={vals} value={vals}>
                    {vals}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </form>
        </Paper>
      </Hero>
    </>
  );
};

export default CalorieCalculator;
