import React, { Component } from "react";
import { connect } from "react-redux";
import { RemoveFromCart } from "../redux/actions";
import "./CartItem.scss";

class CartItem extends Component {
  handleDelete = () => {
    const { RemoveFromCart, item, authUser } = this.props;
    RemoveFromCart(item.cartId, authUser);
  };
  render() {
    const { item } = this.props;
    return (
      item && (
        <li className="cart-item">
          <section className="cart-item__image">
            <img src={item.imageUrl} alt="Cart item" />
          </section>
          <section className="cart-item__info">
            <div className="cart-item__info__header">
              <h1>{item.name}</h1>
              <button onClick={this.handleDelete}>delte</button>
            </div>
          </section>
        </li>
      )
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
