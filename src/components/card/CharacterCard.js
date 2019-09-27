import React from "react";
import { Link } from "react-router-dom";

function getId(props) {
  if (!props.url) return "";
  const splitPropsUrl = props.url.split("/");
  return splitPropsUrl[5];
}

const CharacterCard = props => {
  return <div></div>;
};

export default CharacterCard;
