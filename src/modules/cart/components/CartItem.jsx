import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CartItem extends Component {
  render() {
    const { item, handleDelete } = this.props;
    return !item ? null : (
      <li className="cart-item">
        <section className="cart-item__image">
          <img src={item.imageUrl} alt="Cart item" />
        </section>
        <section className="cart-item__info">
          <div className="cart-item__info__header">
            <Link
              className="cart-item__info__header__title"
              to={`product/${item.id}`}
            >
              {item.name}
            </Link>
            <button
              type="button"
              data-item-id={item.cartId}
              className="cart-item__info__header__remove"
              onClick={handleDelete}
            />
          </div>
          <div className="cart-item__info__footer">
            <span className="cart-item__info__footer__price">
              {item.discountActive ? item.actionPrice : item.price}
            </span>
          </div>
        </section>
      </li>
    );
  }
}
