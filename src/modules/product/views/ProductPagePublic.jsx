import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import ProductsListPublic from "../components/ProductsListPublic";
import ProductsFilter from "../components/ProductsFilter";

const INITIAL_STATE = { filtered: null };

class ProductPagePublic extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  componentDidMount() {
    const { fetchProductsArr } = this.props;
    fetchProductsArr();
  }
  render() {
    const { filtered } = this.state;
    const { products, fetchProductsArr } = this.props;
    return (
      <div>
        <ProductsFilter
          products={products}
          filter={this.setState.bind(this)}
          reFetch={fetchProductsArr}
        />
        <ProductsListPublic products={filtered || products} />
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
)(ProductPagePublic);
