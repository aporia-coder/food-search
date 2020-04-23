import React from "react";

const Hero = ({ hero, children, overlay }) => {
  return (
    <div className={overlay}>
      <header className={hero}>{children}</header>
    </div>
  );
};

Hero.defaultProps = {
  hero: "defaultHero",
};

export default Hero;
