import React, { Component } from "react";
import { connect } from "react-redux";

class CartTotal extends Component {
  render() {
    const { total } = this.props;
    return (
      total !== 0 && (
        <div className="cart-total">
          <h1>Total: {total}</h1>
        </div>
      )
    );
  }
}

const mapStateToProps = state => ({
  total: state.cartState.cartTotal,
  cart: state.cartState.cart
});
export default connect(
  mapStateToProps,
  null
)(CartTotal);
