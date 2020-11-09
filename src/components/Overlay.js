import React from "react";

// Components
import Button from "./Button";

const Overlay = ({ fruit, veg }) => {
  return (
    <div className="overlay flex">
      <h5>{fruit ? "fruit" : "meat"}</h5>
      {fruit ? (
        <i class="las la-apple-alt"></i>
      ) : (
        <i class="las la-pizza-slice"></i>
      )}
      <Button name={fruit ? "fruit" : "meat"} />
    </div>
  );
};

export default Overlay;
