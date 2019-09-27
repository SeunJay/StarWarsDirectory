import React, { Fragment } from "react";
import logo from "../../assests/logo.png"

const Banner = () => {
  return (
    <Fragment>
      <div className="banner">
        <img src={logo} alt="logo" />
        <p>test</p>
      </div>
    </Fragment>
  );
};

export default Banner;
