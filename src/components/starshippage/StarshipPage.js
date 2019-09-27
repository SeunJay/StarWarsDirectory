import React, { useState, useEffect } from "react";
import Cards from "../card/Cards";
import PopularShips from "../popularships/PopularShips";
import Button from "../button/Button"
import starshipTwo from "../../assests/starship-2.jpg";
import Banner from "../banner/Banner"
import axios from "axios";

const StarshipPage = () => {
  let [starShips, setStarShips] = useState([]);
  let [previousPage, setPreviousPage] = useState(1);
  let [nextPage, setNextPage] = useState(2);
  let [totalPage, setTotalPage] = useState("37");
  const [loading, setLoading] = useState(true);

  const previousPaginationHandler = e => {
    if (previousPage < 1) {
      setNextPage(10);
      return;
    }
    setPreviousPage(previousPage--);
    const nextPageValue = (previousPage - 1) * 10 + starShips.length;
    setNextPage(nextPageValue); //
  };

  const nextPaginationHandler = e => {
    if (nextPage > totalPage) {
      setNextPage("37");
      return nextPage;
    }

    setPreviousPage(previousPage++);
    const nextPageValue = (previousPage - 1) * 10 + starShips.length;
    setNextPage(nextPageValue); //
  };

  const url = `https://swapi.co/api/starships/?page=${previousPage}`;

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setTotalPage(res.data.count);
        setStarShips(res.data.results);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, [previousPage]);

  return (
    <>
      <Banner page="starship" />
      <div className="mt-lg-5">
        <PopularShips title="Popular Starships" />
      </div>
      <div className="d-flex justify-content-between starship-flex">
        {starShips.map((ship, index) => {
          return (
            <Cards
              key={index}
              wrappingDiv="card shadow"
              objectName={ship.name}
              imageSource={starshipTwo}
              description={`The ${ship.name} is a modified ${ship.model} light weight manufactured by the ${ship.manufacturer}`}
              readmorestyle="space-ship-readmore"
              style={{ marginTop: "20px" }}
            />
          );
        })}
      </div>
      <Button
        previousFunction={() => previousPaginationHandler()}
        nextFunction={() => nextPaginationHandler()}
        totalPage={totalPage}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </>
  );
};

export default StarshipPage;
