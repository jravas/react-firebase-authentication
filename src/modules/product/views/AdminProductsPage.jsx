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
  // open add product modal
  openModal = event => {
    this.setState({ modal: true });
  };
  // close modal action
  closeModal = event => {
    this.setState({ modal: false });
  };

  componentDidMount() {
    const { fetchProductsArr } = this.props;
    fetchProductsArr();
  }

  render() {
    const { products } = this.props;
    const { modal } = this.state;
    return (
      <div>
        {modal && <AdminProductAdd onClick={this.closeModal} />}
        <AdminProductsList
          products={products}
          handleClickAction={this.handleClickAction}
        />
        <AddButton onClick={this.openModal} />
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
)(AdminProductsPage);
