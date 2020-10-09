import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RecipeGrid from "../components/RecipeGrid";
import DietInputs from "../components/DietInputs";

const Products = () => {
  return (
    <>
      <Hero hero="brandHero">
        <Banner title="StayHealthy" />
      </Hero>
      <DietInputs />
      <Hero hero="tableHero">
        <Banner title="OUR RECIPES" />
      </Hero>
      <RecipeGrid />
    </>
  );
};

export default Products;
