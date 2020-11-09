import React from "react";

const Banner = ({ title, subtitle, full, children }) => {
  return (
    <div className={`p-2${full ? " flex about" : " flex"}`}>
      <h5 className="uppercase">{title}</h5>
      <p className="m-y-2">{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
