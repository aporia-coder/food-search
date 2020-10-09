import React from "react";

// MUI
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const DietDropdown = () => {
  return (
    <div>
      <InputLabel>Diet</InputLabel>
      <Select native label="Diet">
        <option>Vegan</option>
        <option>Vegetarian</option>
        <option>Carnivore</option>
      </Select>
    </div>
  );
};

export default DietDropdown;
