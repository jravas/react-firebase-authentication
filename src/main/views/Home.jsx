import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "@/modules/product/redux/actions";
import { ProductsListPublic } from "@/modules/product";

class HomePage extends Component {
  componentDidMount() {
    const { fetchProductsArr } = this.props;
    fetchProductsArr();
  }
  render() {
    const { products } = this.props;
    return (
      <div>
        <ProductsListPublic products={products} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsState.productsArr
});

export default connect(
  mapStateToProps,
  actions
)(HomePage);
