import React from "react";

const Banner = ({ title, subtitle, children }) => {
  return (
    <div className="container-banner">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
