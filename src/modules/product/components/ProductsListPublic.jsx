import React, { Component } from "react";
import ProductPublic from "./ProductPublic";
class ProductsListPublic extends Component {
  render() {
    const { products } = this.props;
    return !products ? null : (
      <ul className="product-list">
        {products.map(item => <ProductPublic key={item.id} product={item} />)}
      </ul>
    );
  }
}

export default ProductsListPublic;
