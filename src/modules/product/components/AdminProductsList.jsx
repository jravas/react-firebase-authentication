import React from "react";
import { AdminProductItem } from "./AdminProductItem";

export const AdminProductsList = ({ products, handleClickAction }) => {
  return (
    <ul className="items-list-admin container-style">
      {Object.keys(products).map(key => (
        <AdminProductItem
          key={key}
          item={products[key]}
          handleClickAction={handleClickAction}
        />
      ))}
    </ul>
  );
};
