import React, { Component } from "react";
import { connect } from "react-redux";
import CartList from "../components/CartList";

class Cart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div className="big-container">
        <CartList cart={cart} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cartState.cart
});

export default connect(
  mapStateToProps,
  null
)(Cart);
