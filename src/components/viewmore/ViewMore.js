import React from 'react';
import {Link} from "react-router-dom"

const ViewMore = (props) => {
  return (
    <Link to={`/${props.page}`}>
      <h2
        className="btn btn-primary w-25 d-flex justify-content-center mt-5"
        style={{ margin: "auto", background: "white" }}
      >
        {props.tag ? props.tag : `VIEW MORE`}
      </h2>
    </Link>
  );
}

export default ViewMore
