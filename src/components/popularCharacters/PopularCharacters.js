import React from 'react';
import Underline from "../underline/Underline"

const PopularCharacters = (props) => {
  return (
    <>
      <div className="search-result-area d-flex justify-content-between starship-flex">
        <div className="search-result-area"></div>
      </div>
      <div
        style={{
          textAlign: "center",
          marginBottom: "0px",
          fontWeight: "bold",
          fontSize: "1.6em"
        }}
        className="topic-tag"
      >
        <h3 style={{ marginBottom: "0px", color: "#4c4c58" }}>
          {props.subject}
        </h3>
        <Underline width="3.5em" marginTop="5px" height="5px" background="#494956" />
      </div>
    </>
  );
}

export default PopularCharacters
