import React from "react";
import Banner from "../banner/Banner";
import PopularShips from "../popularships/PopularShips";
import StarShips from "../starships/StarShips";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <PopularShips title="Popular Ships" />
      <StarShips />
    </div>
  );
};

export default HomePage;
