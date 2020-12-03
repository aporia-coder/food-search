import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components
import Hero from "../components/Hero";

// Actions
import { calculateCaloriesAction } from "../redux/actions/dataActions";

// Types
import { SET_CALORIES } from "../redux/types";

// MUI
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Typography from "@material-ui/core/Typography";

const CalorieCalculator = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [bodyWeight, setBodyWeight] = useState(0);
  const [heightCm, setHeightCm] = useState(0);
  const calories = useSelector((state) => state.calories);
  // const [calories, setCalories] = useState(0);
  const [age, setAge] = useState(26);
  const [gender, setGender] = useState("");
  const [bodyFat, setBodyFat] = useState();
  const [activityLevel, setActivityLevel] = useState("");
  const genders = ["Male", "Female"];
  const [bmr, setBmr] = useState(1600);
  const [open, setOpen] = useState(false);
  const activityLevelVals = [
    "Sedentary",
    "Light",
    "Moderate",
    "Active",
    "Very Active",
  ];

  const calculateBmr = (gender, bodyWeight, heightCm, age, activityLevel) => {
    if (gender == "Male") {
      setBmr(66 + 13.7 * bodyWeight + 5 * heightCm - 6.8 * age);
    } else if (gender == "Female") {
      setBmr(655 + 9.6 * bodyWeight + 1.8 * heightCm - 4.7 * age);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBmr(gender, bodyWeight, heightCm, age);
    dispatch(calculateCaloriesAction(bmr, activityLevel));
  };

  const handleRecipes = (e) => {
    e.preventDefault();
    dispatch({ type: SET_CALORIES, payload: calories - 500 });
    history.push("/recipes");
  };

  const CalorieDialog = ({ open }) => {
    return (
      <Dialog open={open}>
        <DialogTitle>Your Calories</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your Basal Metabolic Rate is <b>{calories}</b> calories, meaning the
            amount of calories required daily to lose weight is{" "}
            <b>{calories - 500}</b>. Click below for recipes that can help you
            with your weight loss.
          </DialogContentText>
        </DialogContent>
        <Button color="primary" onClick={handleRecipes}>
          recipes
        </Button>
        <Button onClick={handleClose} color="primary">
          close
        </Button>
      </Dialog>
    );
  };

  return (
    <>
      <Hero>
        <Paper elevation={3} className="calorie-paper">
          <form
            noValidate
            autoComplete="off"
            className="calorie-form"
            onSubmit={handleSubmit}
          >
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
              <Input
                select
                value={heightCm}
                helperText="Select your age"
                required={true}
                onChange={(e) => setHeightCm(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">Cm</InputAdornment>
                }
              ></Input>
              <FormHelperText>Height</FormHelperText>
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
            <Button
              variant="contained"
              color="primary"
              className="m-y-2"
              type="submit"
              onClick={handleOpen}
            >
              calculate calories
            </Button>
          </form>
        </Paper>
      </Hero>
      <CalorieDialog open={open} />
    </>
  );
};

export default CalorieCalculator;
