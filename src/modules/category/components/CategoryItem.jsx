import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import * as actions from "../redux/actions";
import deleteImage from "@/main/assets/images/delete.svg";
import defaultToastConfig from "@/main/constants/defaultToastConfig";

const INITIAL_STATE = {
  toastConfig: defaultToastConfig
};

class CategoryItem extends Component {
  state = { ...INITIAL_STATE };

  // delete category
  handleClickAction = () => {
    const { toastConfig } = this.state;
    const { deleteCategory, item } = this.props;

    deleteCategory(item.id).then(() => {
      toast(`${item.name} deleted !`, toastConfig);
    });
  };

  render() {
    const { item } = this.props;
    return item.name === "Uncategorised" ? null : (
      <li className="items-list-admin__item">
        <Link to={`/admin/categories/edit/${item.id}`}>{item.name}</Link>
        <span
          className="items-list-admin__item__delete"
          onClick={this.handleClickAction}
        >
          <img src={deleteImage} alt="Delete button" />
        </span>
      </li>
    );
  }
}

export default connect(
  null,
  actions
)(CategoryItem);
