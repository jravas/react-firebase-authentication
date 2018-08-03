import React from "react";

export const UserItem = props => {
  const { username, email } = props.user;
  return (
    <li className="items-list-admin__item">
      <p>
        {username} - {email}
      </p>
    </li>
  );
};
