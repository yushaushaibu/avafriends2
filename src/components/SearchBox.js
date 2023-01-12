import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input 
            type="text" 
            className="pa3 ba b--green bg-lightest-blue"
            placeholder="Search avatar" 
            onChange={searchChange}
            />
    </div>
  );
};

export default SearchBox;
