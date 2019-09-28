import React from 'react';
import "./SearchBar.css"

const SearchBar = () => {
  return (
    <div className="search ">
      <span className="fa fa-search" id="search"></span>
      <input
        className="p-2 rounded search-bar-width"
        placeholder="Enter Search Term"
        id="search-bar"
        onChange={e => e.target.value}
        style={{display: "block", width: "100%" }}
      />
    </div>
  );
}

export default SearchBar
