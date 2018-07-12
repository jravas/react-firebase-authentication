import React from "react";
import { db } from "../../firebase";

const ListProducts = ({ products }) => (
  <div>
    <h2>List of Items</h2>
    <ul className="list-group">
      {Object.keys(products).map(key => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={key}
          onClick={() => db.eidtProduct(products[key].key)}
        >
          {products[key].title}
        </li>
      ))}
    </ul>
    <hr />
  </div>
);

export default ListProducts;
