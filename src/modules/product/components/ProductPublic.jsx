import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ProductPublic extends Component {
  state = { imgLoading: true, productAction: true };

  handleLoad = () => {
    this.setState({ imgLoading: false });
  };

  render() {
    const { imgLoading, productAction } = this.state;
    const { product } = this.props;
    return (
      <li className={productAction ? "product product--action" : "product"}>
        {!product.discountActive ? null : (
          <div className="product--action__image" />
        )}
        <Link to={`/product/${product.id}`} params={{ id: product.id }}>
          <section
            onLoad={this.handleLoad}
            className={`product__image ${
              imgLoading ? "product__image--loading" : ""
            }`}
          >
            <img src={product.imageUrl} alt="Product" />
          </section>
          <section className="product__info">
            <h1 className="product__info__name">{product.name}</h1>
            {product.discountActive && (
              <p className="product__info__price-old">{product.price}</p>
            )}
            <p className="product__info__price">
              {product.discountActive ? product.actionPrice : product.price}
            </p>
          </section>
        </Link>
      </li>
    );
  }
}
