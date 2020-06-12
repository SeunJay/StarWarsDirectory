import React, { useEffect, useState } from "react";
import starship1 from "../../assests/starship-1.jpg";
import starship2 from "../../assests/starship-2.jpg";
import starship3 from "../../assests/starship-3.jpg";
import starship4 from "../../assests/starship-4.jpg";
import starship5 from "../../assests/starship-5.jpg";
import starship6 from "../../assests/starship-6.jpg";
import "./StarShips.css";
import Spinner from "../spinner/Spinner";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://swapi.dev/api/starships/"
      )
      .then((res) => {
        const ships = res.data.results.slice(0, 6);
        setLoading(false);
        setStarships(ships);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  if (loading) return <Spinner />;

  if (!starships) return "";
  return (
    <>
      <div className="d-flex justify-content-between starship-flex">
        {starships.map((ship, index) => {
          return (
            <Cards
              key={index}
              wrappingDiv="card shadow"
              cargoCapacity={ship.cargo_capacity}
              objectName={ship.name}
              imageSource={starshipPhotos[numberGenerator()]}
              description={`The ${ship.name} is a modified ${ship.model} light weight and has a cargo capacity of ${ship.cargo_capacity}`}
              readmorestyle="space-ship-readmore"
              url={ship.url}
              style={{ marginTop: "20px" }}
            />
          );
        })}
      </div>
    </>
  );
};

export default StarShips;
