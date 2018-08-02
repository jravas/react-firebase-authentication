// ProductPagePublic
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import ProductsListPublic from "../components/ProductsListPublic";
import ProductsFilter from "../components/ProductsFilter";

class ProductPagePublic extends Component {
  state = {
    filter: null,
    category: null
  };

  componentDidMount() {
    const { fetchProductsArr } = this.props;
    fetchProductsArr();
  }

  // get categories for category select
  getCategories = products => {
    let categories = [];
    let uniq = cat => [...new Set(cat)];

    // get categories array from products
    products.forEach(element => {
      categories.push(element.category);
    });

    // add all to categories array
    categories.push("All");

    // sort categories by name
    categories.sort();
    return uniq(categories);
  };

  // selected price filter
  onFilter = event => {
    this.setState({
      filter: event.target.value
    });
  };

  // selected category filter
  onCategoryFilter = event => {
    this.setState({
      category: event.target.value
    });
  };

  // filter products by category
  getCategoriesed = (category, products) => {
    return category === "All" || !category
      ? products
      : products.map(item => (item.category === category ? item : null));
  };

  // filter products by selected price filter
  getFiltered = (filter, products) => {
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
    const { products } = this.props;
    const { filter, category } = this.state;

    const categories = this.getCategories(products);
    let currentProducts = this.getFiltered(filter, products);
    currentProducts = this.getCategoriesed(category, currentProducts);

    return (
      <div>
        <ProductsFilter
          categories={categories}
          onFilter={this.onFilter}
          onCategoryFilter={this.onCategoryFilter}
        />
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
