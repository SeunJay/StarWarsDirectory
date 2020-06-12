import React, { useState, useEffect } from "react";
import CharacterCard from "../card/CharacterCard";
import SelectInput from "../selectInput/SelectInput";
import PopularCharacters from "../popularCharacters/PopularCharacters";
import Banner from "../banner/Banner";
import characterOne from "../../assests/character-1.jpg";
import characterTwo from "../../assests/character-2.jpg";
import characterThree from "../../assests/character-3.jpg";
import characterFour from "../../assests/character-4.jpg";
import axios from "axios";

const charactersPhotos = [
  characterOne,
  characterTwo,
  characterThree,
  characterFour
];

const numberGenerator = () => Math.floor(Math.random() * 3) + 1;

const CharacterPage = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const filterByGender = e => {
    const gender = e.target.value;
    const filtered = filteredCharacters.filter(
      character => character.gender === gender
    );
    setCharacters(filtered);
  };

  useEffect(() => {
    axios
      .get("https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people")
      .then((res) => {
        setCharacters(res.data.results);
        setFilteredCharacters(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Banner page="characters" />
      <div className="mt-lg-5 container">
        <PopularCharacters title="Starwars Characters" />
      </div>
      <div className="">
        <SelectInput onChange={filterByGender} />
      </div>
      <div className="d-flex !important justify-content-center flex-wrap characters-display">
        {characters.map((character, index) => {
          return (
            <CharacterCard
              props={character.url}
              url={character.url}
              key={index}
              name={character.name}
              gender={character.gender}
              birth_year={character.birth_year}
              imageSource={charactersPhotos[numberGenerator()]}
            />
          );
        })}
      </div>
    </>
  );
};

export default CharacterPage;
