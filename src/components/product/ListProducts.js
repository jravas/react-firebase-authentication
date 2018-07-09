import React from "react";

const ListProducts = ({ products }) => (
  <div>
    <h2>List of Items</h2>
    {Object.keys(products).map(key => (
      <div key={key}>{products[key].title}</div>
    ))}
    <hr />
  </div>
);

export default ListProducts;
