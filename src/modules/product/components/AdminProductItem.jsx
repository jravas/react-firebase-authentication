import React from "react";
import { Link } from "react-router-dom";

export const AdminProductItem = ({ item, handleClickAction }) => {
  return (
    <li className="items-list-admin__item">
      <Link to={`/admin/products/edit/${item.id}`}>{item.name}</Link>
      <button
        type="button"
        data-item-id={item.id}
        className="items-list-admin__item__delete"
        onClick={handleClickAction}
      />
    </li>
  );
};
