import React from "react";

export const UserItem = ({ user }) => {
  const { username, email } = user;
  return (
    <li className="items-list-admin__item">
      <p>
        {username} - {email}
      </p>
    </li>
  );
};
