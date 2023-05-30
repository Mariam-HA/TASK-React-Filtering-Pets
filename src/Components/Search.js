import React from "react";

const Search = ({ changeQuery }) => {
  return (
    <div>
      <div className="input-group rounded">
        <input
          onChange={(event) => changeQuery(event)}
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
      </div>
    </div>
  );
};

export default Search;
