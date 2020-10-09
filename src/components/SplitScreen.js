import React, { useState } from "react";

const SplitScreen = () => {
  const [toggleLeft, setToggleLeft] = useState(false);
  const [toggleRight, setToggleRight] = useState(false);
  return (
    <div className="split">
      <div
        className="split-left"
        onMouseEnter={() => setToggleLeft(true)}
        onMouseLeave={() => setToggleLeft(false)}
      ></div>
      <div
        className="split-right"
        onMouseEnter={() => setToggleRight(true)}
        onMouseLeave={() => setToggleRight(false)}
      ></div>
    </div>
  );
};

export default SplitScreen;
