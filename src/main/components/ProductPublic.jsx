import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./ProductPublic.scss";

class ProductPublic extends Component {
  handleClick = event => {
    const { history, product } = this.props;
    history.push(`/product/${product.id}`);
  };
  render() {
    const { product } = this.props;
    return (
      product && (
        <li className="product" onClick={this.handleClick}>
          <section className="product__image">
            <img src={product.imageUrl} alt="Product" />
          </section>
          <section className="product__info">
            <h1 className="product__info__name">{product.name}</h1>
            <p className="product__info__price">{product.price}</p>
          </section>
        </li>
      )
    );
  }
}

export default withRouter(ProductPublic);
