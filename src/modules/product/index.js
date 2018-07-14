import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import withAuthorization from "../../main/components/withAuthorization";
import * as actions from "./redux/actions";
import ProductsList from "./views/ProductsList";
import ProductAdd from "./views/ProductAdd";

class ProductsPage extends Component {
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }
  render() {
    const { products } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <ProductAdd />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <ProductsList products={products} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsState.products
});

const authCondition = authUser => !!authUser;
export default compose(
  withAuthorization(authCondition),
  connect(
    mapStateToProps,
    actions
  )
)(ProductsPage);
