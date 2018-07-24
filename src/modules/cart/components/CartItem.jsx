import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { RemoveFromCart } from "../redux/actions";
import deleteImage from "@/main/images/cancel.svg";
import defaultToastConfig from "@/main/constants/defaultToastConfig";

const INITIAL_STATE = {
  toastConfig: defaultToastConfig
};

class CartItem extends Component {
  state = { ...INITIAL_STATE };
  handleDelete() {
    const { toastConfig } = this.state;
    const { RemoveFromCart, item, authUser } = this.props;
    RemoveFromCart(item, authUser).then(() => {
      toast(`${item.name} removed from cart !`, toastConfig);
    });
  }
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
              <div
                className="cart-item__info__header__remove"
                onClick={this.handleDelete.bind(this)}
              >
                <img src={deleteImage} alt="Delete button" />
              </div>
            </div>
            <div className="cart-item__info__footer">
              <span className="cart-item__info__footer__price">
                {item.price}
              </span>
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
