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
import Button from "@material-ui/core/Button";

const CalorieCalculator = () => {
  const [bodyWeight, setBodyWeight] = useState(0);
  const [heightCm, setHeightCm] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [bodyFat, setBodyFat] = useState();
  const [activityLevel, setActivityLevel] = useState("");
  const bodyFatVals = ["10-14", "15-20", "21-28", "Over 28"];
  const genders = ["Male", "Female"];
  const activityLevelVals = [
    "Sedentary",
    "Light",
    "Moderate",
    "Active",
    "Very Active",
  ];
  const [bmr, setBmr] = useState(0);

  const calculateBmr = (gender, bodyWeight, heightCm, age) => {
    if (gender == "Male") {
      setBmr(66 + 13.7 * bodyWeight + 5 * heightCm - 6.8 * age);
    } else if (gender == "Female") {
      setBmr(655 + 9.6 * bodyWeight + 1.8 * heightCm - 4.7 * age);
    }
    console.log(bmr);
  };

  // Height is in cm

  // calculateBmr("Male", 85, 182.88, 26);

  // To lose weight minus 500 calories

  const calculateCalories = (bmr) => {
    switch (activityLevelVals) {
      case "Sedentary":
        return bmr * 1.2;
        break;
      case "Light":
        return bmr * 1.375;
        break;
      case "Moderate":
        return bmr * 1.55;
        break;
      case "Active":
        return bmr * 1.725;
        break;
      case "Very Active":
        return bmr * 1.9;
        break;
      default:
        console.log("some kind of error");
    }
  };

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
            <Button variant="contained" color="primary" className="m-y-2">
              calculate calories
            </Button>
          </form>
        </Paper>
      </Hero>
    </>
  );
};

export default CalorieCalculator;
