import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import withAuthorization from "@/main/components/withAuthorization";
import * as actions from "../redux/actions";
import ProductsList from "../components/ProductsList";
import ProductAdd from "../components/ProductAdd";
import AddButton from "@/main/components/AddButton";
const INITIAL_STATE = { modal: false };
class AdminProductsPage extends Component {
  state = { ...INITIAL_STATE };
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }
  render() {
    const { products } = this.props;
    const { modal } = this.state;
    return (
      <div>
        {modal && <ProductAdd closeModal={this.setState.bind(this)} />}
        <ProductsList products={products} />
        <AddButton openModal={this.setState.bind(this)} />
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
)(AdminProductsPage);
