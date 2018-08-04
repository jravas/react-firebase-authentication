import React from "react";
import { AdminCategoryItem } from "./AdminCategoryItem";

export const AdminCategoriesList = ({ categories, handleClickAction }) => {
  return !categories ? null : (
    <ul className="items-list-admin container-style">
      {Object.keys(categories).map(key => (
        <AdminCategoryItem
          key={key}
          item={categories[key]}
          handleClickAction={handleClickAction}
        />
      ))}
    </ul>
  );
};
