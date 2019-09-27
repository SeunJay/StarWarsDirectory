import React from "react";
import Banner from "../banner/Banner";
import PopularShips from "../popularships/PopularShips";
import StarShips from "../starships/StarShips";
import ViewMore from "../viewmore/ViewMore";
import PopularCharacters from "../popularCharacters/PopularCharacters";
import Characters from "../characters/Characters";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <PopularShips title="Popular Ships" />
      <StarShips />
      <ViewMore page="starship" />
      <PopularCharacters title="Popular Characters" />
      <Characters />
      <ViewMore page="characters" />
    </div>
  );
};

export default HomePage;
