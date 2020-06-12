import React, { useState, useEffect } from "react";
import characterOne from "../../assests/character-1.jpg";
import characterThree from "../../assests/character-3.jpg";
import CharacterCard from "../card/CharacterCard"
import axios from "axios";
import "./Characters.css"

const characterPhotos = [
  characterOne,
  characterThree,
  characterOne,
  characterThree
];

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios("https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people/")
      .then((res) => {
        const characters = res.data.results.slice(0, 4);
        setCharacters(characters);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <section className="d-flex !important justify-content-center w-sm-75 w-75 m-auto flex-wrap ">
      {characters.map((character, index) => {
        return (
          <CharacterCard
            key={index}
            name={character.name}
            imageSource={characterPhotos[index]}
            url={character.url}
            gender={character.gender}
            birth_year={character.birth_year}
          />
        );
      })}
    </section>
  );
};

export default Characters;
