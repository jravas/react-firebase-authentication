import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ProductPublic.css";

class ProductPublic extends Component {
  handleClick = event => {
    const { history, product } = this.props;
    history.push(`/product/${product.id}`);
  };
  render() {
    const { product } = this.props;
    console.log(product);
    return (
      product && (
        <li className="product" onClick={this.handleClick}>
          <section className="product-image">
            <img src={product.imageUrl} alt="Product" />
          </section>
          <section className="product-info">
            <h1>{product.name}</h1>
            <p>{product.price}</p>
          </section>
        </li>
      )
    );
  }
}

export default withRouter(ProductPublic);
