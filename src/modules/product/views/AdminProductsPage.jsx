import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import { AdminProductsList } from "../components/AdminProductsList";
import AdminProductAdd from "../components/AdminProductAdd";
import { AddButton } from "@/main/components/AddButton";

class AdminProductsPage extends Component {
  state = { modal: false };
  // product item delete
  handleClickAction = event => {
    const { deleteProduct } = this.props;
    const { itemId } = event.target.dataset;
    deleteProduct(itemId);
  };

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    const { products } = this.props;
    const { modal } = this.state;
    return (
      <div>
        {!modal ? null : (
          <AdminProductAdd closeModal={this.setState.bind(this)} />
        )}
        <AdminProductsList
          products={products}
          handleClickAction={this.handleClickAction}
        />
        <AddButton openModal={this.setState.bind(this)} />
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
)(AdminProductsPage);
