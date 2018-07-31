// ProductPagePublic
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import ProductsListPublic from "../components/ProductsListPublic";
import ProductsFilter from "../components/ProductsFilter";

class ProductPagePublic extends Component {
  state = {
    filter: null
  };

  componentDidMount() {
    const { fetchProductsArr } = this.props;
    fetchProductsArr();
  }

  onFilter = event => {
    this.setState({
      filter: event.target.value
    });
  };

  getFiltered = filter => {
    const { products } = this.props;

    switch (filter) {
      case "ASC":
        return products.concat().sort((obj1, obj2) => obj1.price - obj2.price);
      case "DESC":
        return products.concat().sort((obj1, obj2) => obj2.price - obj1.price);
      default:
        return products;
    }
  };

  render() {
    const { filter } = this.state;
    const currentProducts = this.getFiltered(filter);

    return (
      <div>
        <ProductsFilter products={currentProducts} onFilter={this.onFilter} />
        <ProductsListPublic products={currentProducts} />
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
