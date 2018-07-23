import React, { Component } from "react";
import { Link } from "react-router-dom";

const INITIAL_STATE = { imgLoading: true };

class ProductPublic extends Component {
  state = { ...INITIAL_STATE };
  handleLoad(data) {
    this.setState(data);
  }
  render() {
    const { product } = this.props;
    return (
      product && (
        <li className="product">
          <Link to={`/product/${product.id}`}>
            <section
              onLoad={this.handleLoad.bind(this, { imgLoading: false })}
              className={`product__image ${this.state.imgLoading &&
                "product__image--loading"}`}
            >
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

export default ProductPublic;
