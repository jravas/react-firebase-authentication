import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import deleteImage from "@/main/images/delete.svg";

class ProductsList extends Component {
  handleClickAction = productId => {
    const { deleteProduct } = this.props;
    deleteProduct(productId);
  };
  render() {
    const { products } = this.props;
    return (
      <ul className="items-list-admin container-style">
        {products &&
          Object.keys(products).map(key => (
            <li className="items-list-admin__item" key={key}>
              <Link to={`/admin/products/edit/${products[key].id}`}>
                {products[key].name}
              </Link>
              <span
                className="items-list-admin__item__delete"
                onClick={() => this.handleClickAction(products[key].id)}
              >
                <img src={deleteImage} alt="Delete button" />
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
)(ProductsList);
