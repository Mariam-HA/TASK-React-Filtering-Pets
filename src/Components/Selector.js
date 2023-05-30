import React from "react";

const Selector = ({ bySpecie }) => {
  return (
    <div>
      {" "}
      <select className="form-select" onChange={bySpecie}>
        <option value="" selected>
          All
        </option>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="Rabbit">Rabbit</option>
      </select>
    </div>
  );
};

export default Selector;
