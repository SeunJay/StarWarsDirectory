import React from "react";
import Banner from "../banner/Banner";
import PopularShips from "../popularships/PopularShips";
import StarShips from "../starships/StarShips";
import ViewMore from "../viewmore/ViewMore";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <PopularShips title="Popular Ships" />
      <StarShips />
      <ViewMore />
    </div>
  );
};

export default HomePage;
