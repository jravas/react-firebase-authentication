import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import deleteImage from "@/main/images/delete.svg";

class ProductItem extends Component {
  handleClickAction = productId => {
    const { deleteProduct } = this.props;
    deleteProduct(productId);
  };
  render() {
    const { item } = this.props;
    return (
      <li className="items-list-admin__item">
        <Link to={`/admin/products/edit/${item.id}`}>{item.name}</Link>
        <span
          className="items-list-admin__item__delete"
          onClick={() => this.handleClickAction(item.id)}
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
