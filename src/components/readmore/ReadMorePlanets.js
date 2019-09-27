import React, { useState, useEffect } from "react";
//import ViewMore from "../viewmore/ViewMore";
import ReadMorepage from "../readmore/ReadMorePage";
import { planets } from "../readmore/ReadMorePage";
import axios from "axios";

const ReadMorePlanets = ({ match }) => {
  const [planet, setPlanet] = useState("");
  const planetId = match.params.id;
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/planets/${planetId}/`)
      .then(res => {
        setPlanet(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      <ReadMorepage page={planets} name={planet.name} />
      <div className="container">
        <h2 className="mt-5 mb-5">{planet.name}</h2>
        <div className="d-flex">
          <img src={planets[0]} style={{ height: "350px" }} alt=""/>
          <div>
            <h2 className="pl-5">About Planet:</h2>
            <div>
              <p className="pl-5">
                <strong className="pr-5">Tempature:</strong>
                {planet.climate}
              </p>
              <p className="pl-5">
                <strong className="pr-5">Population:</strong>
                {planet.population}
              </p>
            </div>
            <p className="pl-5 pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis possimus repellat dicta numquam itaque, ex sint iste
              autem? Magnam voluptas accusamus distinctio tempora necessitatibus
              unde doloremque expedita praesentium itaque quisquam! Culpa
              voluptas dolorum exercitationem? Aliquid, blanditiis laudantium
              natus, voluptates quisquam at eius enim, debitis repellendus
              nesciunt veniam incidunt atque. Ipsum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadMorePlanets;
