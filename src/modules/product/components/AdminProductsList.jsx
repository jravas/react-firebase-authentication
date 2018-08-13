import React from "react";
import { AdminProductItem } from "./AdminProductItem";

export const AdminProductsList = ({ products, handleClickAction }) => {
  return !products.length ? null : (
    <ul className="items-list-admin container-style">
      {products.map(product => (
        <AdminProductItem
          key={product.id}
          item={product}
          handleClickAction={handleClickAction}
        />
      ))}
    </ul>
  );
};
