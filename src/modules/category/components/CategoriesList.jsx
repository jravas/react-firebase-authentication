import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import deleteImage from "@/main/images/delete.svg";

class CategoriesList extends Component {
  handleClickAction = categoryId => {
    const { deleteCategory } = this.props;
    deleteCategory(categoryId);
  };
  render() {
    const { categories } = this.props;
    return (
      <ul className="items-list-admin container-style">
        {categories &&
          Object.keys(categories).map(key => (
            <li className="items-list-admin__item" key={key}>
              <Link to={`/categories/edit/${categories[key].id}`}>
                {categories[key].name}
              </Link>
              <span
                className="items-list-admin__item__delete"
                onClick={() => this.handleClickAction(categories[key].id)}
              >
                {categories[key].name !== "Uncategorised" && (
                  <img src={deleteImage} alt="Delete button" />
                )}
              </span>
            </li>
          ))}
      </ul>
    );
  }
}

export default connect(
  null,
  actions
)(CategoriesList);
