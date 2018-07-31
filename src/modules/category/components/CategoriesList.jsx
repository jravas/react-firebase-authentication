import React, { Component } from "react";
import CategoryItem from "./CategoryItem";

class CategoriesList extends Component {
  render() {
    const { categories } = this.props;
    return !categories ? null : (
      <ul className="items-list-admin container-style">
        {Object.keys(categories).map(key => (
          <CategoryItem key={key} item={categories[key]} />
        ))}
      </ul>
    );
  }
}

export default CategoriesList;
