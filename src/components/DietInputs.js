import React from "react";
import CalorieSlider from "./CalorieSlider";
import SearchBar from "./SearchBar";
import DietDropdown from "./DietDropdown";

const DietInputs = () => {
  return (
    <div className="diet-inputs">
      <DietDropdown />
      <SearchBar />
      <CalorieSlider />
    </div>
  );
};

export default DietInputs;
