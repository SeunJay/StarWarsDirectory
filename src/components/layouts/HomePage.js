import React from "react";
import Banner from "../banner/Banner";
import PopularShips from "../popularships/PopularShips";
import StarShips from "../starships/StarShips";
import ViewMore from "../viewmore/ViewMore";
import PopularCharacters from "../popularCharacters/PopularCharacters";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <PopularShips title="Popular Ships" />
      <StarShips />
      <ViewMore page="starship" />
      <PopularCharacters title="Popular Characters"/>
    </div>
  );
};

export default HomePage;
