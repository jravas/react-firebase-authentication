import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductsList extends Component {
  render() {
    const { products } = this.props;
    return (
      <ul className="items-list-admin container-style">
        {products &&
          Object.keys(products).map(key => (
            <ProductItem key={key} item={products[key]} />
          ))}
      </ul>
    );
  }
}

export default ProductsList;
