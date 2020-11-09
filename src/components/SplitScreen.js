import React, { useState } from "react";
// import fruit from "../assets/img/fruit.jpg";
// import veg from "../assets/img/veg.jpg";

// Components
import Overlay from "./Overlay";

const SplitScreen = () => {
  const [toggleLeft, setToggleLeft] = useState(false);
  const [toggleRight, setToggleRight] = useState(false);
  return (
    <div className="split">
      <div
        className={`split-left${toggleLeft ? " split-left-hover" : ""}`}
        onMouseEnter={() => setToggleLeft(true)}
        onMouseLeave={() => setToggleLeft(false)}
      >
        {toggleLeft && <Overlay fruit={true} />}
      </div>
      <div
        className={`split-right${toggleRight ? " split-right-hover" : ""}`}
        onMouseEnter={() => setToggleRight(true)}
        onMouseLeave={() => setToggleRight(false)}
      >
        {toggleRight && <Overlay veg={true} />}
      </div>
    </div>
  );
};

export default SplitScreen;
