import React from "react";
import { Link } from "react-router-dom";

export const AdminCategoryItem = ({ item, handleClickAction }) => {
  return item.name === "Uncategorised" ? null : (
    <li className="items-list-admin__item">
      <Link to={`/admin/categories/edit/${item.id}`}>{item.name}</Link>
      <button
        type="button"
        data-item-id={item.id}
        className="items-list-admin__item__delete"
        onClick={handleClickAction}
      />
    </li>
  );
};
