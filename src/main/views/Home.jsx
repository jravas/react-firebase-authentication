import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "@/modules/product/redux/actions";
import { HomeSlider } from "../components/HomeSlider";

class HomePage extends Component {
  componentDidMount() {
    const { fetchProductsArr } = this.props;
    fetchProductsArr();
  }
  render() {
    const { products } = this.props;
    return !products ? null : (
      <div>
        <h1 className="sale-title">Special Off>ers</h1>
        <div className="container-style home-fix">
          <HomeSlider products={products} />
        </div>
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
