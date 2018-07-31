import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductPublic extends Component {
  state = { imgLoading: true };

  handleLoad = () => {
    this.setState({ imgLoading: false });
  };

  render() {
    const { imgLoading } = this.state;
    const { product } = this.props;
    return !product ? null : (
      <li className="product">
        <Link to={`/product/${product.id}`}>
          <section
            onLoad={this.handleLoad}
            className={`product__image ${
              !imgLoading ? null : "product__image--loading"
            }`}
          >
            <img src={product.imageUrl} alt="Product" />
          </section>
          <section className="product__info">
            <h1 className="product__info__name">{product.name}</h1>
            <p className="product__info__price">{product.price}</p>
          </section>
        </Link>
      </li>
    );
  }
}

export default ProductPublic;
