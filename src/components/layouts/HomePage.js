import React from 'react';
import Banner from "../banner/Banner";
import PopularShips from "../popularships/PopularShips"

const HomePage = () => {
  return (
    <div>
      <Banner />
      <PopularShips title="Popular Ships" />
    </div>
  );
}

export default HomePage
