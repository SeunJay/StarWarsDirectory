import React from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import planetOne from "../../assests/planet-1.jpg";
import planetTwo from "../../assests/planet-2.jpg";
import planetThree from "../../assests/planet-3.jpg";
class MyCarousel extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      slides: [
        <div
          className="card img-fluid"
          style={{
            marginRight: "2rem",
            marginLeft: "2rem",
            width: "100%",
            color: "white"
          }}
        >
          <img
            className="card-img-top"
            src={planetOne}
            style={{ width: "100%" }}
            alt=""
          />
          <div className="card-img-overlay d-flex justify-content-center  align-content-end">
            <h4 className="card-title align-self-end">
              {" "}
              <Link to="/planets/1">Alderaan</Link>
            </h4>
          </div>
        </div>,
        <div
          className="card img-fluid"
          style={{ marginRight: "2rem", marginLeft: "2rem", width: "100%" }}
        >
          <img
            className="card-img-top"
            src={planetTwo}
            style={{ width: "100%" }}
            alt=""
          />
          <div className="card-img-overlay d-flex justify-content-center  align-content-end">
            <h4 className="card-title align-self-end">
              {" "}
              <Link to="/planets/2">Yavin IV</Link>
            </h4>
          </div>
        </div>,
        <div
          className="card img-fluid"
          style={{ marginRight: "2rem", marginLeft: "2rem", width: "100%" }}
        >
          <img
            className="card-img-top"
            src={planetThree}
            style={{ width: "100%" }}
            alt=""
          />
          <div className="card-img-overlay d-flex justify-content-center  align-content-end">
            <h4 className="card-title align-self-end">
              {" "}
              <Link to="/planets/3">Hoth</Link>
            </h4>
          </div>
        </div>,
        <div
          className="card img-fluid"
          style={{ marginRight: "2rem", marginLeft: "2rem", width: "100%" }}
        >
          <img
            className="card-img-top"
            src={planetOne}
            style={{ width: "100%" }}
            alt=""
          />
          <div className="card-img-overlay d-flex justify-content-center  align-content-end">
            <h4 className="card-title align-self-end">
              {" "}
              <Link to="/planets/4">Dagobah</Link>
            </h4>
          </div>
        </div>
      ],
      planets: []
    };
    this.onchange = this.onchange.bind(this);
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/planets").then(response => {
      //const tempArr = [];
       response.data.results.map(planet => {
        return `
          (<div className="card img-fluid" style={{ marginRight: "2rem", marginLeft: "2rem", width: "100%" }} >
          <img className="card-img-top" src={planetOne} style={{ width: "100%" }} />
          <div className="card-img-overlay d-flex justify-content-center  align-content-end">
            <h4 className="card-title align-self-end">${planet.name}</h4>
          </div>
        </div>),
          `;
      });
      this.setState({
        planets: response.data.results
      });
    });
  }

  onchange(value) {
    this.setState({ value });
  }

  render() {
    console.log(this.state.planets);
    return (
      <div>
        <Carousel
          infinite
          value={this.state.value}
          slides={this.state.slides}
          centered
          slidesPerPage={3}
        />
        <Dots value={this.state.value} onChange={this.onchange} number={3} />
      </div>
    );
  }
}

export default MyCarousel;
