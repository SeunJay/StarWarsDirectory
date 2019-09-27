import React from "react";
import { Link } from "react-router-dom";

function getId(props) {
  if (!props.url) return "";
  const splitPropsUrl = props.url.split("/");
  return splitPropsUrl[5];
}

const CharacterCard = props => {
  let characterId = getId(props)
  return (
    <div className="card shadow" style={{ width: "36rem" }}>
      <div className="row m-0">
        <div className="col-md-6 p-0">
          <img
            src={props.imageSource}
            alt="robot-card"
            style={{ height: "286px", width: "275px" }}
            className="w-100 h-100 h-sm-100"
          />
        </div>
        <div className="col p-0 py-4" style={{ background: "#f2f2f2" }}>
          <div className="card-block px-3">
            <h4 className="card-title">{props.name}</h4>
            <p className="card-text">
              <span>Name: </span>
              {`${props.name}`}
            </p>
            <p className="card-text">
              <span>Gender: </span>
              {`${props.gender}`}
            </p>
            <p className="card-text">
              <span>Birth Year: </span>
              {`${props.birth_year}`}
            </p>
            <span className="character-readmore-tag d-flex justify-content-end">
              <Link
                style={{ borderBottom: "2px solid rgb(76, 76, 88)" }}
                to={`/people/${characterId}`}
              >
                ...ReadMore
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
