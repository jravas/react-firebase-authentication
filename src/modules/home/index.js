import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../product/redux/actions";
import ProductsListPublic from "@/main/components/ProductsListPublic";

class HomePage extends Component {
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
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
  products: state.productsState.products
});

export default connect(
  mapStateToProps,
  actions
)(HomePage);
