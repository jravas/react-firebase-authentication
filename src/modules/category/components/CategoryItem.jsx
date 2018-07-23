import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import deleteImage from "@/main/images/delete.svg";

class CategoryItem extends Component {
  handleClickAction(categoryId) {
    const { deleteCategory } = this.props;
    deleteCategory(categoryId);
  }
  render() {
    const { item } = this.props;
    return (
      <li className="items-list-admin__item">
        <Link to={`/admin/categories/edit/${item.id}`}>{item.name}</Link>
        <span
          className="items-list-admin__item__delete"
          onClick={this.handleClickAction.bind(this, item.id)}
        >
          {item.name !== "Uncategorised" && (
            <img src={deleteImage} alt="Delete button" />
          )}
        </span>
      </li>
    );
  }
}

export default connect(
  null,
  actions
)(CategoryItem);
