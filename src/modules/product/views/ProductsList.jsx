import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

class ProductsList extends Component {
  handleClickAction = productId => {
    const { deleteProduct } = this.props;
    deleteProduct(productId);
  };
  render() {
    const { products } = this.props;
    return (
      <ul className="list-group">
        {products &&
          Object.keys(products).map(key => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={key}
            >
              <Link to={`/admin/products/edit/${products[key].id}`}>
                {products[key].name}
              </Link>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => this.handleClickAction(products[key].id)}
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
)(ProductsList);
