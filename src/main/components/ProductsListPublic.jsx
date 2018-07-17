import React, { Component } from "react";
import ProductPublic from "./ProductPublic";
import "./ProductsListPublic.css";
class ProductsListPublic extends Component {
  render() {
    const { products } = this.props;
    return (
      <ul className="product-list">
        {products &&
          Object.keys(products).map(key => (
            <ProductPublic key={key} product={products[key]} />
          ))}
      </ul>
    );
  }
}

export default ProductsListPublic;
