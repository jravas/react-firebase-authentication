import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./ProductPublic.scss";

class ProductPublic extends Component {
  render() {
    const { product } = this.props;
    return (
      product && (
        <li className="product">
          <Link to={`/product/${product.id}`}>
            <section className="product__image">
              <img src={product.imageUrl} alt="Product" />
            </section>
            <section className="product__info">
              <h1 className="product__info__name">{product.name}</h1>
              <p className="product__info__price">{product.price}</p>
            </section>
          </Link>
        </li>
      )
    );
  }
}

export default withRouter(ProductPublic);
