import React, { Component } from "react";
import ProductPublic from "./ProductPublic";
class ProductsListPublic extends Component {
  render() {
    const { products } = this.props;
    return (
      products && (
        <ul className="product-list">
          {Object.keys(products).map(key => (
            <ProductPublic key={key} product={products[key]} />
          ))}
        </ul>
      )
    );
  }
}

export default ProductsListPublic;
