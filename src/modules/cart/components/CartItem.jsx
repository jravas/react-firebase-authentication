import React from "react";

export const CartItem = ({ item, handleDelete }) => {
  return !item ? null : (
    <li className="cart-item">
      <section className="cart-item__image">
        <img src={item.imageUrl} alt="Cart item" />
      </section>
      <section className="cart-item__info">
        <div className="cart-item__info__header">
          <h1>{item.name}</h1>
          <button
            type="button"
            data-item-id={item.cartId}
            className="cart-item__info__header__remove"
            onClick={handleDelete}
          />
        </div>
        <div className="cart-item__info__footer">
          <span className="cart-item__info__footer__price">{item.price}</span>
        </div>
      </section>
    </li>
  );
};
