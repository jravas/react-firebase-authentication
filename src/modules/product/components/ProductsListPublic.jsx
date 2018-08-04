import React from "react";
import ProductPublic from "./ProductPublic";

export const ProductsListPublic = ({ products }) => {
  return !products ? null : (
    <ul className="product-list">
      {products.map(item => <ProductPublic key={item.id} product={item} />)}
    </ul>
  );
};
