import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { fetchProduct } from "@/modules/product/redux/actions";
import { AddToCart } from "@/modules/cart/redux/actions";
import defaultToastConfig from "@/main/constants/defaultToastConfig";

const INITIAL_STATE = {
  toastConfig: defaultToastConfig
};

class ProductSingle extends Component {
  state = { ...INITIAL_STATE };
  componentWillMount() {
    const { id } = this.props.match.params;
    const { fetchProduct } = this.props;
    fetchProduct(id);
  }
  addToCart() {
    const { AddToCart, product, authUser } = this.props;
    const { toastConfig } = this.state;
    AddToCart(product, authUser).then(() => {
      toast(`${product.name} added to cart !`, toastConfig);
    });
  }
  render() {
    const { product } = this.props;
    return (
      product && (
        <section className="product-single container-style">
          <div className="product-single__image">
            <img src={product.imageUrl} alt="Product" />
          </div>
          <div className="product-single__info">
            <h1 className="product-single__info__title">{product.name}</h1>
            <p className="product-single__info__description">
              {product.description}
            </p>
            <div className="product-single__info__add-price">
              <p>{product.price} $</p>
              <button
                className="default-button"
                onClick={this.addToCart.bind(this)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </section>
      )
    );
  }
}

const actions = { fetchProduct, AddToCart };

const mapStateToProps = state => ({
  product: state.productsState.products,
  authUser: state.sessionState.authUser
});

export default connect(
  mapStateToProps,
  actions
)(ProductSingle);
