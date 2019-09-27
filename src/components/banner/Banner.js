import React, { Fragment } from "react";
import {Link} from "react-router-dom"
import logo from "../../assests/logo.png";
import "./Banner.css"

const Banner = () => {
  return (
    <Fragment>
      <div className="banner">
        <img src={logo} alt="logo" className="stars-wars-logo"/>
        <p>test</p>
      </div>
    </Fragment>
  );
};

export default Banner;
