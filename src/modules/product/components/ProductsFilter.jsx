import React from "react";

export default ({ onFilter, onCategoryFilter, categories }) => (
  <div className="filter-container">
    <div className="filter-container__wrap category-select">
      <select
        className="filter-container__wrap__select"
        onChange={onCategoryFilter}
      >
        {!categories
          ? null
          : categories.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
      </select>
    </div>
    <div className="filter-container__wrap price-select">
      <select className="filter-container__wrap__select" onChange={onFilter}>
        <option value="DEF" label="Default" />
        <option value="ASC" label="Price ascending" />
        <option value="DESC" label="Price descending" />
      </select>
    </div>
  </div>
);
