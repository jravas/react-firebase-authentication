import React from "react";
import Plus from "@/main/assets/images/plus.svg";

export const AddButton = props => {
  const openModal = e => {
    const { openModal } = props;
    openModal({ modal: true });
  };
  return (
    <div className="add-button" onClick={openModal}>
      <img src={Plus} alt="Add icon" />
    </div>
  );
};
