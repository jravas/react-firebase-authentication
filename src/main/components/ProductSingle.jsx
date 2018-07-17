import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../modules/product/redux/actions";
import "./ProductSingle.css";

class ProductSingle extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    const { fetchProduct } = this.props;
    fetchProduct(id).then(() => console.log(this.props));
  }
  render() {
    const { product } = this.props;
    return (
      product && (
        <section className="product-single">
          <div className="product-single-image">
            <img src={product.imageUrl} alt="Product" />
          </div>
          <div className="product-single-info">
            <h1>{product.name}</h1>
            <p>{product.price}</p>
          </div>
        </section>
      )
    );
  }
}

const mapStateToProps = state => ({
  product: state.productsState.products
});

export default connect(
  mapStateToProps,
  actions
)(ProductSingle);
