import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import { CartList } from "../components/CartList";
import { CartTotal } from "../components/CartTotal";

class Cart extends Component {
  // cart item delete
  handleDelete = event => {
    const { RemoveFromCart, authUser } = this.props;
    const { itemId } = event.target.dataset;
    RemoveFromCart(itemId, authUser);
  };

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
    // nonauth quick fix
    if (!authUser && cart.length !== prevProps.cart.length) {
      fetchCartItems(authUser, cart);
    }
  }

  render() {
    const { cart, authUser, total } = this.props;
    return (
      <div className="container-style cart-list-helper">
        <CartList
          cart={cart}
          authUser={authUser}
          handleDelete={this.handleDelete}
        />
        <CartTotal total={total} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cartState.cart,
  authUser: state.sessionState.authUser,
  total: state.cartState.cartTotal
});

export default connect(
  mapStateToProps,
  actions
)(Cart);
