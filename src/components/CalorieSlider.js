import React from "react";

// MUI
import { Slider } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const CalorieSlider = () => {
  return (
    <div className="container-slider">
      <Grid container>
        <Slider />
      </Grid>
    </div>
  );
};

export default CalorieSlider;
