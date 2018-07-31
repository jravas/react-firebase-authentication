import React, { Component } from "react";
import { connect } from "react-redux";
import { RemoveFromCart } from "../redux/actions";
import deleteImage from "@/main/assets/images/cancel.svg";

class CartItem extends Component {
  handleDelete = () => {
    const { RemoveFromCart, item, authUser } = this.props;
    RemoveFromCart(item, authUser);
  };

  render() {
    const { item } = this.props;
    return !item ? null : (
      <li className="cart-item">
        <section className="cart-item__image">
          <img src={item.imageUrl} alt="Cart item" />
        </section>
        <section className="cart-item__info">
          <div className="cart-item__info__header">
            <h1>{item.name}</h1>
            <div
              className="cart-item__info__header__remove"
              onClick={this.handleDelete}
            >
              <img src={deleteImage} alt="Delete button" />
            </div>
          </div>
          <div className="cart-item__info__footer">
            <span className="cart-item__info__footer__price">{item.price}</span>
          </div>
        </section>
      </li>
    );
  }
}
const actions = { RemoveFromCart };
const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(
  mapStateToProps,
  actions
)(CartItem);
