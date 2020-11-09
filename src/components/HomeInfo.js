import React, { useEffect } from "react";

// Components
import Banner from "./Banner";
import Button from "./Button";

// Images
import strawberry from "../assets/img/strawberry.jpg";
import pot from "../assets/img/pot.jpg";

const HomeInfo = () => {
  return (
    <section className="section-info">
      <Banner
        title="about us"
        subtitle="Whether you enjoy a delicious rib-eye steak, are completely vegan, or somewhere in between, here at StayHealthy we make it easy for you to find the most delicious, nutricous meals, all catered to your personal daily calory intake!Whether you enjoy a delicious rib-eye steak, are completely vegan, or somewhere in between, here at StayHealthy we make it easy for you to find the most delicious, nutricous meals, all catered to your personal daily calory intake!Whether you enjoy a delicious rib-eye steak, are completely vegan, or somewhere in between, here at StayHealthy we make it easy for you to find the most delicious, nutricous meals, all catered to your personal daily calory intake!"
        full={true}
      />
      <Banner
        title="our recipes"
        subtitle="Whether you enjoy a delicious rib-eye steak, are completely vegan, or somewhere in between, here at StayHealthy we make it easy for you to find the most delicious, nutricous meals, all catered to your personal daily calory intake!"
      >
        <Button name="Our Recipes" />
      </Banner>
      <img
        src={strawberry}
        alt="Strawberry"
        className="image"
        data-aos="fade-down"
      />
      <img src={pot} alt="Pot of food" className="image" data-aos="fade-up" />
      <Banner
        title="calorie calculator"
        subtitle="Try our free calorie calculator to figure out the optimum calorific needs and get recipes tailored specifically to your calorie needs and dietary requirements!"
      >
        <Button name="Calorie Calculator" />
      </Banner>
    </section>
  );
};

export default HomeInfo;
