import React from 'react';
import "./SelectInput.css"

const SelectInput = (props) => {
  return (
    <div
      style={{ width: "200px", textAlign: "left" }}
      className=""
    >
      <div className="flex-container">
        <h5
          style={{
            color: "rgb(76, 76, 88)",
            marginRight: "20px",
            marginTop: "9px"
          }}
        >
          FILTER
        </h5>
        <select
          class="custom-select"
          style={{ marginRight: "auto" }}
          onChange={props.onChange}
        >
          <option value="0">Select Human:</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="n/a">Robot</option>
        </select>
      </div>
    </div>
  );
}

export default SelectInput
