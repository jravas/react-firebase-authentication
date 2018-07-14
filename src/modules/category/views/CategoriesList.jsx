import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

class CategoriesList extends Component {
  handleClickAction = categoryId => {
    const { deleteCategory } = this.props;
    deleteCategory(categoryId);
  };
  render() {
    const { categories } = this.props;
    return (
      <ul className="list-group">
        {categories &&
          Object.keys(categories).map(key => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={key}
            >
              <Link to={`/categories/edit/${categories[key].id}`}>
                {categories[key].name}
              </Link>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => this.handleClickAction(categories[key].id)}
              >
                Delete
              </button>
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
