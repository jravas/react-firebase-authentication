import React from "react";
import { AdminCategoryItem } from "./AdminCategoryItem";

export const AdminCategoriesList = ({ categories, handleClickAction }) => {
  return !categories.length ? null : (
    <ul className="items-list-admin container-style">
      {categories.map(item => (
        <AdminCategoryItem
          key={item.id}
          item={item}
          handleClickAction={handleClickAction}
        />
      ))}
    </ul>
  );
};
