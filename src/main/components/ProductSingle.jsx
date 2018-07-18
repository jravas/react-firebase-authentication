import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../modules/product/redux/actions";
import { AddToCart } from "../../modules/cart/redux/actions";
import "./ProductSingle.scss";

class ProductSingle extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    const { fetchProduct } = this.props;
    fetchProduct(id).then(() => console.log(this.props));
  }
  addToCart = () => {
    const { AddToCart } = this.props;
    AddToCart(this.props.product);
  };
  render() {
    const { product } = this.props;
    return (
      product && (
        <section className="product-single big-container">
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
              <button onClick={this.addToCart}>Add to cart</button>
            </div>
          </div>
        </section>
      )
    );
  }
}

const actions = { fetchProduct, AddToCart };

const mapStateToProps = state => ({
  product: state.productsState.products
});

export default connect(
  mapStateToProps,
  actions
)(ProductSingle);
