import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCartItems } from "../redux/actions";
import { CartList } from "../components/CartList";
import CartTotal from "../components/CartTotal";

class Cart extends Component {
  componentDidMount() {
    const { fetchCartItems, authUser, cart } = this.props;
    // fetch cart items
    fetchCartItems(authUser, cart);
  }
  componentDidUpdate(prevProps) {
    const { fetchCartItems, authUser, cart } = this.props;
    // update cart with firebase if user authenticates
    if (authUser !== prevProps.authUser) {
      fetchCartItems(authUser, cart);
    }
  }
  render() {
    const { cart, authUser } = this.props;
    return (
      <div className="container-style cart-list-helper">
        <CartList cart={cart} authUser={authUser} />
        <CartTotal />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cartState.cart,
  authUser: state.sessionState.authUser
});

const actions = { fetchCartItems };
export default connect(
  mapStateToProps,
  actions
)(Cart);
