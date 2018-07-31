import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import deleteImage from "@/main/assets/images/delete.svg";

class ProductItem extends Component {
  handleClickAction = () => {
    const { deleteProduct, item } = this.props;
    deleteProduct(item.id);
  };

  render() {
    const { item } = this.props;
    return (
      <li className="items-list-admin__item">
        <Link to={`/admin/products/edit/${item.id}`}>{item.name}</Link>
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
)(ProductItem);
