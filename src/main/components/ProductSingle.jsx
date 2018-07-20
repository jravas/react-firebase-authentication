import React, { Component } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
// minified version is also included
import "react-toastify/dist/ReactToastify.min.css";
import { fetchProduct } from "@/modules/product/redux/actions";
import { AddToCart } from "@/modules/cart/redux/actions";
import "./ProductSingle.scss";

class ProductSingle extends Component {
  state = {
    toastConfig: {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    }
  };
  componentWillMount() {
    const { id } = this.props.match.params;
    const { fetchProduct } = this.props;
    fetchProduct(id);
  }
  addToCart = () => {
    const { AddToCart, product, authUser } = this.props;
    const { toastConfig } = this.state;
    AddToCart(product, authUser).then(() => {
      toast(`${product.name} added to cart !`, toastConfig);
    });
  };
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              voluptates maiores, cum molestiae quo, ipsa unde dolorem magnam
              quos vel ratione possimus. Nulla nisi aliquid fuga beatae neque ut
              quasi.
            </p>
            <div className="product-single__info__add-price">
              <p>{product.price} $</p>
              <button className="default-button" onClick={this.addToCart}>
                Add to cart
              </button>
            </div>
          </div>
          <ToastContainer />
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
