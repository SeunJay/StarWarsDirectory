import React from 'react';
import "./SelectInput.css"

const SelectInput = (props) => {
  return (
    <div style={{ width: "200px" }} className="d-flex flex-row button-group">
      <h5 style={{ color: "rgb(76, 76, 88)" }}>FILTER</h5>
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
  );
}

export default SelectInput
