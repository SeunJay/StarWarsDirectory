import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/logo.png";
import SearchBar from "../search/SearchBar";
import Underline from "../underline/Underline"
import "./Banner.css";

const Banner = (props) => {
  return (
    <Fragment>
      <div className="banner">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="stars-wars-logo ml-lg-5 mt-5 logo"
          />
        </Link>

        <div className="header-title" style={{ color: "red" }}>
          <div className="logo-directory">
            <Link to="/">
              <img src={logo} alt="logo" className="star-wars-logo" />
            </Link>
            <div className="directory">
              <p>Directory</p>
            </div>
          </div>
          <Underline background="white" height="2px" width="295px" marginTop="0px" />
          <p
            className="local font-weight-bold shadow"
            style={{ color: "#919191", fontWeight: "400", fontSize: "1.3em" }}
          >
            Find your favour Characters, Films, Species, Starships, and Planets
          </p>
          <SearchBar searchtype={props.page} />
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
