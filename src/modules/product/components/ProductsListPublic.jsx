import React from "react";
import FlipMove from "react-flip-move";
import { ProductPublic } from "./ProductPublic";

export const ProductsListPublic = ({ products }) => {
  return !products.length ? null : (
    <FlipMove typeName="ul" className="product-list">
      {products.map(item => <ProductPublic key={item.id} product={item} />)}
    </FlipMove>
  );
};
