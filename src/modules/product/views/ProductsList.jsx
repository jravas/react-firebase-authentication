import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

class ProductsList extends Component {
  handleClickAction = productId => {
    const { deleteProduct } = this.props;
    deleteProduct(productId);
  };
  render() {
    const { products } = this.props;
    console.log(products);
    return (
      <ul className="list-group">
        {products &&
          Object.keys(products).map(key => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={key}
              onClick={() => this.handleClickAction(products[key].id)}
            >
              {products[key].name}
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
