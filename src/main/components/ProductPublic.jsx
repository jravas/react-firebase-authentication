import React, { Component } from "react";
import "./ProductPublic.css";

class ProductPublic extends Component {
  render() {
    const { product } = this.props;
    return (
      product && (
        <li className="product">
          <section className="product-image">
            <img src={product.imageUrl} alt="Product" />
          </section>
          <section className="product-info">
            <h1>{product.name}</h1>
            <p>24,99 $</p>
          </section>
        </li>
      )
    );
  }
}

export default ProductPublic;
