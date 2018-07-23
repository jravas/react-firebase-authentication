import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import * as actions from "../redux/actions";
import deleteImage from "@/main/images/delete.svg";

const INITIAL_STATE = {
  toastConfig: {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 60
  }
};

class CategoryItem extends Component {
  state = { ...INITIAL_STATE };
  handleClickAction(categoryId) {
    const { toastConfig } = this.state;
    const { deleteCategory, item } = this.props;
    deleteCategory(categoryId).then(() => {
      toast(`${item.name} deleted !`, toastConfig);
    });
  }
  render() {
    const { item } = this.props;
    return (
      item.name !== "Uncategorised" && (
        <li className="items-list-admin__item">
          <Link to={`/admin/categories/edit/${item.id}`}>{item.name}</Link>
          <span
            className="items-list-admin__item__delete"
            onClick={this.handleClickAction.bind(this, item.id)}
          >
            <img src={deleteImage} alt="Delete button" />
          </span>
        </li>
      )
    );
  }
}

export default connect(
  null,
  actions
)(CategoryItem);
