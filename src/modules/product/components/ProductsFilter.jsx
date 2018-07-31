import React from "react";

export default ({ onFilter }) => (
  <div className="filter-container">
    <div className="filter-container__wrap">
      <select className="filter-container__wrap__select" onChange={onFilter}>
        <option value="DEF" label="Default" />
        <option value="ASC" label="Price ascending" />
        <option value="DESC" label="Price descending" />
      </select>
    </div>
  </div>
);
