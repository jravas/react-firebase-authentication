import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import * as actions from "../redux/actions";
import deleteImage from "@/main/images/delete.svg";
import defaultToastConfig from "@/main/constants/defaultToastConfig";

const INITIAL_STATE = {
  toastConfig: defaultToastConfig
};

class ProductItem extends Component {
  state = { ...INITIAL_STATE };
  handleClickAction = productId => {
    const { toastConfig } = this.state;
    const { deleteProduct, item } = this.props;
    deleteProduct(productId).then(() => {
      toast(`${item.name} deleted !`, toastConfig);
    });
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
