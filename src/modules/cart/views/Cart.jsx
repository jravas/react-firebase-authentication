import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCartItems } from "../redux/actions";
import CartList from "../components/CartList";

class Cart extends Component {
  // componentWillMount() {
  //   const { fetchCartItems, authUser } = this.props;
  //   fetchCartItems(authUser);
  // }
  render() {
    const { cart, authUser } = this.props;
    return (
      <div className="big-container">
        <CartList cart={cart} authUser={authUser} />
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
