import React, {useEffect, useState} from 'react';
import starship1 from "../../assests/starship-1.jpg";
import starship2 from "../../assests/starship-2.jpg";
import starship3 from "../../assests/starship-3.jpg";
import starship4 from "../../assests/starship-4.jpg";
import starship5 from "../../assests/starship-5.jpg";
import starship6 from "../../assests/starship-6.jpg";
import Spinner from "../layouts/spinner.gif";
import Cards from "../card/Cards";
import axios from "axios";

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
  const [starships, setStarships] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://swapi.co/api/starships/")
      .then(res => {
        const ships = res.data.results.slice(0, 6);
        setLoading(false);
        setStarships(ships);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log(starships)
  return (
    <div>
      
    </div>
  )
}

export default StarShips
