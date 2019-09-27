import React from "react";
import { Link } from "react-router-dom";
import starwarslogo from "../../assests/logo.png";
import "./ReadMorePage.css"
import characterTwo from "../../assests/character-2.jpg";
import characterThree from "../../assests/character-3.jpg";
import characterFour from "../../assests/character-4.jpg";
import planetOne from "../../assests/planet-1.jpg";
import planetTwo from "../../assests/planet-2.jpg";
import planetThree from "../../assests/planet-3.jpg";
import starshipOne from "../../assests/starship-1.jpg";
import starshipTwo from "../../assests/starship-2.jpg";

export const characters = [characterTwo, characterThree, characterFour];
export const planets = [planetOne, planetTwo, planetThree];
export const ships = [starshipOne, starshipTwo, starshipOne];

const ReadMorePage = props => {
  return (
    <div>
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner hello-rukee">
          <div className="carousel-item active">
            <img src={props.page[0]} alt="Los Angeles" className="img-fluid" />
            <div className="carousel-caption">
              <Link to="/">
                {" "}
                <img src={starwarslogo} className="star-wars-logo" alt="" />
              </Link>
              <p>
                <span>[</span>
                {props.name}
                <span>]</span>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={props.page[1]} alt="Chicago" className="img-fluid" />
            <div className="carousel-caption">
              <Link to="/">
                {" "}
                <img src={starwarslogo} className="star-wars-logo" alt="" />
              </Link>
              <p>
                <span>[</span>
                {props.name}
                <span>]</span>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={props.page[2]} alt="New York" className="img-fluid" />
            <div className="carousel-caption">
              <Link to="/">
                {" "}
                <img src={starwarslogo} className="star-wars-logo" alt="" />
              </Link>
              <p>
                <span>[</span>
                {props.name}
                <span>]</span>
              </p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon previous"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon next"></span>
        </a>
      </div>
    </div>
  );
};

export default ReadMorePage;
