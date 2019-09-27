import React from 'react';
import starship1 from "../../assests/starship-1.jpg";
import starship2 from "../../assests/starship-2.jpg";
import starship3 from "../../assests/starship-3.jpg";
import starship4 from "../../assests/starship-4.jpg";
import starship5 from "../../assests/starship-5.jpg";
import starship6 from "../../assests/starship-6.jpg";
import Spinner from "../layouts/spinner.gif";
import Cards from "../card/Cards"

const starshipPhotos = [
  starship1,
  starship2,
  starship3,
  starship4,
  starship5,
  starship6
];

const numberGenerator = () => Math.floor(Math.random() * 5) + 1;

const StarShips = () => {
  return (
    <div>
      
    </div>
  )
}

export default StarShips
