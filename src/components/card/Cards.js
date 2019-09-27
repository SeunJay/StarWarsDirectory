import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function getId(props) {
  if (!props.url) return "";
  const splitPropsUrl = props.url.split("/");
  return splitPropsUrl[5];
}

const Cards = props => {
  let starshipId = getId(props);
  if (props.urlId) {
    starshipId = props.urlId;
  }
  return (
    <div className={props.wrappingDiv}>
      <img
        className="card-img-top"
        src={props.imageSource}
        alt="Card"
        style={{ width: "100%", height: "191px" }}
      />
      <div className="card-body pl-3 pb-2 border border-right-0">
        <h4 className="card-title mb-1" style={{ fontSize: "20px" }}>
          {props.objectName}
        </h4>
        <p style={{ height: "96px" }} className="card-text mb-lg-0 mt-3px">
          {props.description}
        </p>
        <div className="btn float-right my-3">
          <Link
            to={`/starships/${starshipId}`}
            style={{ textDecoration: "none" }}
          >
            Read More
          </Link>
          <i className="fas fa-arrow-right ml-2"></i>
        </div>
      </div>
    </div>
  );
};

export default Cards;
