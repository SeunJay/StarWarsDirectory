import React from 'react';
import "./Button.css"

const Button = (props) => {
  return (
    <>
      <div className="button-group">
        <div className="btn-group">
          <div className="d-flex flex-row">
            <span>{props.previousPage}</span> - <span>{props.nextPage}</span> of{" "}
            <span>{props.totalPage}</span>
          </div>
          <button
            type="button"
            className="btn btn-primary previous"
            onClick={props.previousFunction}
          >
            <i className="fas fa-angle-double-left"></i>
          </button>
          <button
            type="button"
            className="btn btn-primary next"
            onClick={props.nextFunction}
          >
            <i className="fas fa-angle-double-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Button
